import "./snippet.css";
import { FC } from "react";
import SnippetBody from "../../Shared/SnippetBody/SnippetBody";
import SnippetHeader from "../../Shared/SnippetHeader/SnippetHeader";
import SnippetFooter from "../../Shared/SnippetFooter/SnippetFooter";
import { DataSnippet } from "../../api/typesSnippetComment";

interface SnippetProps {
  children?: JSX.Element;
  dataObj: DataSnippet;
}

const Snippet: FC<SnippetProps> = ({ children, dataObj }) => {
  return (
    <>
      <article className="snippet__wrapper">
        <SnippetHeader dataObj={dataObj} />
        <SnippetBody value={dataObj.code} />
        <SnippetFooter dataObj={dataObj} />
      </article>
      {children}
    </>
  );
};

export default Snippet;
