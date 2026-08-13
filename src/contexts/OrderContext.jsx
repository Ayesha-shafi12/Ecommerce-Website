import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext(null);

const getInitialOrders = () => {
  try {
    const saved = localStorage.getItem("trend-orders");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(getInitialOrders);

  useEffect(() => {
    localStorage.setItem("trend-orders", JSON.stringify(orders));
  }, [orders]);

  const createOrder = (orderDetails) => {
    const order = {
      id: `TRD-${Date.now()}`,
      ...orderDetails,
      status: "Processing",
      createdAt: new Date().toISOString(),
    };

    setOrders((current) => [order, ...current]);

    return order;
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }

  return context;
};
