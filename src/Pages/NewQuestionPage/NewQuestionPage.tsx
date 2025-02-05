import CreateQuestion from "../../Widgets/CreateQuestion/CreateQuestion";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import "./newQuestionPage.css";

const NewQuestionPage = () => {
  return (
    <section className="new-question">
      <HeaderSection title="Ask your question" />
      <CreateQuestion />
    </section>
  );
};

export default NewQuestionPage;
