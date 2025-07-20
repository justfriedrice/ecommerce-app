import { useState } from 'react';

function Checkout({ cart, onBack, onOrderPlaced }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Here you would send the order to your backend or Shopify
    onOrderPlaced(form);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="w-full max-w-md bg-white h-full p-6 shadow-lg flex flex-col">
        <button className="self-end mb-4 text-gray-500 hover:text-red-500" onClick={onBack}>
          ← Back
        </button>
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <form className="flex flex-col gap-4 flex-1" onSubmit={handleSubmit}>
          <input
            className="border p-2 rounded"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="border p-2 rounded"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            className="border p-2 rounded"
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
          />
          {error && <div className="text-red-500">{error}</div>}
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">Total: ${total.toFixed(2)}</span>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
