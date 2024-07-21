import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'Employee',
  initialState:{
    Employee: null,
  isAuth: false,
  error: null,
  },
  reducers: {
    createEmployee:(state, action) => {
        state.Employee = action.payload;
    },
  loginEmployee:(state, action) => {
        state.LoginEmployee = action.payload;
    },
    currrentEmployee:(state, action) => {
      state.currentEmployee = action.payload;
  },
  },
})

// Action creators are generated for each case reducer function
export const {createEmployee,loginEmployee,currrentEmployee,} = employeeSlice.actions

export default employeeSlice.reducer