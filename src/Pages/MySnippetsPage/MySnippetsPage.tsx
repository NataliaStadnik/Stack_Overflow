import { useQuery } from "@tanstack/react-query";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import Pagination from "../../Widgets/Pagination/Pagination";
import "./mySnippetsPage.css";
import Loader from "../../Shared/Loader/Loader";
import SnippetsList from "../../Widgets/SnippetsList/SnippetsList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchUserSnippets } from "./fetchUserSnippets";
import { useNavigate } from "react-router";
import { Button } from "ui-components_innowise";

const MySnippetsPage = () => {
  const myId = useSelector((state: RootState) => state.userState.id);
  const navigate = useNavigate();

  const { error, isError, isSuccess, data, isFetching } = useQuery({
    queryFn: () => fetchUserSnippets(myId),
    queryKey: [`snippets/${myId}`],
    retry: 1,
  });

  if (isFetching) {
    return <Loader type="big" />;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/new_snippet");
  };

  return (
    <>
      <HeaderSection title="My Snippets" />
      <Pagination />
      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}

      {isSuccess &&
        (data.data.length ? (
          <SnippetsList dataObj={data.data} />
        ) : (
          <div className="empty">
            <p className="title no-snippets">You don't have any snippets!</p>
            <Button
              href={"/new_snippet"}
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
