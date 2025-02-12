import { FC, useState } from "react";
import "./snippetBody.css";
import CodeEditor from "../../Widgets/CodeEditor/CodeEditor";

interface SnippetBodyProps {
  classes?: string;
  code?: string;
  forNewSnippet?: boolean;
  value?: string;
  setValue?: (a: string) => void;
  language?: string;
  readonly?: boolean;
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
  language,
  readonly,
}) => {
  // const codeArray: CodeObjectType = [];
  // code.split("\n").map((elem, index) => {
  //   const obj = {
  //     id: index,
  //     numString: index + 1,
  //     code: elem,
  //   };
  //   codeArray.push(obj);
  // });

  // console.log(value);
  // const [codeString, setCode] = useState(value);
  // console.log(codeString);

  return (
    <div className={`snippet__body codebase ${classes}`}>
      <CodeEditor
        readonly={readonly}
        code={value}
        setCode={setValue}
        language={language}
      />
    </div>

    // <div className={`snippet__body codebase ${classes}`}>
    //   <div className="codebase__number">
    //     {codeArray.map((elem) => (
    //       <code key={elem.numString} className="snippet-text codebase__text">
    //         {elem.numString}
    //       </code>
    //     ))}
    //   </div>
    //   <div className="snippet-text code-text">
    //     {codeArray.map((elem) => (
    //       <pre key={elem.id}>
    //         {forNewSnippet ? (
    //           <input
    //             type="text"
    //             className="code-input"
    //             value={value}
    //             onChange={(e) => setValue && setValue(e.target.value)}
    //           />
    //         ) : (
    //           <code className="codebase__text">{elem.code}</code>
    //         )}
    //       </pre>
    //     ))}
    //   </div>
    // </div>
  );
};

export default SnippetBody;
