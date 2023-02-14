
import "./style.scss"

type props = {
  name: string;
  text: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
};
export const InputText: React.FC<props> = ({ name, text, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input type="text" id={name} name={name} onChange={onChange}/>
    </>
  );
};
