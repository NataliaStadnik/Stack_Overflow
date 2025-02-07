import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setAuthFalse } from "../store/authSlice";
import { queryCLient } from "../api/queryClients";

type Function = () => Promise<void>;

const useLogout = (fn: Function) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutMutation = useMutation({
    mutationFn: fn,
    onSuccess() {
      navigate("/");
      dispatch(setAuthFalse());
      // dispatch(resetUserInfo());
      queryCLient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
  return logoutMutation;
};

export default useLogout;
