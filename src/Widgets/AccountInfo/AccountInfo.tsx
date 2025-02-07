import User from "../../assets/img/man.jpg";
import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import InfoElement from "../../Shared/InfoElement/InfoElement";
import Delete from "../../svg/Delete";
import Logout from "../../svg/Logout";
import "./accountInfo.css";
import { accountInfoArr } from "./accountInfoArr";
import { userType } from "../../api/me/getMe";
import { FC } from "react";
import Loader from "../../Shared/Loader/Loader";
import useLogout from "../../hooks/useLogout";
import { authLogout } from "../../api/auth/authLogout";
import { authDelete } from "./authDelete";

interface AccountInfoProps {
  data: userType;
}

const AccountInfo: FC<AccountInfoProps> = ({ data }) => {
  const logoutMutation = useLogout(authLogout);
  const deleteMutation = useLogout(authDelete);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  if (logoutMutation.isPending || deleteMutation.isPending) {
    return <Loader type="big" />;
  }

  return (
    <div className="infos">
      <img className="infos__img" src={User} alt="user photo" />
      <div className="identity">
        <div className="identity__top top-info">
          <span className="top-info__name">{data.username}</span>
          <span>Id: {data.id}</span>
          <span>Role: {data.role}</span>
        </div>
        <div className="identity__btn">
          <ButtonSvg
            onClick={handleLogout}
            classes="infos-btn"
            svg={<Logout classes="infos-svg" />}
          />
          <ButtonSvg
            onClick={handleDelete}
            classes="infos-btn"
            svg={<Delete classes="infos-svg" />}
          />
        </div>
      </div>
      <ul className="infos-list">
        {accountInfoArr.map((elem) => (
          <InfoElement key={elem.id} label={elem.label} value={elem.value} />
        ))}
      </ul>
    </div>
  );
};

export default AccountInfo;
