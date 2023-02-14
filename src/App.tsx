import { Route, Routes } from 'react-router';


import { Home } from './pages/Home';

import './App.css';
import { EmployeeList } from './pages/EmployeeList';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/employee-list' element={<EmployeeList />} />
    </Routes>
  );
}
