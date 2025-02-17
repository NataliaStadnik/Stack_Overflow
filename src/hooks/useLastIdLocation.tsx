import { useLocation } from "react-router";

const useLastIdLocation = () => {
  const { pathname } = useLocation();
  return pathname.split("/").at(-1) || "";
};

export default useLastIdLocation;
