import { createSlice } from '@reduxjs/toolkit'

export const internshipSlice = createSlice({
  name: 'internship',
  initialState:{
    internship: null,
  
  error: null,
  },
  reducers: {
    internship:(state, action) => {
        state.internship = action.payload;
       
        
    },
  
},
})

    // Action creators are generated for each case reducer function
export const {internship} = internshipSlice.actions

export default internshipSlice.reducer