import {
    resume,
    addEduction,
    editEduction,
    addaccom,



  } from "../Reducers/resumeSlice";
  import axios from "../../utils/axios";

  // resume 

  export const  asyncResume = ()=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.post("/resume/")
      dispatch(resume(data))
    } catch (error) {
      console.log(error);
    }
    
    
    
     }

     // education 

 export const AsyncaddEduction = (addEdu)=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.post("/resume/add-edu", addEdu)
      dispatch(addEduction(data))
    } catch (error) {
      console.log(error);
    }
    
    
    
     }
     export const AsynceditEduction = (id,editedu)=> async (dispatch, getState)=>{

      try {
     
        const {data} = await axios.post(`/resume/edit-edu/${id}`, editedu)
        dispatch(editEduction(data))
      } catch (error) {
        console.log(error);
      }
      
      
      
       }

       export const AsyncdeleteEduction = (id)=> async (dispatch, getState)=>{

        try {
       
          const {data} = await axios.post(`/resume/del-edu/${id}`)
        
        } catch (error) {
          console.log(error);
        }
        
        
        
         }



     // accomplishment

 export const Asyncaddaccomplishment = (addaccom)=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.post("/resume/addaccomplishment", addaccom)
    } catch (error) {
      console.log(error);
    }
    
     }

     export const Asynceditaccomplishment = (id,editaccomplishment)=> async (dispatch, getState)=>{

      try {
      
        const {data} = await axios.post(`/resume/editaccomplishment/${id}`, editaccomplishment)
        
      } catch (error) {
        console.log(error);
      }
      
      
      
       }

       export const Asyncdeleteaccomplishment = (id)=> async (dispatch, getState)=>{

        try {
       
          const {data} = await axios.post(`/resume/delaccomplishment/${id}`)
          
        } catch (error) {
          console.log(error);
        }
        
        
        
         }


   
  
    // intern      

export const Asyncaddintern = (addintern)=> async (dispatch, getState)=>{

  try {
    const {data} = await axios.post("/resume/addintern", addintern)
 
  } catch (error) {
    console.log(error);
  }
  
   }
   export const Asynceditintern = (id,editIntern)=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.post(`/resume/editintern/${id}`,editIntern)
    } catch (error) {
      console.log(error);
    }
    
    
    
     }
     export const Asyncdeleteintern = (id)=> async (dispatch, getState)=>{

      try {
     
        const {data} = await axios.post(`/resume/delintern/${id}`)
        
      } catch (error) {
        console.log(error);
      }
      
      
      
       }

     


   // project 

export const Asyncaddproject = (addproject)=> async (dispatch, getState)=>{

  try {
    const {data} = await axios.post("/resume/addproject", addproject)
 
  } catch (error) {
    console.log(error);
  }
  
   }
   export const Asynceditproject = (id,editproject)=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.post(`/resume/editproject/${id}`, editproject)
    } catch (error) {
      console.log(error);
    }
    
    
    
     }

     export const Asyncdeleteproject = (id)=> async (dispatch, getState)=>{

      try {
     
        const {data} = await axios.post(`/resume/delproject/${id}`)
        
      } catch (error) {
        console.log(error);
      }
      
      
      
       }



   //  skill

export const Asyncaddskill = (addskill)=> async (dispatch, getState)=>{

  try {
    const {data} = await axios.post("/resume/addskill", addskill)
 
  } catch (error) {
    console.log(error);
  }
  
   }
   export const Asynceditskill = (id,editskill)=> async (dispatch, getState)=>{

    try {
   
      const {data} = await axios.post(`/resume/editskill/${id}`, editskill)
    } catch (error) {
      console.log(error);
    }
    
    
    
     }
     export const Asyncdeleteskill = (id)=> async (dispatch, getState)=>{

      try {
     
        const {data} = await axios.post(`/resume/delskill/${id}`)
        
      } catch (error) {
        console.log(error);
      }
      
      
      
       }




// job

export const Asyncaddjob = (addjob)=> async (dispatch, getState)=>{

  try {
    console.log(addjob);
    const {data} = await axios.post("/resume/addjob", addjob)
 
  } catch (error) {
    console.log(error);
  }
  
   }
   export const Asynceditjob = (id,editjob)=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.post(`/resume/editjob/${id}`, editjob)
      
    } catch (error) {
      console.log(error);
    }
    
    
    
     }

     export const Asyncdeletejob = (id)=> async (dispatch, getState)=>{

      try {
     
        const {data} = await axios.post(`/resume/deljob/${id}`)
        
      } catch (error) {
        console.log(error);
      }
      
      
      
       }



     //   responsibility

export const Asyncaddresponsibility = (addresponsibility)=> async (dispatch, getState)=>{

  try {
    console.log(addresponsibility);
    const {data} = await axios.post("/resume/addresponsibility", addresponsibility)
 
  } catch (error) {
    console.log(error);
  }
  
   }
   export const Asynceditresponsibility = (id,editresponsibility)=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.post(`/resume/editresponsibility/${id}`, editresponsibility)
     
    } catch (error) {
      console.log(error);
    }
    
    
    
     }


     export const Asyncdeleteresponsibility = (id)=> async (dispatch, getState)=>{

      try {
     
        const {data} = await axios.post(`/resume/delresponsibility/${id}`)
        
      } catch (error) {
        console.log(error);
      }
      
      
      
       }

  
// course

   export const Asyncaddcourse = (addcourse)=> async (dispatch, getState)=>{

    try {
      const {data} = await axios.post("/resume/addcourse", addcourse)
   
    } catch (error) {
      console.log(error);
    }
    
     }

     export const Asynceditcourse = (id,editcourse)=> async (dispatch, getState)=>{

      try {
      
        const {data} = await axios.post(`/resume/editcourse/${id}`, editcourse)
        dispatch(editEduction(data))
      } catch (error) {
        console.log(error);
      }
      
      
      
       }
    
       export const Asyncdeletecourse = (id)=> async (dispatch, getState)=>{

        try {
       
          const {data} = await axios.post(`/resume/delcourse/${id}`)
          
        } catch (error) {
          console.log(error);
        }
        
        
        
         }
     



     // link

     export const Asyncaddlink = (addlink)=> async (dispatch, getState)=>{

      try {
        const {data} = await axios.post("/resume/addlink", addlink)
     
      } catch (error) {
        console.log(error);
      }
      
       }
       export const Asynceditlink = (id,editink)=> async (dispatch, getState)=>{

        try {
          const {data} = await axios.post(`/resume/editlink/${id}`, editlink)
          dispatch(editEduction(data))
        } catch (error) {
          console.log(error);
        }
        
        
        
         }


         export const Asyncdeletelink = (id)=> async (dispatch, getState)=>{

          try {
         
            const {data} = await axios.post(`/resume/dellink/${id}`)
            
          } catch (error) {
            console.log(error);
          }
          
          
          
           }
       
  
