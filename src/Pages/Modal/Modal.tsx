import { FC } from "react";
import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import Close from "../../svg/Close";
import Register from "../../Widgets/Register/Register";
import "./modal.css";
import { createPortal } from "react-dom";

interface ModalProps {
  type: string;
}

const Modal: FC<ModalProps> = ({ type }) => {
  return createPortal(
    <div className="backdrop">
      <div className="modal-wrapper">
        <ButtonSvg
          classes="close-btn"
          svg={<Close classes="close-modal-svg" />}
        />
        <Register type={type} />
      </div>
    </div>,
    document.body
  );
};

export default Modal;
