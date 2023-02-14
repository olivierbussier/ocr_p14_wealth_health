import { Container } from "../../components/Container";
import { useSelector } from "react-redux";

import "./style.scss";
import { DataTable } from "../../components/DataTable";
import { Link, NavLink } from "react-router-dom";
import { SetStateAction, useEffect, useState } from "react";
import { InputText } from "../../components/Form/InputText";
import { InputSelect } from "../../components/Form/InputSelect";
import { Pagination } from "../../components/Pagination";

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
const formatCols = [
  { title: "First Name", data: "firstName" },
  { title: "Last Name", data: "lastName" },
  { title: "Start Date", data: "startDate" },
  { title: "Department", data: "department" },
  { title: "Date of Birth", data: "dateOfBirth" },
  { title: "Street", data: "street" },
  { title: "City", data: "city" },
  { title: "State", data: "state" },
  { title: "Zip Code", data: "zipCode" },
];

export const EmployeeList = () => {
  const data = useSelector((state:{[x: string]: any}) => state.data);

  const [nbPerPage, setNbPerPage] = useState(10);
  const [curPage, setCurPage] = useState(0);
  const [search, setSearch] = useState("");
  const [findData, setFindData] = useState(data);

  const onSearchChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
  };

  const onNbItemsChange = (event: { target: { value: string; }; }) => {
    setNbPerPage(parseInt(event.target.value));
  };

  const onPageChange = (page: SetStateAction<number>) => {
    setCurPage(page);
  };

  useEffect(() => {
    const isIncluded = (str: string, subStr: string) => str.indexOf(subStr) !== -1;
    // Calc of items to display function to search text

    const newData = data.filter((element: { [x: string]: any; }) =>
      formatCols.reduce(
        (accu, currentElem) =>
          (accu = accu || isIncluded(element[currentElem.data], search)),
        false
      )
    );
    setFindData(newData);

    const nbPages = Math.ceil(newData.length / nbPerPage);
    if (curPage >= nbPages) {
      setCurPage(nbPages > 0 ? nbPages - 1 : 0);
    }
  }, [nbPerPage, curPage, search, data]);


  return (
    <Container>
      <h1>Current Employees</h1>
      <div className="head-data-table">
        <div className="nb-entries">
          <InputSelect
            name="nb-per-page"
            text="Show"
            items={[
              { name: "10", abbreviation: '10' },
              { name: "25", abbreviation: '25' },
              { name: "50", abbreviation: '50' },
              { name: "100", abbreviation: '100' },
            ]}
            onChange={onNbItemsChange}
          />

          <div>entries</div>
        </div>

        <div className="search">
          <InputText
            name="input-search"
            text="Search"
            onChange={onSearchChange}
          />
        </div>
      </div>
      <DataTable
        formatCols={formatCols}
        data={findData}
        curPage={curPage}
        nbPerPage={nbPerPage}
      />
      <Pagination
        nbItems={findData.length}
        nbPerPage={nbPerPage}
        curPage={curPage}
        onPageChange={onPageChange}
      />
      <Link className="link-button" to="/">Back to Home</Link>
    </Container>
  );
};
