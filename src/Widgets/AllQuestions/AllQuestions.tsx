import Question from "../../Shared/Question/Question";
import "./allQuestions.css";

const arr = [1, 2, 3, 4, 5];

const AllQuestions = () => {
  return (
    <ul className="question-list">
      {arr.map((elem) => (
        <Question key={elem} />
      ))}
    </ul>
  );
};

export default AllQuestions;
