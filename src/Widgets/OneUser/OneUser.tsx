import { FC } from "react";
import UserInfo from "../../Shared/UserInfo/UserInfo";
import "./oneUser.css";
import { Button } from "ui-components_innowise";
import { useQuery } from "@tanstack/react-query";
import { fetchStatistic } from "../AccountInfo/fetchStatistic";
import { userType } from "../Login/authLogin";
import Loader from "../../Shared/Loader/Loader";
import { getstatisticArr } from "../AccountInfo/accountInfoArr";
import InfoElement from "../../Shared/InfoElement/InfoElement";
import User from "../../assets/img/man.jpg";

interface OneUserProps {
  dataObj: userType;
}

// закрывать списки при уходе со страницы
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
      <img className="one-user__img" src={User} alt="user photo" />
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
