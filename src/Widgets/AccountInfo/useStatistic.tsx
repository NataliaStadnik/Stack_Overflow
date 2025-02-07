import { useQuery } from "@tanstack/react-query";
import { authLogout } from "../../api/auth/authLogout";
import useLogout from "../../hooks/useLogout";
import { authDelete } from "./authDelete";
import { fetchStatistic } from "./fetchStatistic";
import { getstatisticArr } from "./accountInfoArr";
import { userType } from "../../api/me/getMe";

export function useStatistic(dataObj: userType) {
  const logoutMutation = useLogout(authLogout);
  const deleteMutation = useLogout(authDelete);
  let statistic;

  const statisticObj = useQuery({
    queryFn: () => fetchStatistic(dataObj.id),
    queryKey: ["statistic"],
    retry: 1,
  });

  if (statisticObj.isSuccess) {
    statistic = getstatisticArr(statisticObj.data);
  }

  return { logoutMutation, deleteMutation, statisticObj, statistic };
}
