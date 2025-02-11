import { useLocation } from "react-router";

const useLastIdLocation = () => {
  return useLocation().pathname.split("/").at(-1) || "";
};

export default useLastIdLocation;
