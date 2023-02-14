import "./style.scss"

type props = {
  children: React.ReactNode,
  legend?: string
};
export const FieldSet: React.FC<props> = ({ children, legend }) => {
  return <fieldset className="address">
    {legend ? <legend>{legend}</legend> : null}
    {children}</fieldset>;
};
