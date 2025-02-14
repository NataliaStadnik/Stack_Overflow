import Header from "../Widgets/Header/Header";
import Menu from "../Widgets/Menu/Menu";
import Router from "./Router";
import { auth } from "../api/auth/auth";
import { useDispatch } from "react-redux";
import { setAuthFalse, setAuthTrue } from "../store/authSlice";
import Loader from "../Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { setUserInfo } from "../store/userSlice";
import { Suspense, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Layout = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 620px)",
  });

  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { status, data } = useQuery({
    queryFn: () => auth(),
    queryKey: ["auth"],
    retry: 1,
  });

  switch (status) {
    case "pending":
      return <Loader type="big" />;
    case "error":
      dispatch(setAuthFalse());
      break;
    case "success":
      dispatch(setAuthTrue());
      dispatch(setUserInfo(data));
  }
  return (
    <Suspense>
      <div id="layout" className="layout">
        <h1 className="visually-hidden">Stack Overflow</h1>
        <Header isOpen={isOpen} setOpen={setOpen} />

        <div className="outer-wrapper">
          {(isTablet || isOpen) && <Menu isOpen={isOpen} setOpen={setOpen} />}

          <div className="container section section__container">
            <Router />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Layout;
