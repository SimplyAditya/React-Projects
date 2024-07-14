import axios from "axios";
import { useEffect, useState } from "react";

export default function useGithubAPI() {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      async function fetchData() {
        const user = await axios.get(
          "https://api.github.com/users/simplyaditya"
        );
        setData(user.data);
      }
      fetchData();
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }, []);
  return data;
}
