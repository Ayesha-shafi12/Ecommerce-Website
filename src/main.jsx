import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/react-router";

import App from "./App";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { OrderProvider } from "./contexts/OrderContext";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in your .env.local file");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        signInUrl="/signin"
        signUpUrl="/signup"
        signInFallbackRedirectUrl="/"
        signUpFallbackRedirectUrl="/"
      >
        <CartProvider>
          <WishlistProvider>
            <OrderProvider>
              <App />
            </OrderProvider>
          </WishlistProvider>
        </CartProvider>
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
