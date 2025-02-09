import { FC } from "react";
import { userType } from "../../Widgets/Login/authLogin";
import "./userInfo.css";

export interface UserInfoProps {
  data: userType;
}

const UserInfo: FC<UserInfoProps> = ({ data }) => {
  return (
    <div className="identity__top top-info">
      <span className="top-info__name">{data.username}</span>
      <span>Id: {data.id}</span>
      <span>Role: {data.role}</span>
    </div>
  );
};

export default UserInfo;
