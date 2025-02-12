import "./snippet.css";
import { FC, useState } from "react";
import SnippetBody from "../../Shared/SnippetBody/SnippetBody";
import SnippetHeader from "../../Shared/SnippetHeader/SnippetHeader";
import SnippetFooter from "../../Shared/SnippetFooter/SnippetFooter";
import { DataSnippet } from "../../api/typesSnippetComment";
import CodeEditor from "../CodeEditor/CodeEditor";

interface SnippetProps {
  children?: JSX.Element;
  dataObj: DataSnippet;
}

const Snippet: FC<SnippetProps> = ({ children, dataObj }) => {
  const [code, setCode] = useState(dataObj.code);

  return (
    <>
      <article className="snippet__wrapper">
        <SnippetHeader dataObj={dataObj} />
        <CodeEditor code={code} setCode={setCode} />
        {/* <SnippetBody code={dataObj.code} /> */}
        <SnippetFooter dataObj={dataObj} />
      </article>
      {children}
    </>
  );
};

export default Snippet;
