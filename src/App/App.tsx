import { BrowserRouter } from "react-router";
import "./App.css";
import Layout from "./Layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryCLient } from "../api/queryClients";
import { Provider } from "react-redux";
import { store } from "../store/store";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryCLient}>
        <Provider store={store}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
