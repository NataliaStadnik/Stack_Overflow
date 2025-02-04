import "./homePage.css";
import Favicon from "../../../svg/Favicon";
import HeaderSection from "../../../Widgets/HeaderSection/HeaderSection";
import Pagination from "../../../Widgets/Pagination/Pagination";
import SnippetsList from "../../../Widgets/SnippetsList/SnippetsList";

const HomePage = () => {
  return (
    <>
      <HeaderSection
        title="Welcom to Codelang!"
        children={<Favicon classes="title-favicon" color="#000" />}
      />
      <Pagination />
      <SnippetsList />
    </>
  );
};

export default HomePage;
