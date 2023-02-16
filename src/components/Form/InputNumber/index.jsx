import "./style.scss";

export const InputNumber = ({name,text}) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input className="item-input-number" type="number" id={name} name={name} />
    </>
  );
};
