import { Button } from "ui-components_innowise";
import "./postPage.css";
import { useNavigate } from "react-router";
import Comment from "../../Shared/Comment/Comment";
import Snippet from "../../Widgets/Snippet/Snippet";

const PostPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/edit_snippet");
  };

  return (
    <section className="post-page">
      <Button
        onClick={handleClick}
        classes="edit-snippet"
        children={"Edit snippet"}
      />
      {/* <Snippet children={<Comment />} /> */}
    </section>
  );
};

export default PostPage;
