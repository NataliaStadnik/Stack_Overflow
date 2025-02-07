import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

type useFetchProps = () => Promise<AxiosResponse>;

type returnedType<T> = [
  T | undefined,
  boolean,
  string,
  (request?: useFetchProps) => void
];

function useFetch<T>(request?: useFetchProps): returnedType<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchNow(request?: useFetchProps) {
    setLoading(true);
    request?.()
      .then((res) => setData(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    if (request) {
      fetchNow(request);
    }
  }, []);

  return [data, loading, error, fetchNow];
}

export default useFetch;
