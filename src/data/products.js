export let stockProducts = [];

let product = class {
  constructor(name, id, price, img, category, prodNumber, info, sale) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.img = img;
    this.category = category;
    this.info = info;
    this.prodNumber = prodNumber;
    this.sale = sale;
  }
};

let createAddProduct = (
  name,
  id,
  price,
  img,
  category,
  prodNumber,
  info,
  sale
) => {
  return stockProducts.push(
    new product(name, id, price, img, category, prodNumber, info, sale)
  );
};
const idRandom = () => {
  let randomId = parseInt(Math.random() * 1000);
  if (stockProducts.some((product) => product.id === randomId)) {
    randomId = parseInt(Math.random() * 1000);
  }
  return randomId;
};

createAddProduct(
  "Jack Daniels",
  idRandom(),
  7500,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126874/drinksCo/jackdanielsbotella_h63ank.jpg",
  "whiskeys",
  1,
  "SALE 20% OFF!"
);
createAddProduct(
  "Jack Daniels Honey",
  idRandom(),
  7500,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126874/drinksCo/jackdanielshonybotella_y6w6tl.png",
  "whiskeys",
  2,
  "SALE 20% OFF!"
);
createAddProduct(
  "Johnny Walker Black Label",
  idRandom(),
  8000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126874/drinksCo/johnniewalkerblackbotella_zlag0f.jpg",
  "whiskeys",
  3,
  "SALE 20% OFF!"
);
createAddProduct(
  "Johnny Walker Red Label",
  idRandom(),
  6000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126875/drinksCo/johnnywalkerrojobotella_jg44ru.webp",
  "whiskeys",
  4,
  "SALE 20% OFF!"
);
createAddProduct(
  "Johnny Walker Blue Label",
  idRandom(),
  20000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126874/drinksCo/johnnyazulbotella_qhlt9z.jpg",
  "whiskeys",
  5,
  "SALE 20% OFF!"
);
createAddProduct(
  "Glenfiddich",
  idRandom(),
  20000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126874/drinksCo/Glenfiddich12_howdiq.webp",
  "whiskeys",
  6,
  "SALE 20% OFF!"
);
createAddProduct(
  "Baileys",
  idRandom(),
  2000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126871/drinksCo/baileysbotella_dbvoxb.png",
  "licores",
  7,
  "SALE 20% OFF!"
);
createAddProduct(
  "Amarula",
  idRandom(),
  2000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/amarula_hekbqg.jpg",
  "licores",
  8,
  "SALE 20% OFF!"
);
createAddProduct(
  "Jagermeifter",
  idRandom(),
  5000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126874/drinksCo/jagermeister-350-ml-licoreria-paradiso-937x1000_ozbfbp.jpg",
  "licores",
  9,
  "SALE 20% OFF!"
);
createAddProduct(
  "Bombay Sapphire",
  idRandom(),
  3000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126871/drinksCo/bombaybotella_wd1acj.webp",
  "gin",
  10,
  "SALE 20% OFF!"
);
createAddProduct(
  "Tanqueray",
  idRandom(),
  20000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126873/drinksCo/gin-tanqueray_wldk9s.jpg",
  "gin",
  11,
  "SALE 20% OFF!"
);
createAddProduct(
  "Beefeater",
  idRandom(),
  4000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126873/drinksCo/gin-beefeater-700cc_kkvm6o.jpg",
  "gin",
  12,
  "SALE 20% OFF!"
);
createAddProduct(
  "Hesperidina",
  idRandom(),
  2000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126874/drinksCo/hesperidina_fia72f.jpg",
  "aperitivos",
  13,
  "SALE 20% OFF!"
);
createAddProduct(
  "Fernet Branca",
  idRandom(),
  2000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126873/drinksCo/fernet-branca_b8dl3u.jpg",
  "aperitivos",
  14,
  "SALE 20% OFF!"
);
createAddProduct(
  "Cynar",
  idRandom(),
  1000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126873/drinksCo/cynar_vnil9o.webp",
  "aperitivos",
  15,
  "SALE 20% OFF!"
);
createAddProduct(
  "Campari",
  idRandom(),
  1000,
  "https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/campari_qitapq.jpg",
  "aperitivos",
  16,
  "SALE 20% OFF!"
);

export const TotalProducts = stockProducts.length;

export const Products = stockProducts.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category] = [...acc[product.category], product];
  return acc;
}, {});
