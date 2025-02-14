import { FC } from "react";
import UserInfo from "../../Shared/UserInfo/UserInfo";
import "./oneUser.css";
import { Button } from "ui-components_innowise";
import { useQuery } from "@tanstack/react-query";
import { fetchStatistic } from "../../api/users/fetchStatistic";
import { userType } from "../../api/auth/authLogin";
import Loader from "../../Shared/Loader/Loader";
import { getstatisticArr } from "../AccountInfo/accountInfoArr";
import InfoElement from "../../Shared/InfoElement/InfoElement";
import User from "../../svg/User";

interface OneUserProps {
  dataObj: userType;
}

const OneUser: FC<OneUserProps> = ({ dataObj }) => {
  const { error, data, refetch, isFetching, isSuccess, isError } = useQuery({
    queryFn: () => fetchStatistic(dataObj.id),
    queryKey: [`${dataObj.id}/statistic`],
    enabled: false,
  });

  const handleClick = () => {
    refetch();
  };

  return (
    <div className={`one-user ${isSuccess ? "one-user-statistic" : ""}`}>
      <User color="grey" classes="one-user__img" />
      <UserInfo data={dataObj} />

      {!isSuccess && (
        <Button
          onClick={handleClick}
          children={isFetching ? <Loader type="small" /> : "Show statistic"}
        />
      )}
      {isError && (
        <div className="error-message">
          <span className="error">Error: {error.message}</span>
        </div>
      )}
      {isSuccess && (
        <ul className="infos-list">
          {getstatisticArr(data)?.map((elem) => (
            <InfoElement key={elem.id} label={elem.label} value={elem.value} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default OneUser;
