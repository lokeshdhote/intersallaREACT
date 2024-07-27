import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Reducers/userSlice'
import employeeSlice from './Reducers/employeeSlice'
import resumeSlice from './Reducers/resumeSlice'
export default configureStore({
  reducer: {
    user:userSlice,
    employee:employeeSlice,
    resume:resumeSlice,

    
  },
})