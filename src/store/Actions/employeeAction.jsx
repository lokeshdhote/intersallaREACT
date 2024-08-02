import {
    createEmployee,
    loginEmployee,
    currrentEmployee,
    removeemployee,
    createJob,
    createintern,
    readJob,readintern,



  } from "../Reducers/employeeSlice";
  import axios from "../../utils/axios";
import { data } from "autoprefixer";

  export const EmployeeSignUp =  (employee)=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.post("/api/employee/signup", employee)
      dispatch(createEmployee(data))
    } catch (error) {
      console.log(error);
    }
    
    
    
     }
     export const  EmployeesignIn =  (employee)=> async (dispatch, getState)=>{

        try {
          const {data} = await axios.post("/api/employee/signin", employee)
          dispatch(loginEmployee(data))
        } catch (error) {
          console.log(error);
        }
        
        
        
         }

         export const  asyncCurrrntEmployee =  ()=> async (dispatch, getState)=>{

          try {
            const {data} = await axios.get("/api/employee/home" )
            dispatch( currrentEmployee(data))
          } catch (error) {
            console.log(error);
          }
          
          
          
           }
           export const asyncremoveEmployee= ()=> async (dispatch,getState)=>{
            try {
              const {data}= await axios.get("/api/employee/signout" )
             dispatch( removeemployee(data))
            } catch (error) {
              console.log(error);
            }
           }
           export const asyncCreateIntern= (intern)=> async (dispatch,getState)=>{
            try {
            
              const {data}= await axios.post("/api/employee/internship/create",intern )
             dispatch( createintern(data))
            } catch (error) {
             console.log(error); 
            }
           }
           export const asyncReadIntern= ()=> async (dispatch,getState)=>{
            try {
            
              const {data}= await axios.get("/api/employee/internship/read" )
             dispatch( readintern(data))
            } catch (error) {
             console.log(error); 
            }
           }
           export const asyncCreateJob= (job)=> async (dispatch,getState)=>{
            try {
       
              const {data}= await axios.post("/api/employee/job/create",job )
             dispatch( createJob(data))
            } catch (error) {
              console.log(error);
            }
           }
           export const asyncReadJob= ()=> async (dispatch,getState)=>{
            try {
       
              const {data}= await axios.get("/api/employee/job/read" )
             dispatch( readJob(data))
            } catch (error) {
              console.log(error);
            }
           }


           



         
        


         