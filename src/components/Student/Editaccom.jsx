import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Asynceditaccomplishment } from "../../store/Actions/resumeAction";


export default function Editaccom(props) {
  const disptach = useDispatch()

  const {resume} = useSelector((state) => state.resume);

const data = resume.accomplishments[0]

  const [ Additionaldetails, setAdditionaldetails] = useState(data?.Additionaldetails ||"")
  console.log(Additionaldetails);
  const handleSubmit = async (e) => {
    e.preventDefault();
    disptach(Asynceditaccomplishment(data.id, {Additionaldetails}))
 
  };

  
  return (
    <>
      <>
      <div className=" z-[9] flex items-center  h-[110vh]  justify-center fixed  top-0 pt-8 w-full bg-black/30 ">
          <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="w-[40vw]  h-[90vh] py-[5%] pt-0 overflow-y-scroll ">
                <div className="min-h-[60vh]  mt-8 pb-5 pt-2 px-10 rounded-md w-[100%]  bg-white ">
                    <RiCloseLine
                    size={30}
                    onClick={props.onClose}
                    className="ml-[65vh]  cursor-pointer  "
                    color="#1c1c1c9d" // set custom `width` and `height`
                    />
                    <div className=" flex items-center justify-center text-[#272727e4]  w-full h-5 text-xl font-bold">
                    <h1> Edit Additional details</h1>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                    
                    <div className="w-full">
                        <textarea
                        className="w-full pl-[2vh] mt-3 h-[30vh] text-base outline-sky-300   text-black border-[1px] border-[#27272748] p-2 rounded-md"
                        type="text"
                        onChange={(e)=>setAdditionaldetails(e.target.value)}
                        name="Additionaldetails"
                        value={Additionaldetails}
                        placeholder="eg. Addaccomplishments"
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
