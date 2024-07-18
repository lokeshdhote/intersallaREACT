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
        
    },
    
    userSignIN: (state, action) => {
      state.user = action.payload;
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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})

// Action creators are generated for each case reducer function
export const {CreateUser,removeUser,signinerror,signuperror,userSignIN} = userSlice.actions

export default userSlice.reducer