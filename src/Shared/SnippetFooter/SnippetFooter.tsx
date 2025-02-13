import { Link, useLocation, useNavigate } from "react-router";
import Dislike from "../../svg/Dislike";
import Like from "../../svg/Like";
import ButtonSvg from "../ButtonSvg/ButtonSvg";
import "./snippetFooter.css";
import Message from "../../svg/Message";
import { FC, useState } from "react";
import useAuthNavigate from "../../hooks/useAuthNavigate";
import useLoginState from "../../hooks/useLoginState";
import { DataSnippet, OneMark } from "../../api/typesSnippetComment";
import { GetMarks } from "./getMarks";
import { useMutation } from "@tanstack/react-query";
import { postMark } from "../../api/snippets/postMark";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface SnippetFooterProps {
  to?: string;
  dataObj: DataSnippet;
}

const SnippetFooter: FC<SnippetFooterProps> = ({ to = "posts", dataObj }) => {
  const myId = useSelector((state: RootState) => state.userState.id);
  const path = useLocation();
  const authState = useLoginState();
  const navigate = useNavigate();
  const [href, setHref] = useState(to);
  useAuthNavigate(`${to}/${dataObj.id}`, setHref);

  const marksStatus = GetMarks(dataObj.marks, myId);
  const [like, setLike] = useState(marksStatus.like);
  const [dislike, setDisLike] = useState(marksStatus.dislike);
  const [status, setStatus] = useState(marksStatus.status);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (path.pathname.includes(`/posts`)) {
      e.preventDefault();
    }
  };

  function useInnerMutation(status: OneMark) {
    const mutation = useMutation({
      mutationFn: () => postMark(status, dataObj.id),
      onSuccess(data) {
        const marksStatus = GetMarks(data.marks, myId);
        setDisLike(marksStatus.dislike);
        setLike(marksStatus.like);
        setStatus(marksStatus.status);
      },
    });
    return mutation;
  }

  const LikeMutation = useInnerMutation("like");
  const DislikeMutation = useInnerMutation("dislike");
  const NoneMutation = useInnerMutation("none");

  const handleMark = (clickBTN: string) => {
    if (!authState) {
      navigate("/login");
      return;
    }
    if (clickBTN === status) {
      NoneMutation.mutate();
      return;
    }
    if (clickBTN === "like") {
      LikeMutation.mutate();
      return;
    }
    if (clickBTN === "dislike") {
      DislikeMutation.mutate();
      return;
    }
  };

  return (
    <div className="snippet__footer">
      <div className="snippet__likes">
        <ButtonSvg
          onClick={() => handleMark("like")}
          label={like}
          classes="likes-wrap snippet-text"
          svg={<Like classes="snippet__svg" />}
        />

        <ButtonSvg
          onClick={() => handleMark("dislike")}
          label={dislike}
          classes="likes-wrap snippet-text"
          svg={<Dislike classes="snippet__svg" />}
        />
      </div>

      <Link onClick={handleClick} to={href} className="snippet__feedback">
        <span className="snippet-text">{dataObj.comments?.length}</span>
        <Message classes="snippet__svg" />
      </Link>
    </div>
  );
};

export default SnippetFooter;
