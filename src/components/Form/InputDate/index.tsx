import "./style.scss"

type props = {
    name: string,
    text: React.ReactNode
}
export const InputDate: React.FC<props> = ({ name, text }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input className="item-input-date" name={name} id={name} type="date"></input>
    </>
  );
};
