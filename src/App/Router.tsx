import { Route, Routes } from "react-router";
import { lazy } from "react";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const PostPage = lazy(() => import("../Pages/PostPage/PostPage"));
const UserPage = lazy(() => import("../Pages/UserPage/UserPage"));
const AccountPage = lazy(() => import("../Pages/AccountPage/AccountPage"));
const AllUsersPage = lazy(() => import("../Pages/AllUsersPage/AllUsersPage"));
const Modal = lazy(() => import("../Pages/Modal/Modal"));
const MySnippetsPage = lazy(
  () => import("../Pages/MySnippetsPage/MySnippetsPage")
);
const EditSnippetPage = lazy(
  () => import("../Pages/EditSnippetPage/EditSnippetPage")
);
const NewQuestionPage = lazy(
  () => import("../Pages/NewQuestionPage/NewQuestionPage")
);
const EditQuestionPage = lazy(
  () => import("../Pages/EditQuestionPage/EditQuestionPage")
);
const NewSnippetPage = lazy(
  () => import("../Pages/NewSnippetPage/NewSnippetPage")
);
const QuestionsPage = lazy(
  () => import("../Pages/QuestionsPage/QuestionsPage")
);

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Modal type="register" />} />
      <Route path="/login" element={<Modal type="login" />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<AllUsersPage />} />
      <Route path="/me" element={<AccountPage />} />
      <Route path="/user" element={<UserPage />} />

      <Route path="/questions" element={<QuestionsPage />} />
      <Route path="/questions/new" element={<NewQuestionPage />} />
      <Route path="/questions/:id" element={<EditQuestionPage />} />

      <Route path="/snippets/me" element={<MySnippetsPage />} />
      <Route path="/snippet/edit/:id" element={<EditSnippetPage />} />
      <Route path="/snippet/new" element={<NewSnippetPage />} />

      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="/snippets/me/posts/:id" element={<PostPage />} />
    </Routes>
  );
};

export default Router;
