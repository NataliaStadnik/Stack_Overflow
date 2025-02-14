import { FC } from "react";
import Snippet from "../Snippet/Snippet";
import "./snippetsList.css";
import { AllDataSnippets } from "../../api/typesSnippetComment";

interface SnippetsListProps {
  dataObj: AllDataSnippets;
  classes?: string;
}

const SnippetsList: FC<SnippetsListProps> = ({ dataObj, classes = "" }) => {
  return (
    <ul className={`snippet-list ${classes}`}>
      {dataObj.map((elem) => (
        <li key={elem.id} className="snippet">
          <Snippet dataObj={elem} />
        </li>
      ))}
    </ul>
  );
};

export default SnippetsList;
