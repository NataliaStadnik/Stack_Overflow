import Archery from "../../svg/Archery";
import Eye from "../../svg/Eye";
import ButtonSvg from "../ButtonSvg/ButtonSvg";
import "./question.css";

const Question = () => {
  return (
    <li className="questions-list__item">
      <article className="question-article">
        <div className="question-article__header">
          <Archery classes="archery" />
          <h3 className="question-article__title">Test Question</h3>
          <p className="question-article__text">
            <span className="underline">Asked by user:</span>
            <span>denis123456</span>
          </p>
        </div>
        <div className="question-article__body">Hello world description</div>
        <ButtonSvg classes="eye-btn" svg={<Eye classes="eye-svg" />} />
      </article>
    </li>
  );
};

export default Question;
