import { useEffect, useState } from "react";

export default function useFetch(url) {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [errors, setErrors] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setErrors("Errors happened");
      }
    };

    fetchData();
  }, []);

  return [data, isLoading, errors];
}
