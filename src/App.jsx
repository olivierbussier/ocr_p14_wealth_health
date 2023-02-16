import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { EmployeeList } from "./pages/EmployeeList";

import "./App.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee-list" element={<EmployeeList />} />
    </Routes>
  );
};
