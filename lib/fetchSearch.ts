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
        url: "https://www.walmart.com/search?q=dummy",
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
        ],
        total_results: 2,
        last_visible_page: 1,
        parse_status_code: 200,
      },
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
    },
  ],
  total_results: 3,
  last_visible_page: 1,
  parse_status_code: 200,
  created_at: "2024-08-07T10:00:00Z",
  updated_at: "2024-08-07T10:00:00Z",
  page: 1,
  url: "https://www.walmart.com/search?q=dummy",
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

    if (filteredResults.length > 0) {
      resolve(filteredResults[0]);
    } else {
      resolve(undefined);
    }
  });
}

export default fetchSearch;
