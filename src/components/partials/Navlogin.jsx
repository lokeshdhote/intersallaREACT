import React, { useState, useEffect } from 'react';
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import 'remixicon/fonts/remixicon.css';
import { Link, useLocation } from 'react-router-dom';
import { asyncRemove } from '../../store/Actions/userAction';
import { asyncremoveEmployee } from '../../store/Actions/employeeAction';

const Navlogin = ({ setlogin, setsearchbar }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isAuth = useSelector((state) => state.user.isAuth);
  const {user} = useSelector((state) => state.user)
  const {employee} = useSelector((state) => state.employee.isAuth);
  const isAuths = useSelector((state) => state.employee.isAuth);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    
  }, [isAuth, isAuths]);

  const logout = () => {
    setDropdownOpen(prev => !prev);
    dispatch(asyncRemove());
    dispatch(asyncremoveEmployee())
  }

  return (
    <div className='my-[5vw] flex items-center gap-[5vw] w-[80vh] justify-end'>
      {pathname !== "/student/resume" && (
        <div className='flex gap-3 mr-2 items-center'>
          <GoSearch onClick={() => setsearchbar(prev => !prev)} className='scale-[1.6] text-zinc-700 font-medium cursor-pointer' />
          <h2 className='text-zinc-700 text-[2.2vh] font-medium'>Search</h2>
        </div>
      )}
      {(!isAuth && !isAuths) ? (
        <>

          <Link
            onClick={() => setlogin(prev => !prev)}
            className='border-[#00A5EC] font-medium border-[1.5px] px-4 rounded py-1 text-[#00A5EC]'>
            Login
          </Link>
          <Link
            to={`/register/student`}
            className='bg-[#00A5EC] px-3 py-1 text-white font-medium rounded'>
            Candidate Sign-up
          </Link>
          <Link
            to={`/register/employee`}
            className='bg-[#00A5EC] text-white px-3 py-1 font-medium rounded'>
            Employer Sign-up
          </Link>
        </>
      ) : (
        <div className='relative'>
          <div onClick={() => setDropdownOpen(prev => !prev)} className='w-[2.7vw] h-[2.7vw] bg-stone-400 rounded-full flex items-center justify-center cursor-pointer'>
            <i className="ri-user-line text-xl"></i>
          </div>
          {dropdownOpen && (
            <div className='absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg z-10'>
              <div className='py-2'>
                <Link
                  onClick={() => setDropdownOpen(prev => !prev)}
                  to={`/profile`}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  Profile
                </Link>
                <Link
                  onClick={() => setDropdownOpen(prev => !prev)}
                  to={user ? "" :`/job/form`}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  {user ? "" : "PostJob" }
                </Link>
                <Link
                  onClick={() => setDropdownOpen(prev => !prev)}
                  to={user ? `/student/resume` : `/employee/form`}

                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  {user ? "Edit Resume" : "PostInternship" }
                </Link>
                <Link
                  onClick={logout}
                  to={`/`}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navlogin;
