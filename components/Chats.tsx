import React, { useState, KeyboardEvent, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdSend, IoMdClose } from "react-icons/io";
import axios from "axios";

// Define the type for a chat message
interface Message {
  text: string;
  sender: "user" | "system" | "loading";
}

// Define the type for props
interface ChatBotProps {
  openChatBot: boolean;
  setOpenChatBot: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatBot: React.FC<ChatBotProps> = ({ openChatBot, setOpenChatBot }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "How can I help you?", sender: "system" }, // Initial system message
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);
    setInput("");
    setLoading(true);

    const payload = { request: input };
    try {
      const response = await axios.post("http://localhost:8000/query", payload);
      if (response.status === 200) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.data.response, sender: "system" },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  useEffect(() => {
    if (loading) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "", sender: "loading" },
      ]);
    }
  }, [loading]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleCloseChatBot = () => {
    setOpenChatBot(!openChatBot);
  };

  return (
    <motion.div
      className="w-96 fixed top-28 right-6 bg-gradient-to-br from-gray-800 to-blue-900 text-white flex flex-col shadow-lg rounded-lg z-50"
      style={{ height: "calc(100vh - 8rem)" }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <header className="bg-walmart text-white py-4 px-6 flex justify-between items-center shadow-lg rounded-t-lg">
        <h1 className="text-3xl font-bold">OurMart</h1>
        <IoMdClose
          className="text-2xl cursor-pointer"
          onClick={handleCloseChatBot}
        />
      </header>
      <motion.div
        className="flex-grow overflow-y-auto p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex ${
                message.sender === "user"
                  ? "justify-end"
                  : message.sender === "system"
                  ? "justify-start"
                  : "justify-center"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : message.sender === "system"
                    ? "bg-white text-black"
                    : "bg-transparent"
                } p-4 rounded-lg shadow-md max-w-xs break-words`}
              >
                {message.sender === "loading" ? (
                  <div className="flex justify-center items-center space-x-2">
                    <div className="dot bg-gray-400 w-2 h-2 rounded-full animate-bounce"></div>
                    <div className="dot bg-gray-400 w-2 h-2 rounded-full animate-bounce"></div>
                    <div className="dot bg-gray-400 w-2 h-2 rounded-full animate-bounce"></div>
                  </div>
                ) : (
                  message.text
                )}
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </motion.div>
      <div className="bg-gray-800 border-t p-4 flex rounded-b-lg">
        <input
          type="text"
          className="flex-grow border border-gray-600 rounded-lg p-2 mr-2 bg-gray-900 text-white placeholder-gray-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-walmart text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800 transition"
          onClick={handleSendMessage}
        >
          <IoMdSend className="text-2xl" />
        </button>
      </div>
      <style>{`
        .dot {
          animation: bounce 0.6s infinite alternate;
        }
        @keyframes bounce {
          to {
            opacity: 0.3;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ChatBot;
