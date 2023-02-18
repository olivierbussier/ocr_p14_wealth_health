import "./style.scss";

export const Modal = ({ isOpen, message, title, onClose }) => {
  const closeModalKey = 27;

  return isOpen ? (
    <div className="blocker-modal">
      <div className="card modal">
        <div className="header">{title}</div>
        {message}
        <div onClick={onClose} className="close-modal">Close</div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};
