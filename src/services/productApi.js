const API_URL = "https://dummyjson.com/products";

export const getApiProducts = async () => {
  const response = await fetch(`${API_URL}?limit=100`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
};

export const searchApiProducts = async (query) => {
  const response = await fetch(
    `${API_URL}/search?q=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search products");
  }

  const data = await response.json();

  return data.products;
};
