import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <div className="product-card flex flex-col justify-between border border-gray-200 rounded-lg overflow-hidden p-4 bg-white">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <div className="product-info">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-700 font-medium mt-1">${product.price}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-gray-100">
        <Link
          to={`/product/${product.id}`}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View Details
        </Link>
        <button
          type="button"
          className="px-3 py-1.5 text-sm bg-amber-400 hover:bg-amber-500 rounded font-medium cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
