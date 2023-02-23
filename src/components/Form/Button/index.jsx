
import "./style.scss";

/**
 *
 * @param param0
 * @returns
 */
export const Button = ({ text, className=null }) => (
  <button className={className ? className : "button"}>{text}</button>
);
