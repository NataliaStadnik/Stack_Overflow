import Header from "../Widgets/Header/Header";
import Menu from "../Widgets/Menu/Menu";
import HomePage from "./Pages/HomePage/HomePage";
import QuestionsPage from "./Pages/QuestionsPage/QuestionsPage";

const Layout = () => {
  return (
    <div className="layout">
      <h1 className="visually-hidden">Stack Overflow</h1>
      <Header />
      <div className="outer-wrapper">
        <Menu />
        <div className="container section">
          <HomePage />
          {/* <QuestionsPage /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
