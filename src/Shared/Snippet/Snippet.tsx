import { Link } from "react-router";
import Code from "../../svg/Code";
import Dislike from "../../svg/Dislike";
import Like from "../../svg/Like";
import Message from "../../svg/Message";
import User from "../../svg/User";
import ButtonSvg from "../ButtonSvg/ButtonSvg";
import "./snippet.css";

// interface Snippet {

// }

const Snippet = () => {
  return (
    <li className="snippet snippet__wrapper">
      <article>
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
        <div className="snippet__body codebase">
          <div className="codebase__number">
            <span className="snippet-text codebase__text">1</span>
          </div>
          <div className="snippet-text code-text">
            <span className="codebase__text">const user = 1234;</span>
          </div>
        </div>
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
    </li>
  );
};

export default Snippet;
