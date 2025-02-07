import Header from "../Widgets/Header/Header";
import Menu from "../Widgets/Menu/Menu";
import Router from "./Router";
import { auth } from "../api/auth/auth";
import { useDispatch } from "react-redux";
import { setAuthFalse, setAuthTrue } from "../store/authSlice";
import useFetch from "../hooks/useFetch";
import Loader from "../Shared/Loader/Loader";

const Layout = () => {
  const dispatch = useDispatch();
  const [data, loading, error] = useFetch(auth);

  if (loading) return <Loader type="big" />;
  if (error) {
    dispatch(setAuthFalse());
  }
  if (data) {
    dispatch(setAuthTrue());
  }
  return (
    <div id="layout" className="layout">
      <h1 className="visually-hidden">Stack Overflow</h1>
      <Header />
      <div className="outer-wrapper">
        <Menu />
        <div className="container section section__container">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;

// исправить первичную загрузку

// const datasAuth = {
//   username: "NataStadnik",
//   password: "123456789",
// };
