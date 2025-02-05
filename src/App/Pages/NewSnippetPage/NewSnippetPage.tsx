import HeaderSection from "../../../Widgets/HeaderSection/HeaderSection";
import NewSnippet from "../../../Widgets/NewSnippet.tsx/NewSnippet";
import "./newSnippetPage.css";

const NewSnippetPage = () => {
  return (
    <>
      <HeaderSection title="Create new Snippet!" />
      <NewSnippet />
    </>
  );
};

export default NewSnippetPage;
