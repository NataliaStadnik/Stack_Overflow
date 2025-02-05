import { Link, useLocation } from "react-router";
import Dislike from "../../svg/Dislike";
import Like from "../../svg/Like";
import ButtonSvg from "../ButtonSvg/ButtonSvg";
import "./snippetFooter.css";
import Message from "../../svg/Message";

const SnippetFooter = () => {
  const path = useLocation().pathname;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (path === "/posts") {
      e.preventDefault();
    }
  };
  return (
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

      <Link onClick={handleClick} to={"posts"} className="snippet__feedback">
        <span className="snippet-text">0</span>
        <Message classes="snippet__svg" />
      </Link>
    </div>
  );
};

export default SnippetFooter;
