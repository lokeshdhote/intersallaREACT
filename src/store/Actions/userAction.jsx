import {
    CreateUser,
   userSignIN,
   cuurentStudent,
   removeUser,
   allIntern,



  } from "../Reducers/userSlice";
  import axios from "../../utils/axios";

 export const asyncsignup = (user) => async (dispatch, getState) => {
  console.log(user);
    try {
      console.log(user);
      const res =  await axios.post("/api/student/signup", user);
      dispatch(CreateUser(res));
      console.log(res);
    } catch (error) {
    //   dispatch(signuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
    }
 };
 export const  asyncsignIn =  (user)=> async (dispatch, getState)=>{

try {
  console.log(user);
  const {data} = await axios.post("/api/student/signin", user)
  console.log(data);
    dispatch(userSignIN(data))
} catch (error) {
  console.log(error);
}



 }
 export const  asynccuurentStudent =  ()=> async (dispatch, getState)=>{

  try {
    const {data} = await axios.post("api/student")
    console.log(data);
    dispatch(cuurentStudent(data))
  } catch (error) {
    console.log(error);
  }
  
  
  
   }
 export const  asyncRemove =  ()=> async (dispatch, getState)=>{

  try {
    const {data} = await axios.get("api/student/signout")
    console.log(data);
    dispatch(removeUser(data))
  } catch (error) {
    console.log(error);
  }
   }
 export const  asyncchangeAvtar =  (id,avtar)=> async (dispatch, getState)=>{

  try {
    const {data} = await axios.post(`api/student/avtar/${id}`,avtar)
   
  
  } catch (error) {
    console.log(error);
  }
   }

   export const  asyncintern =  ()=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.get("api/student/allinternship")
      console.log(data);
      console.log(data);
      dispatch(allIntern(data))
    } catch (error) {
      console.log(error);
    }
     }
   
   



 