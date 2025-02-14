import { Button } from "ui-components_innowise";
import AllQuestions from "../../Widgets/AllQuestions/AllQuestions";
import Pagination from "../../Widgets/Pagination/Pagination";
import "./questionsPage.css";
import { useNavigate, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { useState } from "react";
import DotsLoader from "../../Shared/DotsLoader/DotsLoader";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import { getAllQuestions } from "../../api/questions/getAllQuestions";
import usePages from "../../hooks/usePages";

const QuestionsPage = () => {
  const [params] = useSearchParams();
  const [page, setPage] = useState(params.get("page") || "1");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questions/new");
  };

  const { error, isError, isSuccess, isPending, data, refetch, isFetching } =
    useQuery({
      queryFn: () => getAllQuestions(page),
      queryKey: ["questions"],
      enabled: false,
    });

  usePages({ page, setPage, refetch });

  if (isPending) {
    return <Loader type="big" />;
  }

  return (
    <>
      <HeaderSection title={"All Questions"} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        maxPage={data?.meta.totalPages}
      />

      {isFetching && <DotsLoader />}

      <Button
        onClick={handleClick}
        classes="ask-question"
        children={"Ask question"}
      />

      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}
      {isSuccess && (
        <AllQuestions
          dataObj={data.data}
          classes={isFetching ? "snippet-list__load" : ""}
        />
      )}
    </>
  );
};

export default QuestionsPage;
