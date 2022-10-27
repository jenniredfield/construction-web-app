const lojas = ["Loja 1", "Loja 2", "Loja 3", "Loja 4", "Loja 5"];
const images = [
  "https://cdn.shopify.com/s/files/1/0542/6721/6063/products/image_8c599071-5748-48b8-b7b5-1e6da0e64cd8.jpg?v=1626130746",
  "https://brickwholesale.co.uk/wp-content/uploads/2020/09/Vandersanden-Autumn-Red-main-sq.jpg",
  "https://brickwholesale.co.uk/wp-content/uploads/2022/07/ET-Clay-Bairstow-Black-Wirecut-yard-e1658406908652.jpg",
];

const product = {
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

export const products = Array(20)
  .fill()
  .map((i) => ({
    ...product,
    id: String(Math.random()),
    imgSrc: getRandomFromList(images),
    shop: getRandomFromList(lojas),
  }));
