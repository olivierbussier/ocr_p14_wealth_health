import "./style.scss"

export const InputSelect = ({ name, text, items, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <select id={name} name={name} onChange={onChange} className="item-select">
        {items.map((item, index) => (
          <option key={"select-" + name + "-" + index} value={item.value}>{item.name}</option>
        ))}
      </select>
    </>
  );
};
