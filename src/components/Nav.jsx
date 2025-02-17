import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = ({Navleft,Navright}) => {
  const [popup,setpopup] =  useState(false)
  return (
    <>
     <div className='fixed left-0 z-40 top-0 w-full '>
        <div className='w-full  bg-white z-20  border-b-[1.7px] shadow-sm items-center justify-between flex h-[10vh] pl-[5vw] px-[7vh]'>
            <div className='navleft flex items-center max-sm:justify-between  gap-[6vh]'>
            <Link  to={"/"} ><img className='w-[15.5vh] max-sm:absolute max-sm:left-8  object-cover object-center' src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png" alt="" /></Link>
            <Link onClick={()=>setpopup((prev)=>!prev)} className='bg-[#00A5EC] absolute px-3 text-white font-medium py-2 rounded-md right-10 lg:hidden'>Register</Link>
            <div className='max-sm:hidden'>
            {Navright}
            </div>
            </div>
            <div className='navright h-full flex items-center max-sm:hidden '>
              {Navleft}
            </div>
          </div>
          <div   className={`w-[22vh]  ${popup ? 'block' : 'hidden'} z-50 lg:hidden bottom-[-140%] absolute right-3 h-[14vh] font-medium items-start pl-5 gap-2 pt-3 flex flex-col shadow-lg shadow-[#c3c2c2] bg-white `}>
            <Link to={ `/register/student`}>As a Student</Link>
            <Link to={`/register/employee`}>As a Employer</Link>
          </div>
     </div>
    </>
  )
}

export default Nav
