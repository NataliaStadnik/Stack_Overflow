import { FC } from "react";
import "./snippetBody.css";

interface SnippetBodyProps {
  classes?: string;
  code?: string;
  forNewSnippet?: boolean;
  value?: string;
  setValue?: (a: string) => void;
}

type CodeObjectType = Array<{
  numString: number;
  code?: string;
  id: number;
}>;

const SnippetBody: FC<SnippetBodyProps> = ({
  classes = "",
  code = "",
  forNewSnippet = false,
  value,
  setValue,
}) => {
  const codeArray: CodeObjectType = [];
  code.split("\n").map((elem, index) => {
    const obj = {
      id: index,
      numString: index + 1,
      code: elem,
    };
    codeArray.push(obj);
  });

  return (
    <div className={`snippet__body codebase ${classes}`}>
      <div className="codebase__number">
        {codeArray.map((elem) => (
          <code key={elem.numString} className="snippet-text codebase__text">
            {elem.numString}
          </code>
        ))}
      </div>

      <div className="snippet-text code-text">
        {codeArray.map((elem) => (
          <pre key={elem.id}>
            {forNewSnippet ? (
              <input
                type="text"
                className="code-input"
                value={value}
                onChange={(e) => setValue && setValue(e.target.value)}
              />
            ) : (
              <code className="codebase__text">{elem.code}</code>
            )}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default SnippetBody;
