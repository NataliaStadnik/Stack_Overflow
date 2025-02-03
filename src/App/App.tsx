import { BrowserRouter } from "react-router";
import "./App.css";
import Layout from "./Layout";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>

    </>
  );
};

export default App;
