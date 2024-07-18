import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Reducers/userSlice'
import employeeSlice from './Reducers/employeeSlice'
export default configureStore({
  reducer: {
    user:userSlice,
    employee:employeeSlice,

    
  },
})