import { FC } from "react";
import Code from "../../svg/Code";
import User from "../../svg/User";
import "./snippetHeader.css";

interface SnippetHeaderProps {
  username: string;
  language: string;
}

const SnippetHeader: FC<SnippetHeaderProps> = ({ username, language }) => {
  return (
    <div className="snippet__header">
      <div className="snippet__user">
        <User classes="snippet__svg" color="#4e4e4e" />
        <span className="snippet-text">{username}</span>
      </div>
      <div className="snippet__language">
        <Code classes="snippet__svg" />
        <span className="snippet-text">{language}</span>
      </div>
    </div>
  );
};

export default SnippetHeader;
