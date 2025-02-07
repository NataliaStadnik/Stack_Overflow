import "./accountPage.css";
import { getMe } from "../../api/me/getMe";
import Loader from "../../Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import AccountInfo from "../../Widgets/AccountInfo/AccountInfo";
import EditProfile from "../../Widgets/EditProfile/EditProfile";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/userSlice";

const AccountPage = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useQuery({
    queryFn: () => getMe(),
    queryKey: ["me"],
    retry: 2,
  });

  switch (status) {
    case "pending":
      return <Loader type="big" />;
    case "success":
      dispatch(setUserInfo(data.data));
      return (
        <section className="account">
          <HeaderSection
            children={
              <div className="account__title">
                <span>Welcome,</span>
                <span className="welcome">{data.data.username}</span>
              </div>
            }
          />
          <AccountInfo data={data.data} />
          <EditProfile />
        </section>
      );
    case "error":
      return (
        <div>
          <span className="error">Произошла ошибка {error.message}</span>
        </div>
      );
  }
};

export default AccountPage;
