import { Button } from "ui-components_innowise";
import AllQuestions from "../../../Widgets/AllQuestions/AllQuestions";
import Pagination from "../../../Widgets/Pagination/Pagination";
import "./questionsPage.css";

const QuestionsPage = () => {
  return (
    <>
      <Pagination />
      <Button classes="ask-question" children={"Ask question"} />
      <AllQuestions />
    </>
  );
};

export default QuestionsPage;
