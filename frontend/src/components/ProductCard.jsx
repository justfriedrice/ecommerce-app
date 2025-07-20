function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-2" />
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
export default ProductCard;
