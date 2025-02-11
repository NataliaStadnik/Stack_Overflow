import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useLoginState = () => {
  const authState = useSelector((state: RootState) => state.authState.value);
  return authState;
};

export default useLoginState;
