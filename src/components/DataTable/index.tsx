import { useEffect, useState } from "react";
import "./style.scss";

type p = {
  formatCols: { title: string; data: string }[];
  data: any[];
  curPage: number;
  nbPerPage: number;
};
export const DataTable: React.FC<p> = ({
  formatCols,
  data,
  curPage,
  nbPerPage,
}) => {
  const indexStart = curPage * nbPerPage;
  const indexEnd = curPage * nbPerPage + nbPerPage;
  const colCount = formatCols.length;

  const [sortColumn, setSortColumn] = useState(formatCols[0].data);
  const [sortOrder, setSortOrder] = useState(false);
  const [dataSorted, setDataSorted] = useState(data);

  useEffect(() => {
    const orig = [...data];
    setDataSorted(
      orig.sort((a, b) => {
        // Sort is done on right column
        // console.log("a=",a, a[sortColumn],", b=",b, b[sortColumn], ', column=', sortColumn)
        return sortOrder
          ? a[sortColumn] < b[sortColumn]
            ? 1
            : -1
          : a[sortColumn] < b[sortColumn]
          ? -1
          : 1;
      })
    );
  }, [sortColumn, sortOrder, data]);

  const changeSortOrder = (e: React.MouseEvent<HTMLTableHeaderCellElement>) => {
    const a = e.currentTarget.attributes.getNamedItem("data-name");
    if (a) {
      if (a.value === sortColumn) {
        // No column change, inverse sort order
        setSortOrder(!sortOrder); // Set ascending by default
      } else {
        setSortColumn(a.value);
        setSortOrder(false); // Set ascending by default
      }
    }
  };
  return (
    <table className="data-table" role="grid">
      <thead>
        <tr>
          {formatCols.map((element, index) => {
            let cl;
            cl =
              element.data === sortColumn
                ? sortOrder
                  ? " descending"
                  : " ascending"
                : "";
            return (
              <th
                key={"th-table-key-" + index}
                data-name={element.data}
                className={"sorting" + cl}
                onClick={changeSortOrder}
              >
                {element.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {dataSorted.length ? (
          dataSorted.map((ligne, iLigne) =>
            iLigne >= indexStart && iLigne < indexEnd ? (
              <tr key={"tr-table-key-" + iLigne}>
                {formatCols.map((col, iCol) => (
                  <td key={"td-table-key-" + iCol}>{ligne[col.data]}</td>
                ))}
              </tr>
            ) : null
          )
        ) : (
          <tr>
            <td colSpan={colCount}>No matching record found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
