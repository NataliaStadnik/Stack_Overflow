import { Link, useLocation, useNavigate } from "react-router";
import Dislike from "../../svg/Dislike";
import Like from "../../svg/Like";
import ButtonSvg from "../ButtonSvg/ButtonSvg";
import "./snippetFooter.css";
import Message from "../../svg/Message";
import { FC, useState } from "react";
import useAuthNavigate from "../../hooks/useAuthNavigate";
import useLoginState from "../../hooks/useLoginState";
import { DataSnippet, OneMark } from "../../Pages/HomePage/typesSnippetComment";
import { useGetMarks } from "./useGetMarks";
import { useMutation } from "@tanstack/react-query";
import { postMark } from "./postMark";
import { queryCLient } from "../../api/queryClients";

interface SnippetFooterProps {
  to?: string;
  dataObj: DataSnippet;
}

const SnippetFooter: FC<SnippetFooterProps> = ({ to = "posts", dataObj }) => {
  const path = useLocation().pathname;
  const authState = useLoginState();
  const navigate = useNavigate();
  const [href, setHref] = useState(to);
  useAuthNavigate(to, setHref);
  const marksStatus = useGetMarks(dataObj.marks);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (path === "/posts") {
      e.preventDefault();
    }
  };

  function useInnerMutation(status: OneMark) {
    const mutation = useMutation({
      mutationFn: () => postMark(status, dataObj.id),
      onSuccess() {
        queryCLient.invalidateQueries({ queryKey: ["snippets"] });
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
    if (clickBTN === marksStatus.status) {
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
          label={marksStatus.like}
          classes="likes-wrap snippet-text"
          svg={<Like classes="snippet__svg" />}
        />

        <ButtonSvg
          onClick={() => handleMark("dislike")}
          label={marksStatus.dislike}
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
