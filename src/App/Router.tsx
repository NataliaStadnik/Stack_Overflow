import { Route, Routes } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import AccountPage from "../Pages/AccountPage/AccountPage";
import NewQuestionPage from "../Pages/NewQuestionPage/NewQuestionPage";
import NewSnippetPage from "../Pages/NewSnippetPage/NewSnippetPage";
import PostPage from "../Pages/PostPage/PostPage";
import QuestionsPage from "../Pages/QuestionsPage/QuestionsPage";
import Modal from "../Pages/Modal/Modal";
import MySnippetsPage from "../Pages/MySnippetsPage/MySnippetsPage";
import EditSnippetPage from "../Pages/EditSnippetPage/EditSnippetPage";
import AllUsersPage from "../Pages/AllUsersPage/AllUsersPage";
import UserPage from "../Pages/UserPage/UserPage";
import EditQuestionPage from "../Pages/EditQuestionPage/EditQuestionPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostPage />} />
      <Route path="/my_snippet" element={<MySnippetsPage />} />
      <Route path="/edit_snippet" element={<EditSnippetPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/all_users" element={<AllUsersPage />} />
      <Route path="/new_question" element={<NewQuestionPage />} />
      <Route path="/edit_question" element={<EditQuestionPage />} />
      <Route path="/new_snippet" element={<NewSnippetPage />} />
      <Route path="/questions" element={<QuestionsPage />} />
      <Route path="/register" element={<Modal type="register" />} />
      <Route path="/login" element={<Modal type="login" />} />
    </Routes>
  );
};

export default Router;
