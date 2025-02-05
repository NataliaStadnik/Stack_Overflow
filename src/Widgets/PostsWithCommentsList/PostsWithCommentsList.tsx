import Comment from "../../Shared/Comment/Comment";
import Snippet from "../../Shared/Snippet/Snippet";
import "./postsWithCommentsList.css";

const arr = [1, 2, 3];

const PostsWithCommentsList = () => {
  return (
    <ul className="posts-list">
      {arr.map((elem) => (
        <Snippet key={elem} children={<Comment />} />
      ))}
    </ul>
  );
};

export default PostsWithCommentsList;
