import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
  user: null,
  isAuth: false,
  error: null,
  },
  reducers: {
    CreateUser: (state, action) => {
        state.user = action.payload;
        state.isAuth = true
        
    },
    
    userSignIN: (state, action) => {
// console.log(action.payload);
      state.user = action.payload;
      console.log(state.user);
      state.isAuth = true
  },
    removeUser: (state, action) => {
        state.user = null;
        state.isAuth = false;
        state.error = null; // Reset error when removing user
    },
    signuperror: (state, action) => {
        state.error = action.payload; 
    },
    signinerror: (state, action) => {
        state.error = action.payload; 
    },
    cuurentStudent:(state, action) => {
      state.user = action.payload;
      
      console.log(action.payload);
      state.isAuth=state.user.email?  true : false

  },
  },
 
   
})

// Action creators are generated for each case reducer function
export const {CreateUser,removeUser,signinerror,signuperror,userSignIN,cuurentStudent ,} = userSlice.actions

export default userSlice.reducer