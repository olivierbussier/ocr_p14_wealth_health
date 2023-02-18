import { Container } from "../../components/Container";
import { useSelector } from "react-redux";

import "./style.scss";
import { DataTable } from "../../components/DataTable";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { InputText } from "../../components/Form/InputText";
import { InputSelect } from "../../components/Form/InputSelect";
import { Pagination } from "../../components/Pagination";

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

/**
 * This page is used to display table of all current employees
 *
 * @returns
 */
export const EmployeeList = () => {
  const data = useSelector((state) => state.data);

  const [nbPerPage, setNbPerPage] = useState(10);
  const [curPage, setCurPage] = useState(0);
  const [search, setSearch] = useState("");
  const [findData, setFindData] = useState(data);

  // When the search field is updated
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // When the number of items per page change
  const onNbItemsChange = (event) => {
    setNbPerPage(parseInt(event.target.value));
  };

  // When the page number change
  const onPageChange = (page) => {
    setCurPage(page);
  };

  // In order to apply all changes (search or page or number of items per page)
  // We use a hook with all dependencies
  useEffect(() => {
    const isIncluded = (str, subStr) => str.indexOf(subStr) !== -1;
    // Calc of items to display function to search text

    const newData = data.filter((element) =>
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
              { name: "10", value: "10" },
              { name: "25", value: "25" },
              { name: "50", value: "50" },
              { name: "100", value: "100" },
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
      <Link className="link-button" to="/">
        Back to Home
      </Link>
    </Container>
  );
};