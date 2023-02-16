import "./style.scss";

export const Modal = ({ isOpen, message, onClose }) => {

  const closeModal = (e) => {
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
