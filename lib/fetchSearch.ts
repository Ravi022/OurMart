import { Result } from "@/typings/searchTypings";

interface FetchData {
  method: string;
  body: string;
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
}

const dummyResponse = {
  results: [
    {
      content: {
        url: "https://www.walmart.com/search?q=tshirt",
        organic: [
          {
            url: "https://www.walmart.com/ip/George-Men-s-Big-Men-s-Short-Sleeve-Crewneck-Tee-3-Pack-Sizes-XS-3XL/5038143315",
            image:
              "https://i5.walmartimages.com/seo/George-Men-s-Big-Men-s-Short-Sleeve-Crewneck-Tee-3-Pack-Sizes-XS-3XL_bc4fa173-eb23-4c2a-a4b2-41c0a91dae55.7f469948e4389731f326014e7e0abee4.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 12.7,
              currency: "USD",
            },
            title:
              "George Men's & Big Men's 3-Pack Crewneck Tee with Short Sleeves, Sizes XS-3XL",
            rating: {
              count: 2512,
              rating: 4.7,
            },
            seller: {
              name: "George",
            },
            product_id: "5038143315",
            badge: "Best seller",
            variants: [
              {
                url: "https://www.walmart.com/ip/George-Men-s-Big-Men-s-Short-Sleeve-Crewneck-Tee-3-Pack-Sizes-XS-3XL/5036694454?variantFieldId=actual_color",
                title: "Black Soot/Charcoal Grey Heather/Aqua Surf",
                product_id: "5036694454",
              },
              {
                url: "https://www.walmart.com/ip/George-Men-s-Solid-Crew-T-Shirt/5361875670?variantFieldId=actual_color",
                title: "Black Soot/Light Grey Heather/Dark Navy",
                product_id: "5361875670",
              },
              {
                url: "https://www.walmart.com/ip/George-Men-s-Big-Men-s-Short-Sleeve-Crewneck-Tee-3-Pack-Sizes-XS-3XL/5036448371?variantFieldId=actual_color",
                title: "Black Soot/Vivid White/Aqua Surf",
                product_id: "5036448371",
              },
              {
                url: "https://www.walmart.com/ip/George-Men-s-Big-Men-s-Short-Sleeve-Crewneck-Tee-3-Pack-Sizes-XS-3XL/5038143315?variantFieldId=actual_color",
                title: "Black Soot/Vivid White/Charcoal Grey Heather",
                product_id: "5038143315",
              },
            ],
          },
          {
            url: "https://www.walmart.com/ip/Men-s-General-Motors-American-Made-Distressed-Logo-Graphic-Tee-Charcoal-Heather-2X-Large/1829576721",
            image:
              "https://i5.walmartimages.com/seo/Men-s-General-Motors-American-Made-Distressed-Logo-Graphic-Tee-Charcoal-Heather-2X-Large_4af02aa8-a716-44a4-8eae-171e6d21e513.4e975114bc5a61fde3e9676aacda8442.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 14.99,
              currency: "USD",
            },
            title:
              "Men's General Motors American Made Distressed Logo Graphic Tee Charcoal Heather",
            rating: {
              count: 1,
              rating: 5,
            },
            seller: {
              name: "General Motors",
            },
            product_id: "1829576721",
            badge: "New",
            variants: [
              {
                url: "https://www.walmart.com/ip/Men-s-General-Motors-American-Made-Distressed-Logo-Graphic-Tee-Charcoal-Heather-2X-Large/1829576721?variantFieldId=actual_color",
                title: "2X-Large",
                product_id: "1829576721",
              },
            ],
          },
          {
            url: "https://www.walmart.com/ip/No-Boundaries-Juniors-Oversize-T-Shirt/5319575381?from=/search",
            image:
              "https://i5.walmartimages.com/seo/No-Boundaries-Juniors-Oversize-T-Shirt_4e73dfb9-58ef-4334-a37d-f7fac2cf772a.bb4edc34f9feb4053ea04fdc4092f3ed.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 8.98,
              currency: "USD",
            },
            title:
              "No Boundaries All Gender Cotton Oversize Tee Shirt, Men's Sizes XS-5XL",
            rating: {
              count: 323,
              rating: 4.5,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "37ES090R9LPL",
            badge: "Best-seller",
            variants: [
              {
                url: "/ip/No-Boundaries-Juniors-Oversize-T-Shirt/5322745292?variantFieldId=actual_color",
                title: "",
                product_id: "",
              },
              {
                url: "/ip/No-Boundaries-Juniors-Oversize-T-Shirt/5421264921?variantFieldId=actual_color",
                title: "",
                product_id: "",
              },
              {
                url: "/ip/No-Boundaries-Juniors-Oversize-T-Shirt/5412160657?variantFieldId=actual_color",
                title: "",
                product_id: "",
              },
              {
                url: "/ip/No-Boundaries-Juniors-Oversize-T-Shirt/5409467666?variantFieldId=actual_color",
                title: "",
                product_id: "",
              },
            ],
          },
          {
            url: "https://www.walmart.com/ip/Brahma-Men-s-Short-Sleeve-Workwear-Shirt-Men-s-Big-Men-s-and-Tall/1399087695?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Brahma-Men-s-Short-Sleeve-Workwear-Shirt-Men-s-Big-Men-s-and-Tall_0e78870c-d990-47cf-b2a9-e9309842f240.5a7954711e4f1a55a53ae315ad6ddec1.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 8.98,
              currency: "USD",
            },
            title:
              "Brahma Men's Short Sleeve Workwear Shirt, Black Soot, Size M",
            rating: {
              count: 85,
              rating: 4.5,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "1M2N9MD6JY57",
            badge: "New",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/JWD-Classic-henley-style-Three-button-henley-closure-Mens-Henley-Short-Sleeve-T-Shirt-Cotton-Casual-Shirt-Mens-ShirtsSummer-Daily-T-Shirts/1113725609?from=/search",
            image:
              "https://i5.walmartimages.com/seo/JWD-Classic-henley-style-Three-button-henley-closure-Mens-Henley-Short-Sleeve-T-Shirt-Cotton-Casual-Shirt-Mens-ShirtsSummer-Daily-T-Shirts_c60e6a70-59ff-4a3f-ae22-f7e7ee17b124.1606293134a5b7d0621d1fff351a4fc8.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 14.98,
              currency: "USD",
            },
            title:
              "JWD Classic henley style Three button henley closure, Mens Henley Short Sleeve T-Shirt Cotton Casual Shirt Mens ShirtsSummer Daily T-Shirts",
            rating: {
              count: 148,
              rating: 4.5,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "6DM3SW3RPNWP",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Men-s-General-Motors-American-Made-Distressed-Logo-Graphic-Tee-Charcoal-Heather-2X-Large/1829576721?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Men-s-General-Motors-American-Made-Distressed-Logo-Graphic-Tee-Charcoal-Heather-2X-Large_4af02aa8-a716-44a4-8eae-171e6d21e513.4e975114bc5a61fde3e9676aacda8442.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 18.99,
              currency: "USD",
            },
            title:
              "Men's General Motors American Made Distressed Logo  Graphic Tee Charcoal Heather",
            rating: {
              count: 1,
              rating: 5.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "14841CJMLYE8",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Gildan-Mens-Ultra-Cotton-T-Shirt/278639076?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Gildan-Mens-Ultra-Cotton-T-Shirt_cadd0f4e-e9e8-45fe-b90f-a7b34a82a99a_1.4228a3b9ba427ae666bc4b71032d3dfa.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 6.96,
              currency: "USD",
            },
            title: "Gildan Mens Ultra Cotton T-Shirt",
            rating: {
              count: 2157,
              rating: 4.6,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "3PUWER1FUVIS",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/George-Men-s-Big-Men-s-Crewneck-Tee-with-Short-Sleeves-Sizes-XS-3XL/5008879529?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/George-Men-s-Big-Men-s-Crewneck-Tee-with-Short-Sleeves-Sizes-XS-3XL_b1adc09b-8c1b-45fd-9fee-72d4df18454e.a2f5abcc16f77244b50d63b32a2e41f7.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 4.98,
              currency: "USD",
            },
            title:
              "George Men's & Big Men's Crewneck Tee with Short Sleeves, Sizes XS-3XL",
            rating: {
              count: 2523,
              rating: 4.7,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "1UVFEH905I6U",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Athletic-Works-Men-s-Solid-Tee-with-Short-Sleeves-Sizes-S-4XL/5222155908?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Athletic-Works-Men-s-Solid-Tee-with-Short-Sleeves-Sizes-S-4XL_4b8ddf7e-7d42-4640-9062-0663a754aad1.4d335a64e2ed046566f17f03073a2f59.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 6.98,
              currency: "USD",
            },
            title:
              "Athletic Works Men's Solid Tri-Blend T-Shirt with Short Sleeves, Sizes S-5XL",
            rating: {
              count: 1348,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "4J95950CZBMW",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Adult-HD-Cotton-T-Shirt/184281067?from=/search",
            image:
              "https://i5.walmartimages.com/asr/100c7978-3322-4bd4-88fb-0ca6ed560713.5ccc5dc3c6beebf047f94607ec5d47a6.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 11.64,
              currency: "USD",
            },
            title: "Adult HD Cotton T-Shirt",
            rating: {
              count: 0,
              rating: 0.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "22BHMPLXVDI6",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Athletic-Works-Men-s-and-Big-Men-s-Cotton-Active-Tee-Sizes-XS-5XL-and-Tall-Sizes/5002335213?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Athletic-Works-Men-s-and-Big-Men-s-Cotton-Active-Tee-Sizes-XS-5XL-and-Tall-Sizes_3a92cb82-b3b1-49e9-bbbc-63d07901dd41.907e5cf7ec1046caf581b75d227d7029.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 4.98,
              currency: "USD",
            },
            title:
              "Athletic Works Men's and Big Men's Cotton Active Tee, Sizes XS-5XL and Tall Sizes",
            rating: {
              count: 361,
              rating: 4.6,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "3OISY7W9FWPU",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Gildan-Adult-Short-Sleeve-Crew-T-Shirt-for-Crafting-Black-Size-L-Soft-Cotton-Classic-Fit-1-Pack-Blank-Tee/19726342?athbdg=L1102&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Gildan-Adult-Short-Sleeve-Crew-T-Shirt-for-Crafting-Black-Size-L-Soft-Cotton-Classic-Fit-1-Pack-Blank-Tee_85722d56-1379-4323-b738-c05a36fc7276.57f12aa3b01118d3922bca235bd5a185.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 4.78,
              currency: "USD",
            },
            title:
              "Gildan Adult Short Sleeve Crew T-Shirt for Crafting - Black, Size L, Soft Cotton, Classic Fit, 1-Pack Blank Tee",
            rating: {
              count: 486,
              rating: 4.5,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "51CSEQ22KCAG",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/HD-Cotton-Short-Sleeve-T-Shirt/199830356?from=/search",
            image:
              "https://i5.walmartimages.com/asr/552782a1-621b-42ab-8b96-8f09b7428b35.b22d37b89877d2f0848c0198402e650e.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 10.9,
              currency: "USD",
            },
            title: "HD Cotton Short Sleeve T-Shirt",
            rating: {
              count: 0,
              rating: 0.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "6BYNH6R24ZFT",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/HD-Cotton-Short-Sleeve-T-Shirt/147392557?from=/search",
            image:
              "https://i5.walmartimages.com/asr/828eead6-8878-4b3c-9ded-b15a4b1c851a.c80013c4c90a2b01ee7a0712d27e625f.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 7.85,
              currency: "USD",
            },
            title: "HD Cotton Short Sleeve T-Shirt",
            rating: {
              count: 0,
              rating: 0.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "4QX0OJCJB5QG",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Time-and-Tru-Women-s-Short-Sleeve-Boyfriend-T-Shirt/5124242921?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Time-and-Tru-Women-s-Short-Sleeve-Boyfriend-T-Shirt_1027b9a5-ecbe-4665-abe7-66ac6eb11887.3faf48816c26a8c3a33a96000441f790.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 7.98,
              currency: "USD",
            },
            title: "Time and Tru Women's Short Sleeve Boyfriend T-Shirt",
            rating: {
              count: 138,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "50E36PXNENLT",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Adult-HD-Cotton-T-Shirt/105107893?from=/search",
            image:
              "https://i5.walmartimages.com/asr/1e48a14d-77c7-4019-9561-7a9ad85358b9_1.0d52670b0ab2e3ef0091bef7477db83b.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 9.93,
              currency: "USD",
            },
            title: "Adult HD Cotton T-Shirt",
            rating: {
              count: 0,
              rating: 0.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "4LBT3VOZZN6E",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Time-and-Tru-Women-s-Crewneck-Solid-Tie-Dye-Tunic-Tee-with-Short-Sleeves-Sizes-S-3XL/5101000131?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Time-and-Tru-Women-s-Crewneck-Solid-Tie-Dye-Tunic-Tee-with-Short-Sleeves-Sizes-S-3XL_b08bf603-dedc-4738-8b6e-a25e5ab87426.7ce518f741f6da4a0eeba2748987b63e.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 9.98,
              currency: "USD",
            },
            title:
              "Time and Tru Women's Crewneck Solid & Tie-Dye Tunic Tee with Short Sleeves, Sizes S-3XL",
            rating: {
              count: 323,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "30NDFFX1KVG3",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Athletic-Works-Women-s-and-Women-s-Plus-Core-Active-V-Neck-T-Shirt-Sizes-XS-4X/5107665365?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Athletic-Works-Women-s-and-Women-s-Plus-Core-Active-V-Neck-T-Shirt-Sizes-XS-4X_44e32e55-be52-41c1-89bf-81ed005f0048.45606fb1522a6d6d25cbb238bdb5ddc4.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 5.98,
              currency: "USD",
            },
            title:
              "Athletic Works Women's and Women's Plus Core Active V-Neck T-Shirt, Sizes XS-4X",
            rating: {
              count: 209,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "4HU417IYXF0Z",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Joower-Moisture-Wicking-Shirts-Men-Todays-Daily-Deals-Tshirts-Graphic-Gym-Mens-T-Shirts-Tee/6701109065?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Joower-Moisture-Wicking-Shirts-Men-Todays-Daily-Deals-Tshirts-Graphic-Gym-Mens-T-Shirts-Tee_acf3a3de-c6e1-4041-887e-afc144d4244e.601f4cc7a516084d9eb17e8f4248cfd0.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 8.99,
              currency: "USD",
            },
            title:
              "Joower Moisture Wicking Shirts for Men Todays Daily Deals Tshirts Shirts for Men Graphic Gym Shirts Men Mens Graphic T-Shirts Mens Shirts Graphic Mens Tee Shirts",
            rating: {
              count: 0,
              rating: 0.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "44DA1D756NHL",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Gildan-Shirts-for-Men-Short-Sleeve-Tshirts-Mens-Classic-Outwear-Cotton-Men-s-Shirt-Blank-Tee-Shirts/510233974?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Gildan-Shirts-for-Men-Short-Sleeve-Tshirts-Mens-Classic-Outwear-Cotton-Men-s-Shirt-Blank-Tee-Shirts_6d900012-6853-45e5-918d-ab7a161b3357_1.8ac6fc6e05d7c6ab637d3019e4bc7603.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 8.95,
              currency: "USD",
            },
            title:
              "Gildan Shirts for Men Short Sleeve Tshirts Mens Classic Outwear Cotton Men's Shirt Blank Tee Shirts",
            rating: {
              count: 87,
              rating: 4.2,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "2718LJ7H03YM",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Disney-Men-s-Stitch-Not-Today-Graphic-Tee-Size-S-3XL/1330047638?athbdg=L1103&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Disney-Men-s-Stitch-Not-Today-Graphic-Tee-Size-S-3XL_b5b16e9b-b563-475c-88c6-cdae337df7b2.2b4a31066603af0c8c6ef3552396342c.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 8.98,
              currency: "USD",
            },
            title: "Disney Men's Stitch Not Today Graphic Tee, Size S-3XL",
            rating: {
              count: 293,
              rating: 4.7,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "2APNQDNQ0EBH",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/XCHQRTI-Mountain-Heartbeat-Tshirt-Graphic-Tees-Women-Ladies-Tee-Shirts-Short-Sleeve/304801925?from=/search",
            image:
              "https://i5.walmartimages.com/seo/XCHQRTI-Mountain-Heartbeat-Tshirt-Graphic-Tees-Women-Ladies-Tee-Shirts-Short-Sleeve_e88340fd-90a8-42aa-bf76-6e898f399498.c78823a19e9024fe3abc3e0831f804b5.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 14.99,
              currency: "USD",
            },
            title:
              "XCHQRTI Mountain Heartbeat Tshirt Graphic Tees Women Ladies Tee Shirts Short Sleeve",
            rating: {
              count: 206,
              rating: 3.9,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "6ZF5VG2PTK77",
            badge: "",
            variants: [],
          },
        ],
        total_results: 22,
        last_visible_page: 1,
        parse_status_code: 200,
      },
      category: "tshirt",
    },
    {
      content: {
        url: "https://www.walmart.com/search?q=cap",
        organic: [
          {
            url: "https://www.walmart.com/ip/George-Mens-Felt-Baseball-Hat/860623443?from=/search",
            image:
              "https://i5.walmartimages.com/seo/George-Mens-Felt-Baseball-Hat_65540b46-a319-49da-8868-63f715643205.7bb98c434e89236a1ff012e82138ad4e.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 9.96,
              currency: "USD",
            },
            title: "George Mens Felt Baseball Hat",
            rating: {
              count: 77,
              rating: 4.8,
            },
            seller: {
              name: "George",
            },
            product_id: "860623443",
            badge: "",
            variants: [
              {
                url: "https://www.walmart.com/ip/George-Mens-Felt-Baseball-Hat/860623443?variantFieldId=actual_color",
                title: "Black",
                product_id: "860623443",
              },
              {
                url: "https://www.walmart.com/ip/George-Mens-Felt-Baseball-Hat/197144353?variantFieldId=actual_color",
                title: "Brown Bark",
                product_id: "197144353",
              },
              {
                url: "https://www.walmart.com/ip/George-Mens-Felt-Baseball-Hat/726375355?variantFieldId=actual_color",
                title: "Gray",
                product_id: "726375355",
              },
              {
                url: "https://www.walmart.com/ip/George-Mens-Felt-Baseball-Hat/794166878?variantFieldId=actual_color",
                title: "Red Black",
                product_id: "794166878",
              },
            ],
          },
        ],
        total_results: 1,
        last_visible_page: 1,
        parse_status_code: 200,
      },
      category: "cap",
    },
    {
      content: {
        url: "https://www.walmart.com/search?q=pant",
        organic: [
          {
            url: "https://www.walmart.com/ip/George-Men-s-Flat-Front-Wrinkle-Resistant-Pants/565961231?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/George-Men-s-Flat-Front-Wrinkle-Resistant-Pants_7a019d3c-cf5f-44a6-b6a2-2d8409ca3527_1.dc9a10e5cb280701034f21ad30ca74cb.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 13.98,
              currency: "USD",
            },
            title: "George Men's Flat Front Wrinkle Resistant Pants",
            rating: {
              count: 2758,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "23ISDQ06FS78",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Wrangler-Men-s-and-Big-Men-s-Relaxed-Fit-Cargo-Pants-With-Stretch/860912092?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Wrangler-Men-s-and-Big-Men-s-Relaxed-Fit-Cargo-Pants-With-Stretch_df3a725f-7384-4942-b262-10fe413914d6_1.4305f90dd2e7aacb548928420cead955.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 22.98,
              currency: "USD",
            },
            title:
              "Wrangler Men's and Big Men's Relaxed Fit Cargo Pants With Stretch",
            rating: {
              count: 15489,
              rating: 4.6,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "5K66FY5XU7CZ",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Cueply-Womens-Wide-Leg-Pants-Plus-Size-Elastic-Tie-Knot-Lounge-Pants-Loose-Trousers-with-Pockets/5096730040?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Cueply-Womens-Wide-Leg-Pants-Plus-Size-Elastic-Tie-Knot-Lounge-Pants-Loose-Trousers-with-Pockets_b5501876-8c9b-4172-a4de-e7747f32affe.220c9af49cc78c34b25f2304fb2ef5df.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 19.66,
              currency: "USD",
            },
            title:
              "Cueply Womens Wide Leg Pants Plus Size Elastic Tie Knot Lounge Pants Loose Trousers with Pockets",
            rating: {
              count: 193,
              rating: 4.6,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "1R7KPR5YUCN4",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/No-Boundaries-Juniors-Pull-On-Flare-Pants-32-Inseam-Sizes-XS-XXXL/5418752305?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/No-Boundaries-Juniors-Pull-On-Flare-Pants-32-Inseam-Sizes-XS-XXXL_febe2870-b96c-400e-8ada-c6363c2ef754.4e49a022ea4d72e4ba569c79f161c5e8.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 7.98,
              currency: "USD",
            },
            title: "No Boundaries Pull On Flare Pants, 32” Inseam, Women’s",
            rating: {
              count: 29,
              rating: 4.7,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "16NA3A4RW2UG",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Wrangler-Men-s-Stretch-Taper-Leg-Regular-Fit-Cargo-Pant/616321535?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Wrangler-Men-s-Stretch-Taper-Leg-Regular-Fit-Cargo-Pant_ea03e751-37af-4853-be60-daf2e5e40a63.155b4e7b141c0f43128a17febbecccc6.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 23.98,
              currency: "USD",
            },
            title: "Wrangler Men's Stretch Taper Leg Regular Fit Cargo Pant",
            rating: {
              count: 2330,
              rating: 4.5,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "3NFAM62JRRI9",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/No-Boundaries-Juniors-Parachute-Pant/5424370467?from=/search",
            image:
              "https://i5.walmartimages.com/seo/No-Boundaries-Juniors-Parachute-Pant_12f69cef-57e8-4541-a4fe-162c27fd6ef4.203fb7bbbb07171b4ecfec8336259f7d.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 13.98,
              currency: "USD",
            },
            title: "No Boundaries Cotton Parachute Pants, 30\" Inseam, Women's",
            rating: {
              count: 9,
              rating: 4.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "30WQ21DOTWYT",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Uvplove-Women-s-Work-Trousers-Loose-Wide-Leg-Business-Pants-Breathable-Suit-Pants/5369028861?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Uvplove-Women-s-Work-Trousers-Loose-Wide-Leg-Business-Pants-Breathable-Suit-Pants_e313a11c-6c69-4013-8f30-8507df534db6.abe07e1243b701c9b063d78c79d5d736.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 14.99,
              currency: "USD",
            },
            title:
              "Uvplove Women's Work Trousers Loose Business Pants Breathable Suit Pants",
            rating: {
              count: 25,
              rating: 4.3,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "48CCYLX9WNW4",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/No-Boundaries-Juniors-Wide-Leg-Cargo-Pants-Sizes-XXS-XXL/5422074273?athbdg=L1103&from=/search",
            image:
              "https://i5.walmartimages.com/seo/No-Boundaries-Juniors-Wide-Leg-Cargo-Pants-Sizes-XXS-XXL_c6e822a6-1f77-4d95-a1e5-eff7d80329c5.a2b569d5f02738eb1f10fcd74cada7b1.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 16.98,
              currency: "USD",
            },
            title: "No Boundaries Wide Leg Cargo Pants, 32” Inseam, Women’s",
            rating: {
              count: 114,
              rating: 4.8,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "2RG4UZY8CWFS",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/George-Men-s-Synthetic-Casual-Pants/3896135254?from=/search",
            image:
              "https://i5.walmartimages.com/seo/George-Men-s-Synthetic-Casual-Pants_d200f157-8cdc-411e-a3c0-b840495ed157.723599c2c358b7a467e5e101880d3c82.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 19.98,
              currency: "USD",
            },
            title: "George Men's Synthetic Casual Pants",
            rating: {
              count: 332,
              rating: 4.6,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "2D1C6BQ4FZEJ",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Dockers-Men-s-Straight-Fit-Casual-Chino-Pants-with-Stretch/3231202263?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Dockers-Men-s-Straight-Fit-Casual-Chino-Pants-with-Stretch_e228fd6f-e794-4e9b-a7ef-d7fc9aff89ff.0acf6432c7b7630f3bd21354c08f6fae.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 21.99,
              currency: "USD",
            },
            title: "Dockers Men's Straight Fit Casual Chino Pants with Stretch",
            rating: {
              count: 158,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "6Z4TWSRXHW5L",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Wrangler-Men-s-and-Big-Men-s-Legacy-Cargo-Pant/14542017?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Wrangler-Men-s-and-Big-Men-s-Legacy-Cargo-Pant_c166d64b-d68b-4549-844a-be2e2d642be2_1.fa91ff42064714abc4004efe39bc64d5.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 24.98,
              currency: "USD",
            },
            title: "Wrangler Men's and Big Men's Legacy Cargo Pant",
            rating: {
              count: 7478,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "2DYAIWMI1CDQ",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/George-Men-s-Slim-Chino-Pants/484242564?from=/search",
            image:
              "https://i5.walmartimages.com/seo/George-Men-s-Slim-Chino-Pants_6da7c195-eacc-47fb-afa7-88b79478e26b_1.ced2b6b76debcb41af26888f0e36ba7d.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 18.98,
              currency: "USD",
            },
            title: "George Men's Slim Chino Pants",
            rating: {
              count: 2310,
              rating: 4.7,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "57VUWZIE3S7R",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Sofia-Jeans-Women-s-Lightweight-Luxe-Mid-Rise-Wide-Leg-Trousers-32-Inseam-Sizes-0-20/5216835764?athbdg=L1400&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Sofia-Jeans-Women-s-Lightweight-Luxe-Mid-Rise-Wide-Leg-Trousers-32-Inseam-Sizes-0-20_271b5cae-a4b6-4e36-9182-581326de332e.2f14db9aab8a673943f10e486e435c05.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 16.9,
              currency: "USD",
            },
            title:
              "Sofia Jeans Women's Lightweight Luxe Mid Rise Wide Leg Trousers, 32\" Inseam, Sizes 0-20",
            rating: {
              count: 63,
              rating: 3.7,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "22DX89GA5A6L",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Wrangler-Men-s-and-Big-Men-s-Outdoor-Performance-Zip-Cargo-Pant/812836287?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Wrangler-Men-s-and-Big-Men-s-Outdoor-Performance-Zip-Cargo-Pant_9ce9a331-c4ba-41d1-9c80-458319f33a2c.0e9d72550f9cb4fc081d6f73eedceba7.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 26.98,
              currency: "USD",
            },
            title:
              "Wrangler ® Men’s Outdoor All Terrain Cargo Pant with UPF 50+ Protection",
            rating: {
              count: 11296,
              rating: 4.7,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "79SASP4NBLIK",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Time-and-Tru-Women-s-Pull-On-Pants-With-Pockets-31-and-29-Inseams-Sizes-S-2XL/2121984768?athbdg=L1103&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Time-and-Tru-Women-s-Pull-On-Pants-With-Pockets-31-and-29-Inseams-Sizes-S-2XL_4c33201c-a54f-427a-ad14-d056d641e03d.3c866c015831ca125542e96c5812977c.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 16.98,
              currency: "USD",
            },
            title:
              'Time and Tru Women\'s Pull On Pants With Pockets, 31" and 29" Inseams, Sizes S-2XL',
            rating: {
              count: 560,
              rating: 4.2,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "3H01BQRL1E8L",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/No-Boundaries-Womens-Juniors-Foldover-Flare-Sizes-XXS-XXL/5297592045?from=/search",
            image:
              "https://i5.walmartimages.com/seo/No-Boundaries-Womens-Juniors-Foldover-Flare-Sizes-XXS-XXL_cb81b4c7-1d18-4ab4-9e90-15a456d3ba6c.59eb115773ab8c9c68f41de89697b147.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 9.98,
              currency: "USD",
            },
            title:
              "No Boundaries Flare Pants with Foldover Waist, 33\" Inseam, Women's",
            rating: {
              count: 12,
              rating: 3.3,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "1POF7BRTRUWH",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/GIRUNS-Womens-Cargo-Pants-High-Waist-Trousers-Black-M-With-Pockets-Wide-Leg-Loose-Stretchy-Casual-Comfy-Relaxed-Fit-Streetwear-Long-Straight-For-Wome/5617872169?from=/search",
            image:
              "https://i5.walmartimages.com/seo/GIRUNS-Womens-Cargo-Pants-High-Waist-Trousers-Black-M-With-Pockets-Wide-Leg-Loose-Stretchy-Casual-Comfy-Relaxed-Fit-Streetwear-Long-Straight-For-Wome_9d7e0c4c-ce2d-4063-ac1d-fafc79248bce.f849f2cd3325da2b7a4fa6127156d257.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 14.99,
              currency: "USD",
            },
            title:
              "GIRUNS Womens Cargo Pants High Waist Trousers Black M With Pockets Wide Leg Pants Loose Stretchy Casual Comfy Relaxed Fit Streetwear Long Straight Pants For Women",
            rating: {
              count: 20,
              rating: 5.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "24L6JKWM69HL",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Celebrity-Pink-Juniors-Mid-Rise-Wide-Leg-Cargo-Pant-Sizes-1-21/5477802948?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Celebrity-Pink-Juniors-Mid-Rise-Wide-Leg-Cargo-Pant-Sizes-1-21_abddbb9d-5919-481e-8782-a0e0b6111d01.0e5a87148d79750a354bde9471bb6813.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 19.5,
              currency: "USD",
            },
            title:
              "Celebrity Pink Juniors and Juniors Plus Mid Rise Wide Leg Cargo Pant Sizes 1-24W",
            rating: {
              count: 32,
              rating: 4.8,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "5OWDVZI987JA",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Womens-Casual-Wide-Leg-Pants-High-Waisted-Button-Down-Straight-Long-Trousers-Palazzo-Pants/5148078546?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Womens-Casual-Wide-Leg-Pants-High-Waisted-Button-Down-Straight-Long-Trousers-Palazzo-Pants_16b6fcbc-1eed-46c3-8747-3058848bcc1f.8206781fae7c0e7dfd66d6d422ed6daa.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 19.99,
              currency: "USD",
            },
            title:
              "Womens Casual Wide Leg Pants High Waisted Button Down Straight Long Trousers Palazzo Pants",
            rating: {
              count: 300,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "2RNPY42BJN8Y",
            badge: "",
            variants: [],
          },
          {
            url: "https://www.walmart.com/ip/Scoop-Wide-Leg-Trouser-Cargo-Pant/5352547568?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Scoop-Wide-Leg-Trouser-Cargo-Pant_ca12f20d-1633-4a17-af1b-8c0a17611e40.c65d62546cbe34e411d71275207f61ad.webp?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 22.0,
              currency: "USD",
            },
            title:
              "Scoop Women's Ultimate ScubaKnit Wide Leg Cargo Pants, Sizes XS-XXL",
            rating: {
              count: 36,
              rating: 4.7,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "3GLXG0Z83LSN",
            badge: "",
            variants: [],
          },
        ],
        total_results: 20,
        last_visible_page: 1,
        parse_status_code: 200,
      },
      category: "pant",
    },
    {
      content: {
        url: "https://www.walmart.com/search?q=glass",
        organic: [
          {
            url: "/ip/Time-and-Tru-Women-s-Aviator-Gold-Sunglasses/5197667763?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Time-and-Tru-Women-s-Aviator-Gold-Sunglasses_5bfaa9ff-6cca-474f-ba21-01a6c628c545.baf56f4f4b8791cbdc8da59ba81f7077.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 9.97,
              currency: "USD",
            },
            title: "Time and Tru Women's Aviator Gold Sunglasses",
            rating: {
              count: 5,
              rating: 4.2,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "5USY7LD0SY00",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Sunsentials-By-Foster-Grant-Women-s-Butterfly-Sunglasses-Black/628393882?athbdg=L1103&from=/search",
            image:
              "https://i5.walmartimages.com/asr/bfa8e631-2d6a-42f2-805a-bebbe6b802fd_1.ec4a8ec609fb9d73c87790de6d79da78.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 7.97,
              currency: "USD",
            },
            title:
              "Sunsentials By Foster Grant Women's Butterfly Sunglasses, Black",
            rating: {
              count: 179,
              rating: 4.6,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "5HD09EXHSHYE",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Piranha-Eyewear-Bloom-Eco-Pact-Sunglasses-for-Women-with-Blue-to-Peach-Ombre-Lens/657601611?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Piranha-Eyewear-Bloom-Eco-Pact-Sunglasses-for-Women-with-Blue-to-Peach-Ombre-Lens_3d516f5e-7ce9-4791-805a-9da464c6399b.0b7a994d2ffa2daee4fa6ea5cdc93bf4.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 12.88,
              currency: "USD",
            },
            title:
              "Piranha Eyewear Bloom Eco-Pact Sunglasses for Women with Blue to Peach Ombre Lens",
            rating: {
              count: 112,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "5TI6HUXX845E",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Foster-Grant-Women-s-Aviator-Fashion-Sunglasses-Gold/568881306?from=/search",
            image:
              "https://i5.walmartimages.com/asr/81e6d19e-45c4-4390-9047-974d4d15ab60.01afd6a150976fa028552c7900255854.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 11.97,
              currency: "USD",
            },
            title: "Foster Grant Women's Aviator Fashion Sunglasses Gold",
            rating: {
              count: 66,
              rating: 4.3,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "5CAX4OU6GSNB",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Foster-Grant-Women-s-Coquette-Fashion-Sunglasses-Rose-Gold/660490034?from=/search",
            image:
              "https://i5.walmartimages.com/asr/78bae7cc-dfcc-4e62-88d4-92308fc38e2e.80bd9cb83e67f2ff97f203834dc24fa6.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 11.97,
              currency: "USD",
            },
            title: "Foster Grant Women's Coquette Fashion Sunglasses Rose Gold",
            rating: {
              count: 143,
              rating: 4.5,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "47G0L34UB25L",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Sunsentials-By-Foster-Grant-Women-s-Rectangle-Sunglasses-Black/513761992?from=/search",
            image:
              "https://i5.walmartimages.com/asr/b5fa70f4-101b-4d0b-b03f-f84acc1b414e.f1e72c0a2f94b88401ffa052c772fb99.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 7.97,
              currency: "USD",
            },
            title:
              "Sunsentials By Foster Grant Women's Rectangle Sunglasses, Black",
            rating: {
              count: 90,
              rating: 4.3,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "6Z2F2CP4753A",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Foster-Grant-Women-s-Wrap-Fashion-Sunglasses-Black/101479266?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Foster-Grant-Women-s-Wrap-Fashion-Sunglasses-Black_edde4c27-3c26-4b5f-a54e-504e91568a78.3fc8d405b2cad259a9de9fb627abed98.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 11.97,
              currency: "USD",
            },
            title: "Foster Grant Women's Wrap Fashion Sunglasses Black",
            rating: {
              count: 159,
              rating: 4.5,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "68QG51JK7QTC",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Foster-Grant-Women-s-Club-Fashion-Sunglasses-Black/498321206?from=/search",
            image:
              "https://i5.walmartimages.com/asr/26692fe8-d829-4785-9e4f-a47c24541b39.81b2ba43394b9c18c2532cccf7b91261.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 11.97,
              currency: "USD",
            },
            title: "Foster Grant Women's Club Fashion Sunglasses Black",
            rating: {
              count: 43,
              rating: 4.6,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "5E68QCAOVE09",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/New-Luxury-Polarized-Sunglasses-Men-Women-Square-Cool-Sun-Glasses-Shades-Brand-Design-Black-Glasses-for-Male/3408912874?from=/search",
            image:
              "https://i5.walmartimages.com/asr/f3221ee7-b3a9-415b-aa00-07114f6ef41a.4fec92953e2b0c3aec6a41e13589a874.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 11.99,
              currency: "USD",
            },
            title:
              "New Luxury Polarized Sunglasses Men Women Square Cool Sun Glasses Shades Brand Design Black Glasses for Male",
            rating: {
              count: 0,
              rating: 0.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "1VHCOEEZ5ANB",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Festival-Plastic-Shield-Full-Rim-Sunglasses-with-Pink-Frames-and-Smoke-Lenses/5126047910?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Festival-Plastic-Shield-Full-Rim-Sunglasses-with-Pink-Frames-and-Smoke-Lenses_160ca225-8e05-47b4-be14-c21521c88f6f.8a8975a0ac1e48fd5c043d5ec9084354.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 7.0,
              currency: "USD",
            },
            title:
              "Festival Plastic Shield Full Rim Sunglasses with Pink Frames and Smoke Lenses",
            rating: {
              count: 0,
              rating: 0.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "79S1048JAM0X",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Foster-Grant-Women-s-Round-Black-Adult-Sunglasses/638444901?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/asr/6a8ce90d-d3a4-438a-9923-18b240c614d3.7a29e6ad105462a27403446b42548177.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 11.97,
              currency: "USD",
            },
            title: "Foster Grant Women's Round Black Adult Sunglasses",
            rating: {
              count: 49,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "3V0NVMRODHCX",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Foster-Grant-Women-s-Cat-Eye-Fashion-Sunglasses-Pink/613810991?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Foster-Grant-Women-s-Cat-Eye-Fashion-Sunglasses-Pink_21a98927-db27-4d65-8aa9-ef74a2e7fd1d_1.1c2f075edbff84fcac22ddee8b47d012.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 11.97,
              currency: "USD",
            },
            title: "Foster Grant Women's Cat Eye Fashion Sunglasses, Pink",
            rating: {
              count: 99,
              rating: 4.6,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "4J9BJ01AGRAR",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/POLAROID-CORE-BLACK-Sunglasses-CAT-EYE-57-15/1917119418?from=/search",
            image:
              "https://i5.walmartimages.com/asr/74dbb068-b62f-4f6d-a04c-21ce1eec0b12.da63a37bf2f5c7350c851aa7a8f94cc4.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 67.0,
              currency: "USD",
            },
            title: "POLAROID CORE BLACK Sunglasses CAT EYE 57/15",
            rating: {
              count: 0,
              rating: 0.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "20VBZWHTP4BV",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Joopin-Polarized-Sunglasses-for-Women-Men-Classic-Retro-Designer-Style-Fashion-Sun-Glasses-for-Teens/1262803121?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/seo/Joopin-Polarized-Sunglasses-for-Women-Men-Classic-Retro-Designer-Style-Fashion-Sun-Glasses-for-Teens_8a81e061-7442-4b44-aa13-787488c29ecf.5df33e551c513cbffdac86dafdbe19ce.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 11.54,
              currency: "USD",
            },
            title:
              "Joopin Polarized Sunglasses for Women Men Fashion Classic Retro Designer Style",
            rating: {
              count: 73,
              rating: 4.4,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "5S86FS5Q0OHZ",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Panama-Jack-Men-s-Shield-Fashion-Sunglasses-Multi-Color/2057577343?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Panama-Jack-Men-s-Shield-Fashion-Sunglasses-Multi-Color_7147c973-927a-48b8-80ed-7584eeea2cc3.bf13799fa7b96f615093454e399df5fd.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 14.97,
              currency: "USD",
            },
            title: "Panama Jack Men's Shield Fashion Sunglasses, Multi-Color",
            rating: {
              count: 16,
              rating: 4.8,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "5BUCE9G1I3G8",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Sunsentials-By-Foster-Grant-Women-s-Round-Sunglasses-Tan/5095558420?athbdg=L1103&from=/search",
            image:
              "https://i5.walmartimages.com/asr/361421d6-bd97-4472-82d4-ef0f5ee730fd.12847df1dade4c4f9c0953deb426e507.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 7.97,
              currency: "USD",
            },
            title: "Sunsentials By Foster Grant Women's Round Sunglasses, Tan",
            rating: {
              count: 33,
              rating: 4.3,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "6QW6HA431N34",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Foster-Grant-Men-s-Deep-Dish-Way-Fashion-Sunglasses-Black/683526124?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/asr/6ee4f10c-df48-4a7f-8a66-28f241598b25.30a8c48e41260d7440b484713457c9cf.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 12.99,
              currency: "USD",
            },
            title: "Foster Grant Men's Deep Dish Way Fashion Sunglasses Black",
            rating: {
              count: 104,
              rating: 4.5,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "6WD4OG1R6BYI",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Sunsentials-By-Foster-Grant-Women-s-Cat-Eye-Sunglasses-Multi-Color/556671971?athbdg=L1103&from=/search",
            image:
              "https://i5.walmartimages.com/asr/7a45e6da-df06-4757-92e2-759be26fa27c.355acea746f53fda1b73b79d9cc5a728.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 7.95,
              currency: "USD",
            },
            title:
              "Sunsentials By Foster Grant Women's Cat Eye Sunglasses, Multi-Color",
            rating: {
              count: 241,
              rating: 4.6,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "31CZ48EQMITU",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Prada-PR-19ZS-Plastic-Womens-Butterfly-Sunglasses-Black-55mm-Adult/1740987113?athbdg=L1600&from=/search",
            image:
              "https://i5.walmartimages.com/asr/e0440237-7f14-48b5-b991-19538206aabc.0e9c03462cd07656389eb98053f427e7.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 220.7,
              currency: "USD",
            },
            title:
              "Prada PR 19ZS Plastic Womens Butterfly Sunglasses Black 55mm Adult",
            rating: {
              count: 1,
              rating: 5.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "3NGX3BPH6ZAB",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Tom-Ford-Dax-FT0751-01V-Shiny-Black-Blue-50-mm-Men-s-Sunglasses/298769419?from=/search",
            image:
              "https://i5.walmartimages.com/asr/4e6fd95f-31b9-4317-a2e8-3a259cac346d.7427ae55cbb0f94be71ff98edb57912b.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 66.0,
              currency: "USD",
            },
            title:
              "Tom Ford Dax FT0751 01V Shiny Black Blue 50 mm Men's Sunglasses",
            rating: {
              count: 2,
              rating: 5.0,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "48MBN48OB592",
            badge: "",
            variants: [],
          },
          {
            url: "/ip/Lacoste-Brown-Shaded-Rectangular-Unisex-Sunglasses-L162S-210-61/118886368?from=/search",
            image:
              "https://i5.walmartimages.com/seo/Lacoste-Brown-Shaded-Rectangular-Unisex-Sunglasses-L162S-210-61_e873b25c-d84c-4946-ad8e-c94ac238b8ac.a845612e890e6857544c21a599e3ef07.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
            price: {
              price: 49.99,
              currency: "USD",
            },
            title:
              "Lacoste Brown Shaded Rectangular Unisex Sunglasses L162S 210 61",
            rating: {
              count: 15,
              rating: 4.9,
            },
            seller: {
              name: "No Boundaries",
            },
            product_id: "0U19THXYU2HE",
            badge: "",
            variants: [],
          },
        ],
        total_results: 20,
        last_visible_page: 1,
        parse_status_code: 200,
      },
    },
  ],
  total_results: 3,
  last_visible_page: 1,
  parse_status_code: 200,
  created_at: "2024-08-07T10:00:00Z",
  updated_at: "2024-08-07T10:00:00Z",
  page: 1,
  url: "https://www.walmart.com/search?q=tshirt",
  job_id: "job123",
  status_code: 200,
  parser_type: "organic",
};

function fetchSearch(searchTerm: string): Promise<Result | undefined> {
  // Simulate fetch with dummy data
  return new Promise((resolve) => {
    const filteredResults = dummyResponse.results.filter((result) =>
      result.content.url.includes(searchTerm)
    );
    console.log("filtered Result :", filteredResults);

    if (filteredResults.length > 0) {
      resolve(filteredResults[0]);
    } else {
      resolve(undefined);
    }
  });
}

export default fetchSearch;
