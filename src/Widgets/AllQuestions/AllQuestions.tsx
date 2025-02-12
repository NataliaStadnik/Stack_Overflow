import { FC } from "react";
import Question from "../../Shared/Question/Question";
import "./allQuestions.css";
import { AllQuestionsArr } from "../../api/questions/getAllQuestions";

interface AllQuestionsProps {
  dataObj: AllQuestionsArr;
  classes?: string;
}

const AllQuestions: FC<AllQuestionsProps> = ({ dataObj, classes = "" }) => {
  return (
    <ul className={`question-list ${classes}`}>
      {dataObj.map((elem) => (
        <Question dataObj={elem} key={elem.id} />
      ))}
    </ul>
  );
};

export default AllQuestions;
