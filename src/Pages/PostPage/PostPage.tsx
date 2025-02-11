import { Button } from "ui-components_innowise";
import "./postPage.css";
import Comment from "../../Shared/Comment/Comment";
import Snippet from "../../Widgets/Snippet/Snippet";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { fetchComments } from "../HomePage/api/fetchComments";
import { useState } from "react";
import NewComment from "../../Shared/NewComment/NewComment";
import useLastIdLocation from "../../hooks/useLastIdLocation";

// not update likes/dislikes

const PostPage = () => {
  const locationId = useLastIdLocation();
  const [status, setStatus] = useState(false);

  const handleAddComment = () => {
    setStatus(true);
  };

  const { error, isError, isSuccess, isPending, data } = useQuery({
    queryFn: () => fetchComments(locationId),
    queryKey: [`snippets/${locationId}}`],
    retry: 1,
  });

  if (isPending) {
    return <Loader type="big" />;
  }

  if (isSuccess) {
    data?.comments?.sort((a, b) => (Number(a.id) > Number(b.id) ? 1 : -1));
  }

  return (
    <section className="post-page">
      <div className="post-page-btn__wrapper">
        <Button
          onClick={handleAddComment}
          classes="edit-snippet addcomment-snippet"
          children={"Add comment"}
        />
      </div>

      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}

      {isSuccess && (
        <Snippet
          dataObj={data}
          children={
            <ul className="commemts-list">
              {status && (
                <NewComment setStatus={setStatus} snippetId={locationId} />
              )}
              {data.comments?.reverse().map((elem) => (
                <Comment key={elem.id} comment={elem} />
              ))}
            </ul>
          }
        />
      )}
    </section>
  );
};

export default PostPage;
