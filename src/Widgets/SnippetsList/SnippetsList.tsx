import "./snippetsList.css";
import Snippet from "../../Shared/Snippet/Snippet";

const arr = [1, 2, 3];

// interface SnippetsListProps {}

const SnippetsList = () => {
  return (
    <ul className="snippet-list">
      {arr.map((elem) => (
        <Snippet key={elem} />
      ))}
    </ul>
  );
};

export default SnippetsList;
