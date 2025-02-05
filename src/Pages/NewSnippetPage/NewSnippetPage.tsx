import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import NewSnippet from "../../Widgets/NewSnippet.tsx/NewSnippet";
import "./newSnippetPage.css";

const NewSnippetPage = () => {
  return (
    <section className="section__snippet">
      <HeaderSection title="Create new Snippet!" />
      <NewSnippet />
    </section>
  );
};

export default NewSnippetPage;
