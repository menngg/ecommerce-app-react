import { getProducts } from "../data/product";

import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = getProducts();

  return (
    <div>
      <div className="hero-section flex flex-col bg-amber-300 min-h-50 w-full items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold">
          We provide only the best quality products here at
        </h1>
        <p className="text-lg font-semibold">OURS</p>
      </div>

      <div className="product-section p-4">
        <h1 className="text-xl font-bold mb-4">Our Products</h1>

        <div className="product-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
