import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Asynceditcourse } from "../../store/Actions/resumeAction";


export default function Editcourse(props) {
  const disptach = useDispatch()

    const {resume} = useSelector((state) => state.resume);

    const data = resume.courses[0]
    
    const [organization, setorganization] = useState(data?.organization || "");
    const [Trainingprogram, setTrainingprogram] = useState(data?.Trainingprogram || "");
    const [Location, setLocation] = useState(data?.Location || "");
    const [Startdate, setStartdate] = useState(data?.Startdate || "");
    const [enddate, setenddate] = useState(data?.enddate || "");
    const [Description, setDescription] = useState(data?.Description || "");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    disptach(Asynceditcourse(data.id,{ organization,Startdate,enddate,Trainingprogram,Location,Description}))
    // 
  };

  
  return (
    <>
      <>
      <div className=" z-[9] flex items-center  h-[110vh]  justify-center fixed  top-0 pt-8 w-full bg-black/30 ">
          <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="w-[40vw]  h-[90vh] py-[5%] pt-0 overflow-y-scroll ">
                <div className="min-h-[95vh]  mt-8 pb-5 pt-2 px-10 rounded-md w-[100%]  bg-white ">
                    <RiCloseLine
                    size={30}
                    onClick={props.onClose}
                    className="ml-[65vh]  cursor-pointer  "
                    color="#1c1c1c9d" // set custom `width` and `height`
                    />
                    <div className=" flex items-center justify-center text-[#272727e4]  w-full h-5 text-3xl font-bold">
                    <h1>Edit Training details</h1>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <h1 className=" mt-16 text-base font-semibold mb-2 text-[#272727c1]">
                        Training program
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        value={Trainingprogram}
                        onChange={(e)=>setTrainingprogram(e.target.value)}
                        name="Trainingprogram"
                        placeholder="eg. Analytics"
                        id=""
                        />
                    </div>
                    <div className="w-full">
                        <h1 className=" mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                        Organization
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={(e)=>setorganization(e.target.value)}
                        name="organization"
                        value={organization}
                        placeholder="eg. operations"
                        id=""
                        />
                    </div>
                   
                    <div className="w-full">
                        <h1 className=" mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                        Location
                        </h1>
                        <input
                        className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={(e)=>setLocation(e.target.value)}
                        name="Location"
                        value={Location}
                        placeholder="eg. Mumbai"
                        id=""
                        />
                    </div>
                    <div className=" mt-10 w-full flex gap-[3vh]">
                        <div className="w-[45%]  ">
                        <h1 className=" text-base font-semibold mb-2 text-[#272727c1]">
                            Start date
                        </h1>
                        <input
                            className="w-full pl-[2vh] text-base text-black outline-sky-300  h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                            type="date"
                            onChange={(e)=>setStartdate(e.target.value)}
                            name="Startdate"
                            value={Startdate}
                            id=""
                            placeholder="2020"
                        />{" "}
                        </div>
                        <div className="w-[45%]  ">
                        <h1 className=" text-base font-semibold mb-2 text-[#272727c1]">
                            End date
                        </h1>
                        <input
                            className="w-full pl-[2vh]  h-[5vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                            type="date"
                             onChange={(e)=>setenddate(e.target.value)}
                            name="enddate"
                        value={enddate} 
                            id=""
                            placeholder="2024"
                        />{" "}
                        </div>
                    </div>
                    
                    <div className="w-full">
                        <h1 className=" mt-3 text-base font-semibold mb-2 text-[#272727c1]">
                         Description
                        </h1>
                        <textarea
                        className="w-full pl-[2vh]  h-[19vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={(e)=>setDescription(e.target.value)}
                        value={Description}
                        name="Description"
                        placeholder="eg. AddDescription"
                        id=""
                        >
                        </textarea>
                    </div>
                   
                    <button
                        type="submit"
                        className="px-[4vh] py-[1vh]  text-base  mt-8 font-semibold rounded-md text-white bg-[#008BDC] "
                    >
                        Update
                    </button>
                    </form>
                </div>
          </div>
        </div>
      </>
    </>
  );
}
