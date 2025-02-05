import Message from "../../svg/Message";
import "./comment.css";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__field">
        <p className="comment__text">Label</p>
      </div>
      <div className="comment__img">
        <Message color="white" classes="comment__svg" />
      </div>
    </div>
  );
};

export default Comment;
