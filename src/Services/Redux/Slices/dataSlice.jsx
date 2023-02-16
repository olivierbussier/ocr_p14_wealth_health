import { createSlice } from "@reduxjs/toolkit";

import {data} from './data.jsx'

const setInitialData = (nbItems) => {

  let initialData = data
  // for (let i=0; i < nbItems; i++) {
  //   initialData.push({
  //     firstName: i+' '+faker.name.firstName(),
  //     lastName:  faker.name.lastName(),
  //     startDate: faker.date.between('2010-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z').toDateString(),
  //     department: faker.commerce.department(),
  //     dateOfBirth: faker.date.between('1950-01-01T00:00:00.000Z', '1990-01-01T00:00:00.000Z').toDateString(),
  //     street: faker.address.street(),
  //     city: faker.address.cityName(),
  //     state: faker.address.state(),
  //     zipCode: faker.address.zipCode()
  //   })
  // }
  return initialData
}

export const dataSlice = createSlice({
  name: "dataEmployee",
  initialState: setInitialData(100),
  reducers: {
    addEmployee: (state, action) => {
      const employee = action.payload;
      state.push(employee);
    },
    removeEmployee: (state, payload) => {},
  },
});

export const { addEmployee, removeEmployee } = dataSlice.actions;
