import { useState, useEffect } from "react";
import axios from "axios";

function useCurrencyConvertor(currency = "INR") {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.currencyapi.com/v3/latest?apikey=cur_live_LjXGdeAWBYzhDdRBVgb7ISxqZFc9hfHE3A26HtCU&currencies=&base_currency=${currency}`
        );
        const result = await response;
        setData(result.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyConvertor;
