import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import product5 from "../images/product5.jpg";
import product6 from "../images/product6.jpg";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "This is product 1",
    image: product1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "This is product 2",
    image: product2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    description: "This is product 3",
    image: product3,
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    description: "This is product 4",
    image: product4,
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    description: "This is product 5",
    image: product5,
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    description: "This is product 6",
    image: product6,
  },
];
export function getProducts() {
  return products;
}
