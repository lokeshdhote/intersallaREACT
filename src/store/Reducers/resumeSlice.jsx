import { createSlice } from '@reduxjs/toolkit'

export const resumeSlice = createSlice({
  name: 'resume',
  initialState:{
    resume: null,
  
  error: null,
  },
  reducers: {
    resume:(state, action) => {
        state.resume = action.payload;
       
        
    },
addEduction:(state, action) => {
    state.addEdu = action.payload;
    
   
    
},
editEduction:(state, action) => {
    state.editEdu = action.payload;
 
    
},
addaccom:(state, action) => {
  state.addaccom = action.payload;

  
},

   
  },
})

// Action creators are generated for each case reducer function
export const {resume,addEduction,editEduction,addaccom,} = resumeSlice.actions

export default resumeSlice.reducer