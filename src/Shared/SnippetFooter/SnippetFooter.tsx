import { Link, useLocation, useNavigate } from "react-router";
import Dislike from "../../svg/Dislike";
import Like from "../../svg/Like";
import ButtonSvg from "../ButtonSvg/ButtonSvg";
import "./snippetFooter.css";
import Message from "../../svg/Message";
import { useState } from "react";
import useAuthNavigate from "../../hooks/useAuthNavigate";
import useLoginState from "../../hooks/useLoginState";

const SnippetFooter = ({ to = "posts" }) => {
  const path = useLocation().pathname;
  const authState = useLoginState();
  const navigate = useNavigate();
  const [href, setHref] = useState(to);
  useAuthNavigate(to, setHref);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (path === "/posts") {
      e.preventDefault();
    }
  };

  const btnClick = () => {
    if (!authState) {
      navigate("/login");
    }
  };

  return (
    <div className="snippet__footer">
      <div className="snippet__likes">
        <ButtonSvg
          onClick={btnClick}
          label="1"
          classes="likes-wrap snippet-text"
          svg={<Like classes="snippet__svg" />}
        />

        <ButtonSvg
          onClick={btnClick}
          label="1"
          classes="likes-wrap snippet-text"
          svg={<Dislike classes="snippet__svg" />}
        />
      </div>

      <Link onClick={handleClick} to={href} className="snippet__feedback">
        <span className="snippet-text">0</span>
        <Message classes="snippet__svg" />
      </Link>
    </div>
  );
};

export default SnippetFooter;
