import { FC, useState } from "react";
import { OneComment } from "../../Pages/HomePage/api/fetchSnippetsComments";
import Message from "../../svg/Message";
import "./comment.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UpdateBtnComment from "../UpdateBtnComment/UpdateBtnComment";
import NewComment from "../NewComment/NewComment";
import useLastIdLocation from "../../hooks/useLastIdLocation";

interface CommentProps {
  comment: OneComment;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  const myID = useSelector((state: RootState) => state.userState.id);
  const [status, setStatus] = useState(false);
  const locationId = useLastIdLocation();

  return (
    <li>
      {!status ? (
        <div className={`comment`}>
          <div className={`comment__field field`}>
            <div className="field__top">
              <p className="comment__text">{comment?.user.username}</p>
              {myID === comment.user.id && (
                <UpdateBtnComment
                  commentId={comment.id}
                  setStatus={setStatus}
                />
              )}
            </div>
            <p>{comment?.content}</p>
          </div>
          <div className="comment__img">
            <Message color="white" classes="comment__svg" />
          </div>
        </div>
      ) : (
        <NewComment
          commentString={comment.content}
          setStatus={setStatus}
          snippetId={locationId}
        />
      )}
    </li>
  );
};

export default Comment;
