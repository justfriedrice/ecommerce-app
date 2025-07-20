function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-blue-600">MyShop</div>
      <div className="relative">
        <button className="text-gray-700 hover:text-blue-600" onClick={onCartClick}>
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
