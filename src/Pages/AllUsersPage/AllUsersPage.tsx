import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import "./allUsersPage.css";
import Pagination from "../../Widgets/Pagination/Pagination";
import OneUser from "../../Widgets/OneUser/OneUser";
import { allUsersFetch } from "../../api/users/allUsersFetch";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { useState } from "react";
import DotsLoader from "../../Shared/DotsLoader/DotsLoader";
import usePages from "../../hooks/usePages";
import { useSearchParams } from "react-router";

const AllUsersPage = () => {
  const [params] = useSearchParams();
  const [page, setPage] = useState(params.get("page") || "1");

  const { error, isError, isSuccess, isPending, data, refetch, isFetching } =
    useQuery({
      queryFn: () => allUsersFetch(page),
      queryKey: ["users"],
      retry: 1,
    });

  usePages({ page, setPage, refetch });

  if (isPending) {
    return <Loader type="big" />;
  }

  return (
    <section className="all-users">
      <HeaderSection title={"All Users"} />

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
        <ul
          className={`all-users-list ${isFetching ? "snippet-list__load" : ""}`}
        >
          {data.data.map((elem) => (
            <OneUser key={elem.id} dataObj={elem} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default AllUsersPage;
