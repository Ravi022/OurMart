import { ProductContent } from "@/typings/productTypings";

// Dummy data for demonstration
const dummyProductContents: ProductContent[] = [
  {
    content: {
      url: "https://www.walmart.com/ip/George-Men-s-Big-Men-s-Short-Sleeve-Crewneck-Tee-3-Pack-Sizes-XS-3XL/5038143315",
      meta: {
        sku: "5038143315",
        gtin: "1234567890123",
      },
      price: 12.7,
      title:
        "George Men's Big Men's Short Sleeve Crewneck Tee, 3-Pack, Sizes XS-3XL",
      images: [
        "https://i5.walmartimages.com/seo/George-Men-s-Big-Men-s-Short-Sleeve-Crewneck-Tee-3-Pack-Sizes-XS-3XL_bc4fa173-eb23-4c2a-a4b2-41c0a91dae55.7f469948e4389731f326014e7e0abee4.jpeg",
        "https://i5.walmartimages.com/asr/92c68ba7-559a-4263-9901-7f261cbc543c.0f20eb6035b7b00e75bc7ee652548671.jpeg",
        "https://i5.walmartimages.com/asr/9fdcb56d-5b8f-4fcf-8752-2cd8c35ac161.1e4f0a067bb2e9f1272a1b59c2263290.jpeg",
        "https://i5.walmartimages.com/asr/a5ac8454-ebfb-4554-b39f-0bb8a97720d3.5b6171df8dc2ef20b58bc459821712c8.jpeg",
      ],
      rating: {
        count: 100,
        rating: 4.5,
      },
      seller: {
        id: "F55CDC31AB754BB68FE0B39041159D63",
        url: "https://www.walmart.com/seller/F55CDC31AB754BB68FE0B39041159D63",
        name: "Walmart.com",
        catalog_id: "F55CDC31AB754BB68FE0B39041159D63",
        official_name: "Walmart.com",
      },
      currency: "USD",
      warranty: "30-day money-back guarantee",
      _warnings: [],
      variations: [
        {
          state: "available",
          product_id: "103MCZFBDBRR",
          selected_options: [
            {
              key: "actual_color",
              value: "blacksoot/vividwhite/charcoalgreyheather",
            },
            {
              key: "clothing_size",
              value: "s",
            },
          ],
        },
        {
          state: "unavailable",
          product_id: "4N965AT06T8L",
          selected_options: [
            {
              key: "actual_color",
              value: "darknavy/greyedteal/vividwhite",
            },
            {
              key: "clothing_size",
              value: "m",
            },
          ],
        },
        {
          state: "unavailable",
          product_id: "53FW7TPSXUCK",
          selected_options: [
            {
              key: "actual_color",
              value: "blacksoot/charcoalgrey/heatherblueash",
            },
            {
              key: "clothing_size",
              value: "xl",
            },
          ],
        },
        {
          state: "available",
          product_id: "3TL6O7PR23NK",
          selected_options: [
            {
              key: "actual_color",
              value: "redmark/canalblue/vividwhite",
            },
            {
              key: "clothing_size",
              value: "xl",
            },
          ],
        },
      ],
      breadcrumbs: ["Men's Clothing", "T-Shirts"],
      description:
        "Comfortable and stylish short sleeve crewneck tees perfect for any occasion.",
      out_of_stock: false,
      specifications: [
        { key: "Features", value: "Sustainable, Moisture Wicking, Layering" },
        { key: "Clothing Size", value: "S" },
        { key: "Sleeve Length Style", value: "Short Sleeve" },
        { key: "Fabric Content", value: "65% Recycled polyester, 35% Cotton" },
        { key: "Pattern", value: "Solid Print" },
        { key: "Gender", value: "Male" },
        { key: "Clothing Neck Style", value: "Crew Neck" },
        { key: "Brand", value: "George" },
        { key: "Color", value: "Black Soot/Vivid White/Charcoal Grey Heather" },
      ],
      parse_status_code: 200,
      price_strikethrough: 15.99,
    },
    created_at: "2024-08-07T12:00:00Z",
    updated_at: "2024-08-07T12:00:00Z",
    page: 1,
    url: "https://www.walmart.com/ip/5038143315",
    job_id: "job_12345",
    status_code: 200,
    parser_type: "walmart",
  },
  {
    content: {
      url: "https://www.walmart.com/ip/Men-s-General-Motors-American-Made-Distressed-Logo-Graphic-Tee-Charcoal-Heather-2X-Large/1829576721",
      meta: {
        sku: "1829576721",
        gtin: "197277018286",
      },
      price: 8.74, // Price not available
      title:
        "Men's General Motors American Made Distressed Logo Graphic Tee Charcoal Heather",
      images: [
        "https://i5.walmartimages.com/seo/Men-s-General-Motors-American-Made-Distressed-Logo-Graphic-Tee-Charcoal-Heather-2X-Large_4af02aa8-a716-44a4-8eae-171e6d21e513.4e975114bc5a61fde3e9676aacda8442.jpeg",
        "https://i5.walmartimages.com/asr/5d4a6cfe-ce9e-43dc-aeb1-641349f8b4dd.917ae5e86e6e102c9c462fd317532f58.jpeg",
        "https://i5.walmartimages.com/asr/bed37d0f-9cd9-44eb-968f-0a1a09434294.151f01785bca312741c7954a1476903e.jpeg",
      ],
      rating: {
        count: 1,
        rating: 5,
      },
      seller: {
        id: "General_Motors",
        url: "https://www.walmart.com/seller/General_Motors",
        name: "General Motors",
        catalog_id: "GMOT0122-90345050-MULTI-2XL",
        official_name: "General Motors",
      },
      currency: "USD",
      warranty: "N/A",
      _warnings: [],
      variations: [],
      breadcrumbs: [
        "Clothing",
        "Mens Clothing",
        "Mens Shirts",
        "Mens Graphic Tees",
      ],
      description:
        "Show your love for American-made cars with fun, retro-inspired new apparel from General Motors for the whole family!",
      out_of_stock: false,
      specifications: [
        { key: "Country of Origin - Textiles", value: "USA and Imported" },
        { key: "Clothing Size", value: "2XL" },
        { key: "Sleeve Length Style", value: "Short Sleeve" },
        { key: "Fabric Content", value: "50% Polyester, 50% Cotton" },
        { key: "Pattern", value: "Graphic Prints" },
        { key: "Gender", value: "Male" },
        { key: "Clothing Neck Style", value: "Crew Neck" },
        { key: "Brand", value: "General Motors" },
        { key: "Color", value: "Charcoal Heather" },
        { key: "Manufacturer", value: "Fifth Sun" },
      ],
      parse_status_code: 200,
      price_strikethrough: null, // No price strikethrough available
    },
    created_at: "2024-08-07T12:00:00Z",
    updated_at: "2024-08-07T12:00:00Z",
    page: 1,
    url: "https://www.walmart.com/ip/1829576721",
    job_id: "job_67890",
    status_code: 200,
    parser_type: "walmart",
  },
  {
    content: {
      url: "https://www.walmart.com/ip/George-Mens-Felt-Baseball-Hat/860623443?from=/search",
      meta: {
        sku: "1029384756",
        gtin: "0987654321123",
      },
      price: 10.99,
      title: "George Mens Felt Baseball Hat",
      images: [
        "https://i5.walmartimages.com/seo/George-Mens-Felt-Baseball-Hat_65540b46-a319-49da-8868-63f715643205.7bb98c434e89236a1ff012e82138ad4e.jpeg",
        "https://i5.walmartimages.com/asr/dbc77b07-71a5-4bf6-bd1a-dbe672d868a9.6972d0f15e2abade76b76e2917d9ab08.jpeg",
        "https://i5.walmartimages.com/asr/e1275bca-fa8b-4be9-bed6-0cdbf59a5913.780e779afa27802ceed1766806724308.jpeg",
        "https://i5.walmartimages.com/asr/a78a57db-43db-47ac-8b93-c3cb2a6b0fc6.fc65f7173a5b47e4a634cad4327ea841.jpeg",
      ],
      rating: {
        count: 45,
        rating: 4.2,
      },
      seller: {
        id: "George",
        url: "https://www.walmart.com/seller/George",
        name: "George",
        catalog_id: "George_Hats_123",
        official_name: "George",
      },
      currency: "USD",
      warranty: "60-day return policy",
      _warnings: [],
      breadcrumbs: ["Men's Clothing", "Accessories", "Hats"],
      description: "Stylish and comfortable felt baseball hat for men.",
      out_of_stock: false,
      specifications: [
        { key: "Features", value: "Adjustable strap, Breathable fabric" },
        { key: "Material", value: "100% Polyester" },
        { key: "Pattern", value: "Solid" },
        { key: "Gender", value: "Male" },
        { key: "Brand", value: "George" },
        { key: "Color", value: "Black" },
      ],
      parse_status_code: 200,
      price_strikethrough: 14.99,
    },
    created_at: "2024-08-08T12:00:00Z",
    updated_at: "2024-08-08T12:00:00Z",
    page: 1,
    url: "https://www.walmart.com/ip/1029384756",
    job_id: "job_54321",
    status_code: 200,
    parser_type: "walmart",
  },
];

function fetchProduct(url: string) {
  // console.log("current product :", url);
  return new Promise<ProductContent>((resolve, reject) => {
    setTimeout(() => {
      const product = dummyProductContents.find(
        (item) => item.content.url === url
      );
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 1000);
  })
    .then((data) => {
      const result: ProductContent = data;
      const product = result.content;
      return product;
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
      return;
    });
}

export default fetchProduct;
