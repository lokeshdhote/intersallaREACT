import {
    CreateUser,
   
    userSignIN,

  } from "../Reducers/userSlice";
  import axios from "../../utils/axios";

 export const asyncsignup = (user) => async (dispatch, getState) => {

    try {
      const res =  await axios.post("/api/student/signup", user);
      dispatch(CreateUser(res));
    } catch (error) {
    //   dispatch(signuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
    }
 };
 export const  asyncsignIn =  (user)=> async (dispatch, getState)=>{

try {
  const {data} = await axios.post("/api/student/signin", user)
  dispatch(userSignIN(data))
} catch (error) {
  console.log(error);
}



 }