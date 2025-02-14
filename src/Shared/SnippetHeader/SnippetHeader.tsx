import { FC } from "react";
import Code from "../../svg/Code";
import User from "../../svg/User";
import "./snippetHeader.css";
import { Button } from "ui-components_innowise";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { DataSnippet } from "../../api/typesSnippetComment";
import { useNavigate } from "react-router";

interface SnippetHeaderProps {
  dataObj: DataSnippet;
}

const SnippetHeader: FC<SnippetHeaderProps> = ({ dataObj }) => {
  const myId = useSelector((state: RootState) => state.userState.id);
  const navigate = useNavigate();

  const handleCLick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/snippet/edit/${dataObj.id}`);
  };

  return (
    <div className="snippet__header">
      <div className="snippet__user">
        <User classes="snippet__svg" color="#4e4e4e" />
        <span className="snippet-text">{dataObj.user.username}</span>
      </div>

      {myId === dataObj.user.id && (
        <Button
          href={`/edit_snippet/${dataObj.id}`}
          classes="comment__update"
          size="small"
          variant="text"
          children={"Edit snippet"}
          onClick={handleCLick}
        />
      )}

      <div className="snippet__language">
        <Code classes="snippet__svg" />
        <span className="snippet-text">{dataObj.language}</span>
      </div>
    </div>
  );
};

export default SnippetHeader;
