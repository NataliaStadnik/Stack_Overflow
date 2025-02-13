import { Route, Routes } from "react-router";
import { LazyAccountPage } from "../Pages/AccountPage/LazyAccountPage";
import { LazyAllUsersPage } from "../Pages/AllUsersPage/LazyAllUsersPage";
import { LazyAnswers } from "../Pages/Answers/LazyAnswers";
import { LazyEditQuestionPage } from "../Pages/EditQuestionPage/LazyEditQuestionPage";
import { LazyEditSnippetPage } from "../Pages/EditSnippetPage/LazyEditSnippetPage";
import { LazyHomePage } from "../Pages/HomePage/LazyHomePage";
import { LazyModal } from "../Pages/Modal/LazyModal";
import { LazyMySnippetsPage } from "../Pages/MySnippetsPage/LazyMySnippetsPage";
import { LazyNewQuestionPage } from "../Pages/NewQuestionPage/LazyNewQuestionPage";
import { LazyNewSnippetPage } from "../Pages/NewSnippetPage/LazyNewSnippetPage";
import { LazyPostPage } from "../Pages/PostPage/LazyPostPage";
import { LazyQuestionsPage } from "../Pages/QuestionsPage/LazyQuestionsPage";
import { LazyUserPage } from "../Pages/UserPage/LazyUserPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<LazyModal type="register" />} />
      <Route path="/login" element={<LazyModal type="login" />} />
      <Route path="/" element={<LazyHomePage />} />
      <Route path="/users" element={<LazyAllUsersPage />} />
      <Route path="/me" element={<LazyAccountPage />} />
      <Route path="/user" element={<LazyUserPage />} />
      <Route path="/questions" element={<LazyQuestionsPage />} />
      <Route path="/questions/new" element={<LazyNewQuestionPage />} />
      <Route path="/questions/:id" element={<LazyEditQuestionPage />} />
      <Route path="/answers/:id" element={<LazyAnswers />} />
      <Route path="/snippets/me" element={<LazyMySnippetsPage />} />
      <Route path="/snippet/edit/:id" element={<LazyEditSnippetPage />} />
      <Route path="/snippet/new" element={<LazyNewSnippetPage />} />
      <Route path="/posts/:id" element={<LazyPostPage />} />
      <Route path="/snippets/me/posts/:id" element={<LazyPostPage />} />
    </Routes>
  );
};

export default Router;
