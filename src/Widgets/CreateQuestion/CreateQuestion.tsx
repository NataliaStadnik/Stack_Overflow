import { Button, TextField } from "ui-components_innowise";
import "./createQuestion.css";
import SnippetBody from "../../Shared/SnippetBody/SnippetBody";

const CreateQuestion = () => {
  return (
    <form className="ask-form">
      <TextField label="Question title" />
      <TextField label="Question description" />
      <div className="ask-form__body">
        <p className="ask-form__title">Attached code:</p>
        <SnippetBody />
      </div>
      <Button classes="ask-form__btn" children="Confirm" />
    </form>
  );
};

export default CreateQuestion;
