import { FC } from "react";
import Archery from "../../svg/Archery";
import Eye from "../../svg/Eye";
import ButtonSvg from "../ButtonSvg/ButtonSvg";
import "./question.css";
import { useNavigate } from "react-router";
import { OneQuestion } from "../../api/questions/getAllQuestions";

interface QuestionProps {
  dataObj: OneQuestion;
}

const Question: FC<QuestionProps> = ({ dataObj }) => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/questions/${dataObj.id}`);
  };

  // добавить страницу с ответами

  return (
    <li className="questions-list__item">
      <article className="question-article">
        <div className="question-article__wrapper">
          <div className="question-article__header">
            <Archery classes="archery" />
            <h3 className="question-article__title">{dataObj.title}</h3>
            <p className="question-article__text">
              <span className="underline">Asked by user:</span>
              <span>{dataObj.user.username}</span>
            </p>
            <div className="question-article__text">
              <span className="underline">Description:</span>
              <div className="question-article__body">
                {dataObj.description}
              </div>
            </div>
          </div>
          <div className="question-article__action">
            <div className="question-article__resolved">
              <span className="resolved-title">Resolved: </span>
              <div
                className={`resolved ${
                  dataObj.isResolved ? "resolved--true" : "resolved--false"
                }`}
              ></div>
            </div>
            <ButtonSvg
              onClick={handleClick}
              classes="eye-btn"
              svg={<Eye classes="eye-svg" />}
            />
          </div>
        </div>

        {dataObj.attachedCode && (
          <div className="attached-code">
            <span className="attached-code__title">Code:</span>
            <pre className="attached-code__code">
              <code>{dataObj.attachedCode}</code>
            </pre>
          </div>
        )}
      </article>
    </li>
  );
};

export default Question;
