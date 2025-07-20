import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { getProducts } from './services/shopify';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Fetch products from Shopify on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const shopifyProducts = await getProducts();
        setProducts(shopifyProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (idx) => {
    setCart(cart.filter((_, i) => i !== idx));
  };

  const handleProceedToCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleOrderPlaced = (form) => {
    setOrderPlaced(true);
    setCheckoutOpen(false);
    setCart([]);
    // You can send the order to your backend here if needed
    console.log('Order placed:', { cart, customerInfo: form });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} onCartClick={() => setCartOpen(true)} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      {cartOpen && (
        <Cart
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClose={() => setCartOpen(false)}
          onCheckout={handleProceedToCheckout}
        />
      )}
      {checkoutOpen && (
        <Checkout
          cart={cart}
          onBack={() => setCheckoutOpen(false)}
          onOrderPlaced={handleOrderPlaced}
        />
      )}
      {orderPlaced && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded shadow text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setOrderPlaced(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
