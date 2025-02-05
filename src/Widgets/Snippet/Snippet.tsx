import "./snippet.css";
import { FC } from "react";
import SnippetBody from "../../Shared/SnippetBody/SnippetBody";
import SnippetHeader from "../../Shared/SnippetHeader/SnippetHeader";
import SnippetFooter from "../../Shared/SnippetFooter/SnippetFooter";

interface SnippetProps {
  children?: JSX.Element;
}

const Snippet: FC<SnippetProps> = ({ children }) => {
  return (
    <>
      <article className="snippet__wrapper">
        <SnippetHeader />
        <SnippetBody />
        <SnippetFooter />
      </article>
      {children}
    </>
  );
};

export default Snippet;
