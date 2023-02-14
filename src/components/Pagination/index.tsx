import "./style.scss";

type props = {
  nbItems: number;
  nbPerPage: number;
  curPage: number;
  onPageChange: CallableFunction;
};
export const Pagination: React.FC<props> = ({
  nbItems,
  nbPerPage,
  curPage,
  onPageChange,
}) => {
  let res = [];
  const nbPages = Math.ceil(nbItems / nbPerPage);

  if (curPage !== 0)
    res.push(<button key='btn-page-key-left' onClick={() => onPageChange(0)}>{"<<"}</button>);
  else
    res.push(<button key='btn-page-key-left' disabled>{"<<"}</button>);

  for (let i = 0; i < nbPages; i++) {
    if (i === curPage) {
      res.push(<button key={'btn-page-key-'+i} disabled>{i}</button>);
    } else res.push(<button key={'btn-page-key-'+i} onClick={() => onPageChange(i)}>{i}</button>);
  }

  if (curPage !== nbPages - 1)
    res.push(<button key='btn-page-key-right' onClick={() => onPageChange(nbPages-1)}>{">>"}</button>);
  else
    res.push(<button key='btn-page-key-right' disabled>{">>"}</button>);

    console.log('nbItems=', nbItems, ', nbPages=', nbPages, ', curPage=', curPage, ',   nbPerPage=', nbPerPage)
  return <div>{res}</div>;
};
