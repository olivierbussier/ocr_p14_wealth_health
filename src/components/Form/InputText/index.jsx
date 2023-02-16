
import "./style.scss"

export const InputText = ({ name, text, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input className="item-input-text" type="text" id={name} name={name} onChange={onChange}/>
    </>
  );
};
