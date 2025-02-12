import { useQuery } from "@tanstack/react-query";
import { userType } from "../api/auth/authLogin";
import useLogout from "./useLogout";
import { fetchStatistic } from "../api/users/fetchStatistic";
import { getstatisticArr } from "../Widgets/AccountInfo/accountInfoArr";
import { authLogout } from "../api/auth/authLogout";
import { authDelete } from "../api/me/authDelete";

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
