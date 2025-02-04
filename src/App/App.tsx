import { BrowserRouter } from "react-router";
import "./App.css";
import Layout from "./Layout";
import Modal from "../Widgets/Modal/Modal";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        {/* <Modal /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
