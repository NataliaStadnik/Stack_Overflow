import "./snippetBody.css";

const SnippetBody = () => {
  return (
    <div className="snippet__body codebase">
      <div className="codebase__number">
        <span className="snippet-text codebase__text">1</span>
      </div>
      <div className="snippet-text code-text">
        <span className="codebase__text">const user = 1234;</span>
      </div>
    </div>
  );
};

export default SnippetBody;
