import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { EmployeesignIn } from '../store/Actions/employeeAction';
import { asyncsignIn } from '../store/Actions/userAction';

const Login = ({ setlogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  // Selector to get authentication state from Redux store
  const auth = useSelector(state => state.user);
// console.log(auth.isAuth);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [studentLoginForm, setStudentLoginForm] = useState(true);

  const loginForm = (e) => {
    e.preventDefault(); // Prevent form submission

    if (studentLoginForm) {
      dispatch(asyncsignIn({ email, password }));
      setlogin(false)
 
    } else {
      dispatch(EmployeesignIn({ email, password }));
      setlogin(false)

    }
    navigate("/")
  };

  const changeFormToStudent = () => {
    setStudentLoginForm(true);
    setemail("");
    setpassword("");
  };

  const changeFormToEmployer = () => {
    setStudentLoginForm(false);
    setemail("");
    setpassword("");
  };



  return (
    <>
      <div className='w-full z-[999999999] absolute top-0 left-0 h-screen bg-[#0000004d] flex items-center justify-center'>
        <form className='w-[55vh] rounded h-[68vh] bg-white shadow-sm p-3' onSubmit={loginForm}>
          <IoMdClose onClick={() => setlogin((prev) => !prev)} className='block cursor-pointer text-zinc-400 text-[3.5vh] float-end' />
          <div className='flex mt-8 items-center cursor-pointer justify-center gap-1'>
            <h3
              onClick={changeFormToStudent}
              className={`text-[2.5vh] text-center font-medium ${studentLoginForm ? 'text-[#00A5EC] border-b-[2.2px] border-[#00A5EC]' : ''} w-[23vh] py-2`}
            >
              Student
            </h3>
            <h3
              onClick={changeFormToEmployer}
              className={`text-[2.5vh] text-center font-medium ${!studentLoginForm ? 'text-[#00A5EC] border-b-[2.2px] border-[#00A5EC]' : ''} w-[23vh] py-2`}
            >
              Employer
            </h3>
          </div>
          {studentLoginForm &&
            <div>
              <button className='flex items-center py-1 w-[46vh] m-auto border-[1px] font-medium border-zinc-300 rounded mt-3 text-zinc-600 justify-center'>
                <img className='w-[3.8vh] object-cover object-center' src="https://t4.ftcdn.net/jpg/03/08/54/37/240_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg" alt="" />
                Login With Google
              </button>
              <hr className='mt-4 w-[46vh] m-auto' />
              <h2 className='font-medium text-[2vh] text-center text-zinc-600'>OR</h2>
            </div>
          }
          <div className='flex flex-col items-center'>
            <div>
              <h2 className='font-medium text-zinc-700'>Email</h2>
              <input onChange={(e) => setemail(e.target.value)} value={email} name='email' className='py-[6px] mt-1 w-[46vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='aa@gmail.com' type="text" />
            </div>
            <div className='mt-4'>
              <h2 className='font-medium text-zinc-700'>Password</h2>
              <input onChange={(e) => setpassword(e.target.value)} value={password} name='password' className='py-[6px] mt-1 w-[46vh] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='password must be strong' type="password" />
            </div>
          </div>
          <Link className='m-5 float-end text-[#00A5EC] font-medium'>Forgot password?</Link>
          <button className='flex bg-[#00A5EC] items-center py-2 w-[46vh] m-auto border-[1px] font-medium border-zinc-300 rounded mt-3 text-white justify-center'>
            Login
          </button>
          <h2 className='mt-3 text-center'>New to Internshala? Register <span className='font-medium'>(<Link className='text-[#00A5EC]'>Student</Link> / <Link className='text-[#00A5EC]'>Company</Link>)</span></h2>
        </form>
      </div>
    </>
  );
};

export default Login;
