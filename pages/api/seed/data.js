const lojas = ["Loja 1", "Loja 2", "Loja 3", "Loja 4", "Loja 5"];
const images_tijolo = [
  "https://cdn.shopify.com/s/files/1/0542/6721/6063/products/image_8c599071-5748-48b8-b7b5-1e6da0e64cd8.jpg?v=1626130746",
  "https://brickwholesale.co.uk/wp-content/uploads/2020/09/Vandersanden-Autumn-Red-main-sq.jpg",
  "https://brickwholesale.co.uk/wp-content/uploads/2022/07/ET-Clay-Bairstow-Black-Wirecut-yard-e1658406908652.jpg",
];

const images_azulejo = [
  "https://www.tiles-direct.com/images/ledbury-slate-grey-45cm-x-45cm-wall-floor-tile-p5264-16279_image.jpg",
  "https://thumbor-gc.tomandco.uk/unsafe/1154x1385/filters:upscale():fill(white)/https://www.toppstiles.co.uk/static/media/catalog/product/6/9/694118.jpg",
];

const product_tijolo = {
  name: "Tijolo Duradouro",
  description: "Um tijolo qualquer",
  shop: "Loja 1",
  imgSrc: [""],
  price: 799,
  color: "white",
  product_type: "tijolo",
  dimensions: {
    w: 200,
    h: 200,
    d: 200,
  },
  material: "plastic",
  brand: "Some brand",
  id: "123",
};

const getRandomFromList = (list) =>
  list[Math.round(Math.random() * list.length - 1)];

export const products_tijolo = Array(20)
  .fill()
  .map((i) => ({
    ...product_tijolo,
    id: String(Math.random()),
    imgSrc: [getRandomFromList(images_tijolo)],
    shop: getRandomFromList(lojas),
  }));

const product_azulejo = {
  name: "Azulejo Legal",
  description: "Um azulejo dah hora",
  shop: "Loja 1",
  imgSrc: [""],
  price: 799,
  color: "white",
  product_type: "azulejo",
  dimensions: {
    w: 200,
    h: 200,
    d: 200,
  },
  material: "ceramica",
  brand: "Some brand",
  id: "123",
};

export const products_azulejo = Array(20)
  .fill()
  .map((i) => ({
    ...product_azulejo,
    id: String(Math.random()),
    imgSrc: [getRandomFromList(images_azulejo)],
    shop: getRandomFromList(lojas),
  }));
