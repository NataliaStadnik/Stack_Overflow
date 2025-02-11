import { FC } from "react";
import { AllDataSnippets } from "../../Pages/HomePage/typesSnippetComment";
import Snippet from "../Snippet/Snippet";
import "./snippetsList.css";

interface SnippetsListProps {
  dataObj: AllDataSnippets;
}

const SnippetsList: FC<SnippetsListProps> = ({ dataObj }) => {
  return (
    <ul className="snippet-list">
      {dataObj.map((elem) => (
        <li key={elem.id} className="snippet">
          <Snippet dataObj={elem} />
        </li>
      ))}
    </ul>
  );
};

export default SnippetsList;
