import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import "./allUsersPage.css";
import Pagination from "../../Widgets/Pagination/Pagination";
import OneUser from "../../Widgets/OneUser/OneUser";
import { allUsersFetch } from "./allUsersFetch";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";

const AllUsersPage = () => {
  const { error, isError, isSuccess, isPending, data } = useQuery({
    queryFn: () => allUsersFetch(),
    queryKey: ["users"],
    retry: 1,
  });

  if (isPending) {
    return <Loader type="big" />;
  }

  return (
    <section className="all-users">
      <HeaderSection title={"All Users"} />
      <Pagination />
      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}
      {isSuccess && (
        <ul className="all-users-list">
          {data.data.map((elem) => (
            <OneUser key={elem.id} dataObj={elem} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default AllUsersPage;
