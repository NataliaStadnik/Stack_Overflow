import { Button } from "ui-components_innowise";
import "./answers.css";
import Question from "../../Shared/Question/Question";
import { useQuery } from "@tanstack/react-query";
import { getOneQuestion } from "../../api/questions/getOneQuestion";
import useLastIdLocation from "../../hooks/useLastIdLocation";
import Loader from "../../Shared/Loader/Loader";
import { useState } from "react";
import NewComment from "../../Widgets/NewComment/NewComment";
import Comment from "../../Shared/Comment/Comment";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Answers = () => {
  const [status, setStatus] = useState(false);
  const id = useLastIdLocation();
  const navigation = useNavigate();
  const userId = useSelector((state: RootState) => state.userState.id);

  const { error, isError, isSuccess, data, isPending } = useQuery({
    queryFn: () => getOneQuestion(id),
    queryKey: [`/questions/${id}`],
    retry: 1,
  });

  if (isPending) {
    return <Loader type="big" />;
  }

  return (
    <section className="answers-page">
      <div className="answers-page-btn__wrapper">
        <Button
          onClick={() => setStatus(true)}
          classes="edit-snippet addcomment-snippet"
          children={"Add answer"}
        />
        {userId === data?.user.id && (
          <Button
            onClick={() => navigation(`/questions/${id}`)}
            classes="edit-snippet addcomment-snippet"
            children={"Edit question"}
          />
        )}
      </div>

      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}

      {isSuccess && (
        <div className="answers-page__question">
          <Question dataObj={data} />
        </div>
      )}

      {isSuccess && (
        <ul className="answers-list">
          {status && <NewComment setStatus={setStatus} answerId={id} />}
          {data?.answers?.reverse().map((elem) => (
            <Comment key={elem.id} comment={elem} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Answers;
