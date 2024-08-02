import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
  user: null,
  intern :null,
  isAuth: false,
  error: null,
  },
  reducers: {
    CreateUser: (state, action) => {
        state.user = action.payload;
        state.isAuth=state.user?.email ?  true : false
        
    },
    
    userSignIN: (state, action) => {
// console.log(action.payload);
      state.user = action.payload;
      console.log(state.user);
      state.isAuth=state.user?.email ?  true : false
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
      state.isAuth=state.user?.email ?  true : false

  },
  allIntern : (state, action) => {
    state.intern = action.payload; 
},
  },
 
   
})

// Action creators are generated for each case reducer function
export const {CreateUser,removeUser,signinerror,signuperror,userSignIN,cuurentStudent ,allIntern} = userSlice.actions

export default userSlice.reducer