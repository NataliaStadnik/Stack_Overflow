import "./accountPage.css";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import AccountInfo from "../../Widgets/AccountInfo/AccountInfo";
import EditProfile from "../../Widgets/EditProfile/EditProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AccountPage = () => {
  const userName = useSelector((state: RootState) => state.userState.username);

  return (
    <section className="account">
      <HeaderSection
        children={
          <div className="account__title">
            <span>Welcome,</span>
            <span className="welcome">{userName}</span>
          </div>
        }
      />
      <AccountInfo forPage="account" />
      <EditProfile />
    </section>
  );
};

export default AccountPage;
