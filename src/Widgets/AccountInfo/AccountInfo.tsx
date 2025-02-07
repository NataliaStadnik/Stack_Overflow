import User from "../../assets/img/man.jpg";
import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import InfoElement from "../../Shared/InfoElement/InfoElement";
import Delete from "../../svg/Delete";
import Logout from "../../svg/Logout";
import "./accountInfo.css";
import { accountInfoArr } from "./accountInfoArr";
import { userType } from "../../api/me/getMe";
import { FC } from "react";

interface AccountInfoProps {
  data: userType;
}

const AccountInfo: FC<AccountInfoProps> = ({ data }) => {
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
          <ButtonSvg classes="infos-btn" svg={<Logout classes="infos-svg" />} />
          <ButtonSvg classes="infos-btn" svg={<Delete classes="infos-svg" />} />
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
