import "./style.scss";
/**
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
 */
type propsButton = {
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  active?: boolean,
  role?: string;
  children: React.ReactNode;
  className: string
};
const Button: React.FC<propsButton> = ({
  id,
  onClick,
  disabled=false,
  active,
  children,
  className
}) => {
  return (
      <button className={className+(active?" active":'')} id={id} disabled={disabled} onClick={onClick}>{children}</button>
  );
};
type propsPagination = {
  nbItems: number;
  nbPerPage: number;
  curPage: number;
  onPageChange: CallableFunction;
};
export const Pagination: React.FC<propsPagination> = ({
  nbItems,
  nbPerPage,
  curPage,
  onPageChange,
}) => {
  let res = [];
  const nbPages = Math.ceil(nbItems / nbPerPage);

  res.push(<Button className="left-btn" key="btn-page-key-left" disabled={curPage === 0} onClick={() => onPageChange(curPage - 1)}>{"<<"}</Button>);

  for (let i = 0; i < nbPages; i++) {
    res.push(<Button className="middle-btn" key={"btn-page-key-" + i} active={i === curPage} onClick={() => onPageChange(i)}>{i}</Button>);
  }

  res.push(<Button className="right-btn" key="btn-page-key-right" disabled={nbPages === 0 || curPage === nbPages - 1} onClick={() => onPageChange(curPage + 1)}>{">>"}</Button>);

  return (
    <div className="app-pagination">
      {res}
    </div>
  );
};
