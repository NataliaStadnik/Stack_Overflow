import { useSelector } from "react-redux";
import AccountInfo from "../../Widgets/AccountInfo/AccountInfo";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import "./userPage.css";
import { RootState } from "../../store/store";

const UserPage = () => {
  const userName = useSelector((state: RootState) => state.userState.username);

  return (
    <section className="users">
      <HeaderSection
        children={
          <div className="account__title">
            <span>Welcome,</span>
            <span className="welcome">{userName}</span>
          </div>
        }
      />
      <AccountInfo forPage="user" />
    </section>
  );
};

export default UserPage;
