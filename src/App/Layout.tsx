import AccountPage from "../Pages/AccountPage/AccountPage";
import HomePage from "../Pages/HomePage/HomePage";
import NewQuestionPage from "../Pages/NewQuestionPage/NewQuestionPage";
import NewSnippetPage from "../Pages/NewSnippetPage/NewSnippetPage";
import PostPage from "../Pages/PostPage/PostPage";
import QuestionsPage from "../Pages/QuestionsPage/QuestionsPage";
import Header from "../Widgets/Header/Header";
import Menu from "../Widgets/Menu/Menu";

const Layout = () => {
  return (
    <div className="layout">
      <h1 className="visually-hidden">Stack Overflow</h1>
      <Header />
      <div className="outer-wrapper">
        <Menu />
        <div className="container section section__container">
          <HomePage />
          {/* <QuestionsPage /> */}
          {/* <NewSnippetPage /> */}
          {/* <AccountPage /> */}
          {/* <NewQuestionPage /> */}
          {/* <PostPage /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
