import { Button } from "ui-components_innowise";
import AllQuestions from "../../Widgets/AllQuestions/AllQuestions";
import Pagination from "../../Widgets/Pagination/Pagination";
import "./questionsPage.css";
import { useNavigate } from "react-router";

const QuestionsPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new_question");
  };

  return (
    <>
      <Pagination />
      <Button
        onClick={handleClick}
        classes="ask-question"
        children={"Ask question"}
      />
      <AllQuestions />
    </>
  );
};

export default QuestionsPage;
