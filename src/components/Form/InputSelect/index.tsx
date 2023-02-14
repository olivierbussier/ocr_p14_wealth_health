import "./style.scss"

type props = {
  name: string;
  text: string;
  items: { name: string; abbreviation: string }[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
};
export const InputSelect: React.FC<props> = ({ name, text, items, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <select id={name} name={name} onChange={onChange} className="item-select">
        {items.map((item, index) => (
          <option key={"select-" + name + "-" + index} value={item.abbreviation}>{item.name}</option>
        ))}
      </select>
    </>
  );
};
