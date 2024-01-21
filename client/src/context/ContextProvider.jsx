import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext(null);

function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      setProducts(response?.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const values = {
    products,
    setProducts,
    fetchProducts,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

export default ContextProvider;
