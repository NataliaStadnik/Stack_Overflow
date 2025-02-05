import Snippet from "../Snippet/Snippet";
import "./snippetsList.css";

const arr = [1, 2, 3];

// interface SnippetsListProps {}

const SnippetsList = () => {
  return (
    <ul className="snippet-list">
      {arr.map((elem) => (
        <li key={elem} className="snippet">
          <Snippet />
        </li>
      ))}
    </ul>
  );
};

export default SnippetsList;
