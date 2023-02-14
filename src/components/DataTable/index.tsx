import "./style.scss";

interface IformatCols {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
type p = {
  formatCols: { title: string; data: string }[];
  data: IformatCols[];
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
  // console.log("start=", indexStart, ", end=", indexEnd)
  return (
    <table className="data-table">
      <thead>
        <tr>
          {formatCols.map((element, index) => (
            <th key={"th-table-key-" + index} className="sorting">
              {element.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((ligne: IformatCols, iLigne) =>
          iLigne >= indexStart && iLigne < indexEnd ? (
            <tr key={"tr-table-key-" + iLigne}>
              {formatCols.map((col, iCol) => (
                <td key={"td-table-key-" + iCol}>
                  {ligne[col.data as keyof IformatCols]}
                </td>
              ))}
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
};
