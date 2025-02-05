import Code from "../../svg/Code";
import User from "../../svg/User";
import "./snippetHeader.css";

const SnippetHeader = () => {
  return (
    <div className="snippet__header">
      <div className="snippet__user">
        <User classes="snippet__svg" color="#4e4e4e" />
        <span className="snippet-text">Mark123456</span>
      </div>
      <div className="snippet__language">
        <Code classes="snippet__svg" />
        <span className="snippet-text">JavaScript</span>
      </div>
    </div>
  );
};

export default SnippetHeader;
