import mongoose from "mongoose";

const dbUrl =
  "mongodb+srv://dhoper777:apollo777@ecommerce-website.v7ymhpd.mongodb.net/?retryWrites=true&w=majority" ||
  "mongodb://127.0.0.1:27017/ecommerce-website";

async function main() {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
main()
  .then((solved) => console.log(solved, "success!!!"))
  .catch((err) => console.log("777", err));

import Product from "./productSchema.js";

const productsData = [
  {
    name: "Sony WH-1000XM4",
    introduction:
      "Sony的WH-1000XM4是一款頂尖級的無線耳罩式耳機，擁有智能降噪功能和高品質的音頻表現。其30小時的電池續航力、觸控控制和耳罩內部的感應器，讓使用者能夠輕鬆掌握耳機的所有功能。",
    features:
      "最大降噪功能 / DSEE Extreme音頻優化 / 自動暫停 / 立體聲語音增強 / 快速充電",
    price: 350,
    contents: ["Sony WH-1000XM4耳機", "耳罩包裝", "充電線", "立體聲迷你插孔"],
    category: "headphones",
    image: "/assets/productList/bigScreen/image-category-page-preview-1.jpg",
  },
  {
    name: "Sennheiser Momentum 3",
    introduction:
      "Sennheiser Momentum 3是一款高品質的無線耳罩式耳機，擁有動態降噪和強大的40毫米驅動器，為用戶帶來震撼的聲音效果。它還具有智能功能，如自動暫停和智能控制。",
    features: "動態降噪 / 40毫米驅動器 / 自動暫停 / 智能控制 / 高品質麥克風",
    price: 399,
    contents: [
      "Sennheiser Momentum 3耳機",
      "耳罩包裝",
      "充電線",
      "3.5毫米音訊線",
    ],
    category: "headphones",
  },
  {
    name: "Bose QuietComfort Earbuds",
    introduction:
      "Bose QuietComfort Earbuds是一款全新的真無線耳機，具有強大的降噪技術和高品質的音頻性能。它們採用耳塞設計，具有水和汗水防護，並具有優秀的音頻和通話質量。",
    features:
      "強大的降噪技術 / 高品質的音頻性能 / 耳塞設計 / 水和汗水防護 / 優秀的音頻和通話質量",
    price: 279,
    contents: [
      "Bose QuietComfort Earbuds耳機",
      "充電線",
      "多種尺寸耳塞",
      "使用手冊",
    ],
    category: "earphones",
  },
  {
    name: "Macbook Pro 13",
    introduction:
      "Macbook Pro 13是一款非常出色的筆記本電腦。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。輕薄便攜，可以隨時隨地使用。",
    price: 1200,
    contents: ["Macbook Pro 13筆記本電腦", "充電器", "USB-C線"],
    category: "speakers",
  },
  {
    name: "Dell XPS 13",
    introduction:
      "Dell XPS 13是一款非常出色的筆記本電腦。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。輕薄便攜，可以隨時隨地使用。",
    price: 1000,
    contents: ["Dell XPS 13筆記本電腦", "充電器", "USB-C線"],
    category: "speakers",
  },
  {
    name: "HP Spectre x360",
    introduction:
      "HP Spectre x360是一款非常出色的筆記本電腦。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。輕薄便攜，可以隨時隨地使用。",
    price: 1100,
    contents: ["HP Spectre x360筆記本電腦", "充電器", "USB-C線"],
    category: "speakers",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    introduction:
      "Lenovo ThinkPad X1 Carbon是一款非常出色的筆記本電腦。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。輕薄便攜，可以隨時隨地使用。",
    price: 1300,
    contents: ["Lenovo ThinkPad X1 Carbon筆記本電腦", "充電器", "USB-C線"],
    category: "speakers",
  },
  {
    name: "iPad Pro",
    introduction:
      "iPad Pro是一款非常出色的平板電腦。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。輕薄便攜，可以隨時隨地使用。",
    price: 800,
    contents: ["iPad Pro平板電腦", "充電器", "USB-C線"],
    category: "headphones",
  },
  {
    name: "Samsung Galaxy Tab S7",
    introduction:
      "Samsung Galaxy Tab S7是一款非常出色的平板電腦。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。輕薄便攜，可以隨時隨地使用。",
    price: 700,
    contents: ["Samsung Galaxy Tab S7平板電腦", "充電器", "USB-C線"],
    category: "headphones",
  },
  {
    name: "Microsoft Surface Pro 7",
    introduction:
      "Microsoft Surface Pro 7是一款非常出色的平板電腦。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。輕薄便攜，可以隨時隨地使用。",
    price: 900,
    contents: ["Microsoft Surface Pro 7平板電腦", "充電器", "USB-C線"],
    category: "headphones",
  },
  {
    name: "Apple Watch Series 6",
    introduction:
      "Apple Watch Series 6是一款非常出色的智能手表。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。支持多種運動模式，能夠幫助您更好地管理自己的健康。支持無線通訊，可以隨時隨地接收信息。",
    price: 400,
    contents: ["Apple Watch Series 6智能手表", "充電線"],
    category: "earphones",
  },
  {
    name: "Samsung Galaxy Watch 4",
    introduction:
      "Samsung Galaxy Watch 4是一款非常出色的智能手表。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。支持多種運動模式，能夠幫助您更好地管理自己的健康。支持無線通訊，可以隨時隨地接收信息。",
    price: 350,
    contents: ["Samsung Galaxy Watch 4智能手表", "充電線"],
    category: "earphones",
  },
  {
    name: "Fitbit Versa 3",
    introduction:
      "Fitbit Versa 3是一款非常出色的智能手表。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。支持多種運動模式，能夠幫助您更好地管理自己的健康。支持無線通訊，可以隨時隨地接收信息。",
    price: 300,
    contents: ["Fitbit Versa 3智能手表", "充電線"],
    category: "earphones",
  },
  {
    name: "Apple iPhone 13",
    introduction:
      "Apple iPhone 13是一款非常出色的智能手機。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。高質量的攝像頭，能夠拍攝非常出色的照片和視頻。",
    price: 1000,
    contents: ["Apple iPhone 13智能手機", "充電器", "Lightning to USB-C 纜線"],
    category: "earphones",
  },
  {
    name: "Samsung Galaxy S21",
    introduction:
      "Samsung Galaxy S21是一款非常出色的智能手機。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。高質量的攝像頭，能夠拍攝非常出色的照片和視頻。",
    price: 800,
    contents: ["Samsung Galaxy S21智能手機", "充電器", "USB-C線"],
    category: "earphones",
  },
  {
    name: "Google Pixel 6",
    introduction:
      "Google Pixel 6是一款非常出色的智能手機。它採用了最新的硬件配置，能夠滿足您的各種需求。",
    features:
      "高品質的顯示屏，能夠提供非常出色的顯示效果。強大的處理器和內存，能夠處理各種複雜的任務。高質量的攝像頭，能夠拍攝非常出色的照片和視頻。",
    price: 700,
    contents: ["Google Pixel 6智能手機", "充電器", "USB-C線"],
    category: "headphones",
  },
  {
    name: "Bose QuietComfort 35 II",
    introduction:
      "Bose QuietComfort 35 II耳機採用時尚、舒適的設計，讓您享受優質的音質和噪音消除技術。",
    features:
      "該產品的特點包括行業領先的噪音消除技術、Alexa和Google Assistant集成，以及長達20小時的電池壽命。",
    price: 299,
    contents: ["Bose QuietComfort 35 II耳機", "攜帶袋", "充電線"],
    category: "headphones",
  },
  {
    name: "Sennheiser Momentum True Wireless 2",
    introduction:
      "Sennheiser Momentum True Wireless 2耳塞提供卓越的音質和直觀的觸摸控制。",
    features:
      "該產品的特點包括主動降噪、透明聆聽、可定制的觸摸控制，以及長達28小時的電池壽命。",
    price: 299,
    contents: [
      "Sennheiser Momentum True Wireless 2耳塞",
      "充電盒",
      "USB-C充電線",
    ],
    category: "headphones",
  },
  {
    name: "Sonos Move",
    introduction:
      "Sonos Move是一款耐用的、電池供電的智能音箱，擁有出色的音質，讓您隨時隨地享受音樂。",
    features:
      "該產品的特點包括語音控制、Wi-Fi和藍牙連接，以及長達10小時的電池壽命。",
    price: 399,
    contents: ["Sonos Move音箱", "充電底座", "電源線"],
    category: "speakers",
  },
  {
    name: "Sony WH-1000XM4",
    introduction: "Sony WH-1000XM4耳機帶給您無與倫比的音質和降噪體驗。",
    features:
      "該產品的特點包括自適應聲音控制、語音對話技術，以及長達30小時的電池壽命。",
    price: 349,
    contents: ["Sony WH-1000XM4耳機", "攜帶袋", "充電線"],
    category: "headphones",
  },
  {
    name: "小米藍牙音箱",
    introduction:
      "小米藍牙音箱，是一款高品質的藍牙音箱。擁有優秀的音質，體積小巧，方便攜帶。",
    features: "藍牙連接，小巧便攜，高品質音質",
    price: 399,
    contents: ["小米藍牙音箱", "藍牙線", "說明書"],
    category: "speakers",
  },
  {
    name: "AirPods Pro",
    introduction:
      "AirPods Pro，是一款Apple公司推出的無線耳機。採用主動降噪技術，具有卓越的音質表現和舒適的佩戴體驗。",
    features: "主動降噪，無線藍牙，舒適佩戴",
    price: 1599,
    contents: ["AirPods Pro", "充電盒", "Lightning to USB-C充電線", "說明書"],
    category: "headphones",
  },
  {
    name: "Sony WH-1000XM4",
    introduction:
      "Sony WH-1000XM4，是一款旗艦級主動降噪耳機。採用先進的聲學技術和人工智能算法，提供卓越的音質和聽覺體驗。",
    features: "主動降噪，高音質音效，長效續航",
    price: 3499,
    contents: ["Sony WH-1000XM4", "3.5mm音頻線", "USB-C充電線", "說明書"],
    category: "headphones",
  },
  {
    name: "Bose SoundLink Revolve",
    introduction:
      "Bose SoundLink Revolve+，是一款360度全向音箱。擁有出色的音質和防水設計，非常適合室內外使用。",
    features: "360度全向音效，防水設計，長效電池續航",
    price: 2199,
    contents: ["Bose SoundLink Revolve+", "充電線", "說明書"],
    category: "speakers",
  },
  {
    name: "Google Nest Mini 智能音箱",
    introduction:
      "Google Nest Mini 是一款智能音箱，可隨時查詢天氣，控制家居設備，也能播放音樂和電台等。它是一個非常方便的家居智能裝置。",
    features: "智能控制，輕巧方便，可觸控操作",
    price: 499,
    contents: ["Google Nest Mini 智能音箱", "USB 充電線", "說明書"],
    category: "earphones",
  },
  {
    name: "蘋果 M1 MacBook Pro",
    introduction:
      "蘋果 M1 MacBook Pro 是一款強大的筆記型電腦，採用了蘋果自家的 M1 芯片，擁有卓越的運算能力和長效的電池續航。這款筆記本電腦可以滿足你在工作和學習上的各種需求。",
    features: "強大的 M1 芯片，高清視頻鏡像，長效電池續航",
    price: 13999,
    contents: ["蘋果 M1 MacBook Pro", "USB-C 充電器", "說明書"],
    category: "speakers",
  },
  {
    name: "GoPro HERO9 Black",
    introduction:
      "GoPro HERO9 Black 是一款高性能運動攝像機，擁有 5K 影像拍攝，20MP 照片拍攝，以及前置顯示屏等功能。這款攝像機可用於攝錄運動、旅遊等場景。",
    features: "5K 影像拍攝，20MP 照片拍攝，前置顯示屏",
    price: 4599,
    contents: ["GoPro HERO9 Black", "充電電池", "充電線", "說明書"],
    category: "speakers",
  },
  {
    name: "Bose QuietComfort 35 II 藍牙降噪耳機",
    introduction:
      "Bose QuietComfort 35 II 藍牙降噪耳機擁有極佳的降噪效果，可帶來更好的音樂體驗。它還支持藍牙連接，可與各種設備連接使用。",
    features: "藍牙連接，優秀的降噪效果，舒適的佩戴體驗",
    price: 2599,
    contents: [
      "Bose QuietComfort 35 II 藍牙降噪耳機",
      "充電線",
      "收納袋",
      "說明書",
    ],
    category: "earphones",
  },

  {
    name: "Sony WH-1000XM4 無線降噪耳機",
    introduction:
      "Sony WH-1000XM4 無線降噪耳機是一款高品質的耳機，支持無線連接和強大的降噪功能。它還具有長效電池續航和快速充電功能。",
    features: "無線連接，強大的降噪功能，長效電池續航",
    price: 3199,
    contents: ["Sony WH-1000XM4 無線降噪耳機", "充電線", "收納袋", "說明書"],
    category: "earphones",
  },

  {
    name: "AirPods Pro 無線降噪耳機",
    introduction:
      "AirPods Pro 無線降噪耳機是一款為 iPhone 和 iPad 設計的耳機，支持無線充電和主動降噪功能。它還具有良好的音質和便攜性。",
    features: "無線充電，主動降噪，良好的音質和便攜性",
    price: 1999,
    contents: ["AirPods Pro 無線降噪耳機", "充電盒", "充電線", "說明書"],
    category: "earphones",
  },
];

const imgH = [
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678854242/ecommerce-website/h-1_cfrgqy.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678854243/ecommerce-website/h-2_qwselz.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678854243/ecommerce-website/h-3_xnsvab.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678863171/ecommerce-website/h-4_bwtxwt.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678863176/ecommerce-website/h-5_lcmjih.jpg",
];

const imgE = [
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678853705/ecommerce-website/e-1_g42xk0.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678863172/ecommerce-website/e-2_ozjxjy.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678863172/ecommerce-website/e-3_j6enff.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678863172/ecommerce-website/e-4_jap3kb.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678863171/ecommerce-website/e-5_xom9uh.jpg",
];

const imgS = [
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678854244/ecommerce-website/s-1_dwofmu.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678854242/ecommerce-website/s-2_p3f2ae.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678863173/ecommerce-website/s-3_pfwgko.jpg",
  "https://res.cloudinary.com/dzfgxmkid/image/upload/v1678863172/ecommerce-website/s-5_wokq2s.jpg",
];

productsData.forEach((product) => {
  switch (product.category) {
    case "headphones":
      product.image = imgH[Math.floor(Math.random() * imgH.length)]
      break;
    case "earphones":
      product.image = imgE[Math.floor(Math.random() * imgE.length)]
      break;
    case "speakers":
      product.image = imgS[Math.floor(Math.random() * imgS.length)]
      break;

    default:
      break;
  }
});

Product.deleteMany({})
  .then(() => {
    console.log("Successfully delete every data");
    Product.insertMany(productsData)
      .then(() => {
        console.log("Successfully saved defult items to DB");
      })
      .catch((err) => {
        console.log(err, 999);
      });
  })
  .catch((err) => {
    console.log(err, 999);
  });
