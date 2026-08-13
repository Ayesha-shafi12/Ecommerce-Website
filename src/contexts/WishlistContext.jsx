import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);

const getInitialWishlist = () => {
  try {
    const saved = localStorage.getItem("trend-wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(getInitialWishlist);

  useEffect(() => {
    localStorage.setItem("trend-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const isWishlisted = (id) => wishlist.some((product) => product.id === id);

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);

      if (exists) {
        return current.filter((item) => item.id !== product.id);
      }

      return [...current, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((current) => current.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isWishlisted,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
};
