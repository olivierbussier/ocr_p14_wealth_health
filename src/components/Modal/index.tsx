import { Link } from "react-router-dom";
import "./style.scss";

type props = {
  isOpen: boolean;
  message: string;
  onClose: Function;
};
export const Modal: React.FC<props> = ({ isOpen, message, onClose }) => {

  const closeModal: React.MouseEventHandler<HTMLDivElement>  = (e) => {
    onClose(e)
  }
  return isOpen ? (
    <div className="blocker-modal">
      <div className="modal">
        {message}
        <div onClick={closeModal} className="close-modal">Close</div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};
