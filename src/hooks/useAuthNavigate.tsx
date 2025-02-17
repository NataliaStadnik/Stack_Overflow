import { useEffect, useState } from "react";
import useLoginState from "./useLoginState";

const useAuthNavigate = (to: string) => {
  const [href, setHref] = useState(to);
  const authState = useLoginState();

  useEffect(() => {
    if (!authState && to !== "/") {
      setHref("/login");
    } else {
      setHref(to);
    }
  }, [authState, to]);

  return { href, setHref };
};

export default useAuthNavigate;
