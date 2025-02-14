import { FC } from "react";
import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import Close from "../../svg/Close";
import Register from "../../Widgets/Register/Register";
import "./modal.css";
import { createPortal } from "react-dom";
import Login from "../../Widgets/Login/Login";
import { useNavigate } from "react-router";

interface ModalProps {
  type: string;
}

const Modal: FC<ModalProps> = ({ type }) => {
  const navigate = useNavigate();

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "backdrop") {
      navigate("/");
    }
  };

  return createPortal(
    <div id="backdrop" className="backdrop" onClick={(e) => handleClose(e)}>
      <div className="modal-wrapper">
        <ButtonSvg
          classes="close-btn"
          svg={<Close classes="close-modal-svg" />}
          onClick={() => navigate("/")}
        />
        {type === "register" ? <Register /> : <Login />}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
