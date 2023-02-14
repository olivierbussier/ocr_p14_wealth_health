import "./style.scss";

export const InputNumber = ({name,text}: {name: string; text: React.ReactNode}) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input type="number" id={name} name={name} />
    </>
  );
};
