import PropTypes, { func } from "prop-types";
import "./style.scss";

/**
 *  Buton used in Pagination component
 *
 * @param {*} param0
 * @returns
 */
const Button = ({
  id,
  onClick,
  disabled = false,
  active,
  children,
  className,
}) => {
  return (
    <button
      className={className + (active ? " active" : "")}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

/**
 * Simple component Pagination could be used in conjonction with
 * DataTable component
 *
 * @param {object} props
 * @param {number} props.nbItems Total number of items to be displayed
 * @param {number} props.nbPerPage Number of items to display on one page
 * @param {number} props.curPage Current active page
 * @param {function} props.onPageChange callable hook to handle page change (parameter : requested page)
 * @returns {JSX.Element}
 */
export const Pagination = ({ nbItems, nbPerPage, curPage, onPageChange }) => {
  let res = [];
  const nbPages = Math.ceil(nbItems / nbPerPage);

  res.push(
    <Button
      className="left-btn"
      key="btn-page-key-left"
      disabled={curPage === 0}
      onClick={() => onPageChange(curPage - 1)}
    >
      {"<<"}
    </Button>
  );

  for (let i = 0; i < nbPages; i++) {
    res.push(
      <Button
        className="middle-btn"
        key={"btn-page-key-" + i}
        active={i === curPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Button>
    );
  }

  res.push(
    <Button
      className="right-btn"
      key="btn-page-key-right"
      disabled={nbPages === 0 || curPage === nbPages - 1}
      onClick={() => onPageChange(curPage + 1)}
    >
      {">>"}
    </Button>
  );

  return <div className="app-pagination">{res}</div>;
};
Pagination.propTypes = {
  nbItems: PropTypes.number,
  nbPerPage: PropTypes.number,
  curPage: PropTypes.number,
  onClick: PropTypes.func
}
