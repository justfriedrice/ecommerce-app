# React + Tailwind eCommerce App

A simple, modern eCommerce web app built with **React**, **Vite**, **Tailwind CSS**, and **Shopify Storefront API**.  
This project demonstrates a full shopping flow: product listing, cart, and checkout.

---

## Features

- 🛒 Product listing (fetched from Shopify Storefront API)
- 🖼️ Responsive, modern UI with Tailwind CSS
- ➕ Add to cart, remove from cart
- 🧾 Cart sidebar with total calculation
- 📝 Checkout form (name, email, address)
- ✅ Order confirmation modal
- ⚡ Fast, modern stack (Vite, React 18+)
- 📦 Easy to deploy (Vercel, Netlify, etc.)

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ecommerce-app.git
cd ecommerce-app/frontend

2. Install dependencies
npm install

3. Configure Shopify API
In src/services/shopify.js, set your store domain and Storefront access token:
const SHOPIFY_DOMAIN = 'your-store-name.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = 'your-storefront-access-token';

4. Run the app
npm run dev

|Live Demo|
https://ecommerce-app-brown-three.vercel.app/
