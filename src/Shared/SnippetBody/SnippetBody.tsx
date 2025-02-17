import { FC, useMemo } from "react";
import "./snippetBody.css";

interface SnippetBodyProps {
  value?: string;
}

type CodeObjectType =
  | Array<{
      numString: number;
      id: number;
      code: string;
    }>
  | undefined;

const SnippetBody: FC<SnippetBodyProps> = ({ value }) => {
  const codeArray: CodeObjectType = useMemo(() => {
    return value?.split("\n").map((elem, index) => {
      const obj = {
        id: index,
        numString: index + 1,
        code: elem,
      };
      return obj;
    });
  }, [value]);

  return (
    <ul className={`snippet__body codebase`}>
      {codeArray?.map(({ id, numString, code }) => (
        <li className="codebase__item" key={id}>
          <code className="codebase__text">{numString}</code>
          <div className="snippet-text code-text">
            <code key={id}>
              <pre>{code}</pre>
            </code>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SnippetBody;
