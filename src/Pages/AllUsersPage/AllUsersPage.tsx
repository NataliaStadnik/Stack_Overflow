import AccountInfo from "../../Widgets/AccountInfo/AccountInfo";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import "./allUsersPage.css";
import { useEffect } from "react";
import { instance } from "../../api/config";
import Pagination from "../../Widgets/Pagination/Pagination";

const AllUsersPage = () => {
  useEffect(() => {
    instance.get("/users").then((res) => {
      console.log(res.data.data);
    });

    instance.get("/users/3/statistic").then((res) => {
      console.log(res.data.data);
    });
  });

  return (
    <section className="users">
      <HeaderSection title={"All Users"} />
      <Pagination />
      <AccountInfo forPage="user" />
    </section>
  );
};

export default AllUsersPage;
