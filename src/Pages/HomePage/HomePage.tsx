import "./homePage.css";
import Favicon from "../../svg/Favicon";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import Pagination from "../../Widgets/Pagination/Pagination";
import SnippetsList from "../../Widgets/SnippetsList/SnippetsList";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { useState } from "react";
import DotsLoader from "../../Shared/DotsLoader/DotsLoader";
import { fetchSnippetsComments } from "../../api/snippets/fetchSnippetsComments";
import usePages from "../../hooks/usePages";
import { useSearchParams } from "react-router";

const HomePage = () => {
  const [params] = useSearchParams();
  const [page, setPage] = useState(params.get("page") || "1");

  const { error, isError, isSuccess, data, isPending, refetch, isFetching } =
    useQuery({
      queryFn: () => fetchSnippetsComments(page),
      queryKey: ["snippets"],
      retry: 1,
    });

  usePages({ page, setPage, refetch });

  if (isPending) {
    return <Loader type="big" />;
  }

  return (
    <div className="section__home">
      <HeaderSection
        title="Welcom to Codelang!"
        children={<Favicon classes="title-favicon" color="#000" />}
      />
      <Pagination
        currentPage={page}
        setPage={setPage}
        maxPage={data?.meta.totalPages}
      />

      {isFetching && <DotsLoader />}

      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}

      {isSuccess && (
        <SnippetsList
          classes={isFetching ? "snippet-list__load" : ""}
          dataObj={data.data}
        />
      )}
    </div>
  );
};

export default HomePage;
