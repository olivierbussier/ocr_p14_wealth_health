
import "./style.scss"

/**
 *
 * @param {*} param0
 * @returns
 */
export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};


export const Card = ({maxWidth=null, children}) => {
  return (
    <div className="card" style={{maxWidth: maxWidth}}>{children}</div>
  )
}