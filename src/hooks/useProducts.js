import { useEffect, useState } from "react";
import { getAllProducts } from "../API/productsWithAxios";

export default function useProducts(rerender) {
  let [productsList, setProductsList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Getting products from the products API
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        setProductsList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [rerender]);

  return [productsList, isLoading];
}
