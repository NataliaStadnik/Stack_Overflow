import { Link } from "react-router";
import Code from "../../svg/Code";
import Dislike from "../../svg/Dislike";
import Like from "../../svg/Like";
import Message from "../../svg/Message";
import User from "../../svg/User";
import ButtonSvg from "../ButtonSvg/ButtonSvg";
import "./snippet.css";
import SnippetBody from "../SnippetBody/SnippetBody";
import { FC } from "react";

interface SnippetProps {
  children?: JSX.Element;
}

const Snippet: FC<SnippetProps> = ({ children }) => {
  return (
    <li className="snippet">
      <article className="snippet__wrapper">
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
        <SnippetBody />
        <div className="snippet__footer">
          <div className="snippet__likes">
            <ButtonSvg
              label="1"
              classes="likes-wrap snippet-text"
              svg={<Like classes="snippet__svg" />}
            />

            <ButtonSvg
              label="1"
              classes="likes-wrap snippet-text"
              svg={<Dislike classes="snippet__svg" />}
            />
          </div>

          <Link to={""} className="snippet__feedback">
            <span className="snippet-text">0</span>
            <Message classes="snippet__svg" />
          </Link>
        </div>
      </article>
      {children}
    </li>
  );
};

export default Snippet;
