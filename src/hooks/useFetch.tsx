import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

type useFetchProps = () => Promise<AxiosResponse>;

const useFetch = (request?: useFetchProps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchNow(request?: useFetchProps) {
    setLoading(true);
    request?.()
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    if (request) {
      fetchNow(request);
    }
  }, []);

  return [data, loading, error, fetchNow];
};

export default useFetch;
