import User from "../../assets/img/man.jpg";
import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import InfoElement from "../../Shared/InfoElement/InfoElement";
import Delete from "../../svg/Delete";
import Logout from "../../svg/Logout";
import "./accountInfo.css";
import Loader from "../../Shared/Loader/Loader";
import { useStatistic } from "./useStatistic";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { FC } from "react";

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
        <div className="identity__top top-info">
          <span className="top-info__name">{userData.username}</span>
          <span>Id: {userData.id}</span>
          <span>Role: {userData.role}</span>
        </div>

        {forPage === "account" && (
          <div className="identity__btn">
            <ButtonSvg
              onClick={() => logoutMutation.mutate()}
              classes="infos-btn"
              svg={<Logout classes="infos-svg" />}
            />
            <ButtonSvg
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
