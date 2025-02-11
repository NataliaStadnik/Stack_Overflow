import { FC } from "react";
import Question from "../../Shared/Question/Question";
import "./allQuestions.css";
import { AllQuestionsArr } from "../../Pages/QuestionsPage/getAllQuestions";

interface AllQuestionsProps {
  dataObj: AllQuestionsArr;
}

const AllQuestions: FC<AllQuestionsProps> = ({ dataObj }) => {
  return (
    <ul className="question-list">
      {dataObj.map((elem) => (
        <Question dataObj={elem} key={elem.id} />
      ))}
    </ul>
  );
};

export default AllQuestions;
