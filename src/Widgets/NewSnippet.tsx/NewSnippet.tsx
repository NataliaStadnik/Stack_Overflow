import { Button, Select } from "ui-components_innowise";
import "./newSnippet.css";
import SnippetBody from "../../Shared/SnippetBody/SnippetBody";

const options = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
];

const NewSnippet = () => {
  return (
    <form className="snippet-form">
      <div className="new-snippet">
        <h3 className="new-snippet__title">Language of your snippet:</h3>
        <Select classes="new-wrap" label="Select" options={options} />
      </div>
      <div className="new-snippet new-snippet__body">
        <h3 className="new-snippet__title code-title">Code of your snippet:</h3>
        <SnippetBody classes="new-snippet__code" />
      </div>
      <Button classes="new-snippet__btn" children={"Create snippet"} />
    </form>
  );
};

export default NewSnippet;
