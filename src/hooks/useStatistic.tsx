import { useQuery } from "@tanstack/react-query";
import { userType } from "../api/auth/authLogin";
import useLogout from "./useLogout";
import { fetchStatistic } from "../api/users/fetchStatistic";
import { getStatisticArr } from "../Widgets/AccountInfo/accountInfoArr";
import { authLogout } from "../api/auth/authLogout";
import { authDelete } from "../api/me/authDelete";
import { useMemo } from "react";

export function useStatistic(dataObj: userType) {
  const logoutMutation = useLogout(authLogout);
  const deleteMutation = useLogout(authDelete);

  const statisticObj = useQuery({
    queryFn: () => fetchStatistic(dataObj.id),
    queryKey: ["statistic"],
    retry: 1,
  });

  const statistic = useMemo(() => {
    return statisticObj.isSuccess ? getStatisticArr(statisticObj.data) : null;
  }, [statisticObj.data]);

  return { logoutMutation, deleteMutation, statisticObj, statistic };
}
