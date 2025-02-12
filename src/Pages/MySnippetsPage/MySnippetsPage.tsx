import { useQuery } from "@tanstack/react-query";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import Pagination from "../../Widgets/Pagination/Pagination";
import "./mySnippetsPage.css";
import Loader from "../../Shared/Loader/Loader";
import SnippetsList from "../../Widgets/SnippetsList/SnippetsList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchUserSnippets } from "../../api/snippets/fetchUserSnippets";
import { useNavigate } from "react-router";
import { Button } from "ui-components_innowise";
import { useState } from "react";
import DotsLoader from "../../Shared/DotsLoader/DotsLoader";
import usePages from "../../hooks/usePages";

const MySnippetsPage = () => {
  const [page, setPage] = useState("1");

  const myId = useSelector((state: RootState) => state.userState.id);
  const navigate = useNavigate();

  const { error, isError, isSuccess, data, isPending, refetch, isFetching } =
    useQuery({
      queryFn: () => fetchUserSnippets(myId, page),
      queryKey: [`snippets/${myId}`],
      retry: 1,
    });

  usePages({ page, setPage, refetch });

  if (isPending) {
    return <Loader type="big" />;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/new_snippet");
  };

  return (
    <>
      <HeaderSection title="My Snippets" />
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

      {isSuccess &&
        (data.data.length ? (
          <SnippetsList
            classes={isFetching ? "snippet-list__load" : ""}
            dataObj={data.data}
          />
        ) : (
          <div className="empty">
            <p className="title no-snippets">You don't have any snippets!</p>
            <Button
              href={"/snippet/new"}
              classes="no-snippets-btn"
              children={"Create snippet"}
              size="large"
              variant="text"
              onClick={handleClick}
            />
          </div>
        ))}
    </>
  );
};

export default MySnippetsPage;
