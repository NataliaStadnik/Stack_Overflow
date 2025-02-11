import "./homePage.css";
import Favicon from "../../svg/Favicon";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import Pagination from "../../Widgets/Pagination/Pagination";
import SnippetsList from "../../Widgets/SnippetsList/SnippetsList";
import { useQuery } from "@tanstack/react-query";
import { fetchSnippetsComments } from "./api/fetchSnippetsComments";
import Loader from "../../Shared/Loader/Loader";

const HomePage = () => {
  const { error, isError, isSuccess, data, isFetching } = useQuery({
    queryFn: () => fetchSnippetsComments(),
    queryKey: ["snippets"],
    retry: 1,
  });

  if (isFetching) {
    return <Loader type="big" />;
  }
  return (
    <>
      <HeaderSection
        title="Welcom to Codelang!"
        children={<Favicon classes="title-favicon" color="#000" />}
      />
      <Pagination />
      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}

      {isSuccess && <SnippetsList dataObj={data.data} />}
    </>
  );
};

export default HomePage;
