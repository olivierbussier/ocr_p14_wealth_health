import "./style.scss"

/**
 *
 * @param param0
 * @returns
 */
export const InputDate = ({ name, text }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input className="item-input-date" name={name} id={name} type="date"></input>
    </>
  );
};
