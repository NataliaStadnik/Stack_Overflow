import AccountInfo from "../../../Widgets/AccountInfo/AccountInfo";
import EditProfile from "../../../Widgets/EditProfile/EditProfile";
import HeaderSection from "../../../Widgets/HeaderSection/HeaderSection";
import "./accountPage.css";

const AccountPage = () => {
  return (
    <section className="account">
      <HeaderSection
        children={
          <div className="account__title">
            <span>Welcome,</span>
            <span className="welcome">denis</span>
          </div>
        }
      />
      <AccountInfo />
      <EditProfile />
    </section>
  );
};

export default AccountPage;
