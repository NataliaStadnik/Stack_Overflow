import { useEffect } from "react";
import useLoginState from "./useLoginState";

const useAuthNavigate = (
  to: string,
  setLink: React.Dispatch<React.SetStateAction<string>>
) => {
  const authState = useLoginState();

  useEffect(() => {
    if (!authState && to !== "/") {
      setLink("/login");
    } else {
      setLink(to);
    }
  }, [authState, setLink, to]);
};

export default useAuthNavigate;
