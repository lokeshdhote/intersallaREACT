import {
    createEmployee,
    loginEmployee,
    currrentEmployee,


  } from "../Reducers/employeeSlice";
  import axios from "../../utils/axios";

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
        


         