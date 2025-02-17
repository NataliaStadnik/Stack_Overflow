import User from "../../assets/img/man.jpg";
import IconButton from "../../Shared/IconButton/IconButton";
import InfoElement from "../../Shared/InfoElement/InfoElement";
import Delete from "../../svg/Delete";
import Logout from "../../svg/Logout";
import "./accountInfo.css";
import Loader from "../../Shared/Loader/Loader";
import { useStatistic } from "../../hooks/useStatistic";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { FC } from "react";
import UserInfo from "../../Shared/UserInfo/UserInfo";

interface AccountInfoProps {
  forPage: "account" | "user";
}

const AccountInfo: FC<AccountInfoProps> = ({ forPage }) => {
  const userData = useSelector((state: RootState) => state.userState);
  const { logoutMutation, deleteMutation, statisticObj, statistic } =
    useStatistic(userData);

  if (logoutMutation.isPending || deleteMutation.isPending) {
    return <Loader type="big" />;
  }

  return (
    <div className="infos">
      <img className="infos__img" src={User} alt="user photo" />
      <div className="identity">
        <UserInfo data={userData} />

        {forPage === "account" && (
          <div className="identity__btn">
            <IconButton
              onClick={() => logoutMutation.mutate()}
              classes="infos-btn"
              svg={<Logout classes="infos-svg" />}
            />
            <IconButton
              onClick={() => deleteMutation.mutate()}
              classes="infos-btn"
              svg={<Delete classes="infos-svg" />}
            />
          </div>
        )}
      </div>

      {statisticObj.isError && (
        <div className="error-wrap-statistic">
          <span className="error">Error: {statisticObj.error.message}</span>
        </div>
      )}

      {statisticObj.isSuccess && (
        <ul className="infos-list">
          {statistic?.map((elem) => (
            <InfoElement key={elem.id} label={elem.label} value={elem.value} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccountInfo;
