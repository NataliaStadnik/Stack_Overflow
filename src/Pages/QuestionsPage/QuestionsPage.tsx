import { Button } from "ui-components_innowise";
import AllQuestions from "../../Widgets/AllQuestions/AllQuestions";
import Pagination from "../../Widgets/Pagination/Pagination";
import "./questionsPage.css";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { getAllQuestions } from "./getAllQuestions";

const QuestionsPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new_question");
  };

  const { error, isError, isSuccess, isPending, data } = useQuery({
    queryFn: () => getAllQuestions(),
    queryKey: ["questions"],
    retry: 1,
  });

  if (isPending) {
    return <Loader type="big" />;
  }

  console.log(data);
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
      {isSuccess && <AllQuestions dataObj={data.data} />}
    </>
  );
};

export default QuestionsPage;
