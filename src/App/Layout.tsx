import Header from "../Widgets/Header/Header";
import Menu from "../Widgets/Menu/Menu";
import Router from "./Router";

const Layout = () => {
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

// модалка без роутинга?
export default Layout;
