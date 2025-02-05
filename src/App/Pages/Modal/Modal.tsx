import ButtonSvg from "../../../Shared/ButtonSvg/ButtonSvg";
import Close from "../../../svg/Close";
import Register from "../../../Widgets/Register/Register";
import "./modal.css";

const Modal = () => {
  return (
    <div className="backdrop">
      <div className="modal-wrapper">
        <ButtonSvg
          classes="close-btn"
          svg={<Close classes="close-modal-svg" />}
        />
        {/* <Register type={"register"} /> */}
        <Register type={"login"} />
      </div>
    </div>
  );
};

export default Modal;
