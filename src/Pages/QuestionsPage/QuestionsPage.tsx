import { Button } from "ui-components_innowise";
import AllQuestions from "../../Widgets/AllQuestions/AllQuestions";
import Pagination from "../../Widgets/Pagination/Pagination";
import "./questionsPage.css";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchAllAnswers } from "../../Widgets/AllQuestions/fetchAllAnswers";
import Loader from "../../Shared/Loader/Loader";
import { useEffect } from "react";
import { instance } from "../../api/config";

const QuestionsPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new_question");
  };

  // useEffect(() => {
  //   instance.get("/snippets").then((res) => {
  //     console.log(res);
  //   });
  // });

  const { error, isError, isSuccess, isPending, data } = useQuery({
    queryFn: () => fetchAllAnswers(),
    queryKey: ["answers"],
    retry: 1,
  });

  if (isPending) {
    return <Loader type="big" />;
  }

  return (
    <>
      <Pagination />
      <Button
        onClick={handleClick}
        classes="ask-question"
        children={"Ask question"}
      />
      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}
      {isSuccess && <AllQuestions />}
    </>
  );
};

export default QuestionsPage;
