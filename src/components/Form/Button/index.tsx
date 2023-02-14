
import "./style.scss";

type params = {
    text: string,
}
export const Button: React.FC<params> = ({ text }) => (
  <button className="button">{text}</button>
);
