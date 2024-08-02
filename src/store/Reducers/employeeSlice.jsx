import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'Employee',
  initialState:{
    employee: null,
    job:[],
    intern:[],
  isAuth: false,
  error: null,
  },
  reducers: {
    createEmployee:(state, action) => {
        state.employee = action.payload;
        state.isAuth=state.employee?.email ? true :false
    },
  loginEmployee:(state, action) => {
        state.employee = action.payload;
        state.isAuth=state.employee?.email ? true :false
    },
    currrentEmployee:(state, action) => {
      state.employee = action.payload;
      state.isAuth=state.employee?.email ? true :false


  },
  removeemployee:(state, action) => {
    state.employee = false
    state.isAuth=false
    state.error=null


},
createintern:(state, action) => {
  state.intern = action.payload
 


},
readintern:(state, action) => {
  state.intern = action.payload
 


},
createJob:(state, action) => {
  state.job = action.payload
 


},
readJob:(state, action) => {
  state.job = action.payload
 


},
  },
})

// Action creators are generated for each case reducer function
export const {createEmployee,loginEmployee,currrentEmployee,removeemployee, createJob,createintern,readJob,readintern } = employeeSlice.actions

export default employeeSlice.reducer