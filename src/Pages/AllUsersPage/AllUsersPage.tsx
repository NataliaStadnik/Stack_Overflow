import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import "./allUsersPage.css";
import Pagination from "../../Widgets/Pagination/Pagination";
import OneUser from "../../Widgets/OneUser/OneUser";
import { allUsersFetch } from "../../api/users/allUsersFetch";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import DotsLoader from "../../Shared/DotsLoader/DotsLoader";

const AllUsersPage = () => {
  const [page, setPage] = useState("1");
  const [, setSearchParams] = useSearchParams();

  const { error, isError, isSuccess, isPending, data, refetch, isFetching } =
    useQuery({
      queryFn: () => allUsersFetch(page),
      queryKey: ["users"],
      retry: 1,
    });

  useEffect(() => {
    refetch();
    setSearchParams({ page: page });
  }, [page]);

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
