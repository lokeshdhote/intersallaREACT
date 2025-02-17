import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AsyncaddEduction } from "../../store/Actions/resumeAction";
import { useNavigate } from "react-router-dom";


export default function education(props) {
  const dispatch = useDispatch()
const naviagate =useNavigate()

const [organization ,setorganization] = useState("")
const [startyear ,setstartyear] = useState("")
const [endyear ,setendyear] = useState("")
const [degree ,setdegree] = useState("")
const [branch ,setbranch] = useState("")
const [grade ,setgrade] = useState("")


const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(AsyncaddEduction({organization,startyear,endyear,degree,branch,grade}))
  
 
  };

  
  return (
    <>
      <>
      <div className=" z-10 flex items-center h-screen justify-center fixed pt-8 w-full bg-black/30 ">
          <div className="h-[80vh] pb-5 pt-2 px-10 rounded-md w-[30%]  bg-white ">
            <RiCloseLine
              size={30}
              onClick={props.onClose}
              className="ml-[50vh]  cursor-pointer  "
              color="#1c1c1c9d" // set custom `width` and `height`
            />
            <div className=" flex items-center justify-center text-[#272727e4]  w-full h-5 text-3xl font-bold">
              <h1>Add Education</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="w-full">
                <h1 className=" mt-16 text-base font-semibold mb-2 text-[#272727c1]">
                  College/Organization name
                </h1>
                <input
                  className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="text"
                  onChange={(e)=> setorganization(e.target.value)}
                  name="organization"
                  value={organization}
                  placeholder="eg. Hindu college"
                  id=""
                />
              </div>
              <div className=" mt-10 w-full flex gap-[3vh]">
                <div className="w-[45%]  ">
                  <h1 className=" text-base font-semibold mb-2 text-[#272727c1]">
                    Start Year
                  </h1>
                  <input
                  value={startyear}
                    className="w-full pl-[2vh] text-base text-black outline-sky-300  h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                    type="text"
                    onChange={(e)=> setstartyear(e.target.value)}
                    name="startyear"
                    id=""
                    placeholder="2020"
                  />{" "}
                </div>
                <div className="w-[45%]  ">
                  <h1 className=" text-base font-semibold mb-2 text-[#272727c1]">
                    End Year
                  </h1>
                  <input
                    className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                    type="text"
                    value={endyear}
                    onChange={(e)=> setendyear(e.target.value)}
                    name="endyear"
                    id=""
                    placeholder="2024"
                  />{" "}
                </div>
              </div>

              <div className="flex w-full">
                <div className="w-[50%]">
                  <h1 className=" mt-8 text-base font-semibold mb-2 text-[#272727c1]">
                    Degree
                  </h1>
                  <input
                  value={degree}
                    className="w-[90%] pl-[2vh] h-[5vh] text-[2vh] outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                    type="text"
                    name="degree"
                    id=""
                    onChange={(e)=> setdegree(e.target.value)}
                    placeholder="Btech,Mtech,etc"
                  />
                </div>
                <div className="w-[50%]">
                  <h1 className=" mt-8 text-base font-semibold mb-2 text-[#272727c1]">
                    branch
                  </h1>
                  <input
                    className="w-[90%] pl-[2vh]  h-[5vh] text-[2vh] outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                    type="text"
                    name="branch"
                    value={branch}
                    onChange={(e)=> setbranch(e.target.value)}
                    id=""
                    placeholder="IT, AIML, CSE , etc."
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <h1 className="  mt-10 text-base font-semibold mb-2 text-[#272727c1]">
                  CGPA/percentage
                </h1>
                <input
                  className=" lowercase  w-[90%] pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                  type="text"
                  value={grade}
                  onChange={(e)=> setgrade(e.target.value)}
                  name="grade"
                  id=""
                  placeholder="7.5 or 70%"
                />
              </div>
              <button
                type="submit"
                className="px-[4vh] py-[1vh]  text-base  mt-8 font-semibold rounded-md text-white bg-[#008BDC] "
              >A
                Update
              </button>
            </form>
          </div>
        </div>
      </>
    </>
  );
}
