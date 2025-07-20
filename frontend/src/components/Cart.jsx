function Cart({ cart, onRemoveFromCart, onClose, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="w-full max-w-md bg-white h-full p-6 shadow-lg flex flex-col">
        <button
          className="self-end mb-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="flex-1 overflow-y-auto">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span>{item.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">${item.price}</span>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => onRemoveFromCart(idx)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 border-t pt-4 flex justify-between items-center">
          <span className="font-bold">Total:</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        {cart.length > 0 && (
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            onClick={onCheckout}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
