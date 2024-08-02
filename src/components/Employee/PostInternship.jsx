import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncCreateIntern } from '../../store/Actions/employeeAction';
import { useNavigate } from 'react-router-dom';

const PostInternship = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [Profile, setProfile] = useState("");
  const [skill, setSkill] = useState("");
  const [internshiptype, setinternshiptype] = useState("");
  const [internshiptime, setInternshipTime] = useState("");
  const [openings, setOpenings] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [duration, setDuration] = useState("");
  const [stipend, setStipend] = useState("");
  const [perks, setPerks] = useState("");
  const [preferences, setPreferences] = useState("");
  const [assessments, setAssessments] = useState("");
const [city ,setcity ] = useState("")
  console.log( Profile,
    skill,
    responsibility,
    to,
    from,
    openings,
    internshiptime,
    internshiptype,
    perks,
    preferences,
    assessments,
    stipend,
    duration);
  const formHandle = (e) => {
    e.preventDefault();
    dispatch(asyncCreateIntern({
      Profile,
      skill,
      responsibility,
      to,
      from,
      openings,
      internshiptime,
      internshiptype,
      perks,
      preferences,
      assessments,
      stipend,
      duration,city
    }));
    navigate("/")
  };

  return (
    <>
      <div className='mt-[8%] w-[50%] m-auto'>
        <h2 className='text-2xl font-bold mb-2'>Internship details</h2>
        <form className='border rounded min-h-[100vh] relative mb-3 p-5' onSubmit={formHandle}>
          <div className='w-full'>
            <h2 className='font-medium text-zinc-700'>Internship profile</h2>
            <input
              value={Profile}
              onChange={(e) => setProfile(e.target.value)}
              className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300'
              placeholder='e.g. software development'
              type="text"
            />
          </div>
          <div className='w-full mt-3'>
            <h2 className='font-medium text-zinc-700'>Skills required</h2>
            <input
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300'
              placeholder='e.g. java'
              type="text"
            />
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Select Internship Type</h2>
            <div className="space-y-2 flex items-baseline gap-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="internship"
                  value="In office"
                  checked={internshiptype === 'In office'}
                  onChange={(e) => setinternshiptype(e.target.value)}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">In office</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="internship"
                  value="Hybrid"
                  checked={internshiptype === 'Hybrid'}
                  onChange={(e) => setinternshiptype(e.target.value)}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Hybrid</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="internship"
                  value="Remote"
                  checked={internshiptype === 'Remote'}
                  onChange={(e) => setinternshiptype(e.target.value)}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Remote</span>
              </label>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Part-time/Full-time</h2>
            <div className="space-y-2 flex items-baseline gap-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="time"
                  value="Part-time"
                  checked={internshiptime === 'Part-time'}
                  onChange={(e) => setInternshipTime(e.target.value)}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Part-time</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="time"
                  value="Full-time"
                  checked={internshiptime === 'Full-time'}
                  onChange={(e) => setInternshipTime(e.target.value)}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Full-time</span>
              </label>
            </div>
          </div>
          <div className='w-full'>
                          <h2 className='font-medium text-zinc-700'>City</h2>
                            <input onChange={(e)=>setcity(e.target.value)} value={city} className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300' placeholder='city' name='city' type="text" />
                       </div>
          <div className='w-full mt-3'>
            <h2 className='font-medium text-zinc-700'>Number of openings</h2>
            <input
              onChange={(e) => setOpenings(e.target.value)}
              className='py-[8px] mt-1 w-full rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300'
              placeholder='e.g. 4'
              type="text"
            />
          </div>
          <div className="mt-10 w-full flex gap-[3vh]">
            <div className="w-[45%]">
              <h1 className="text-base font-semibold mb-2 text-[#272727c1]">Start date</h1>
              <input
                className="w-full pl-[2vh] text-base text-black outline-sky-300 h-[5vh] border-[1px] border-[#27272748] p-2 rounded-md"
                type="date"
                name="startyear"
                onChange={(e) => setFrom(e.target.value)}
                placeholder="2020"
              />
            </div>
            <div className="w-[45%]">
              <h1 className="text-base font-semibold mb-2 text-[#272727c1]">End date</h1>
              <input
                className="w-full pl-[2vh] h-[5vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
                type="date"
                name="endyear"
                onChange={(e) => setTo(e.target.value)}
                placeholder="2024"
              />
            </div>
          </div>
          <div className='mt-2'>
            <h2 className="text-base font-medium mb-3">Intern’s responsibilities</h2>
            <textarea
              className="w-full pl-[2vh] h-[15vh] text-base outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-md"
              name="responsibility"
              onChange={(e) => setResponsibility(e.target.value)}
              placeholder="e.g. Add Description"
            />
          </div>

          <h3 className='text-2xl font-medium'>Stipend & perks</h3>
          <div className='w-full mt-3'>
            <h2 className='font-medium text-zinc-700'>Stipend</h2>
            <input
              onChange={(e) => setStipend(e.target.value)}
              className='py-[8px] mt-1 w-[50%] rounded px-3 border-[1px] outline-[3px] outline-none focus:border-[#00A5EC] border-zinc-300'
              placeholder='e.g. per month'
              type="text"
            />
          </div>
          <div className="space-y-4 p-4">
            <h2 className='font-medium'>Perks</h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="Certificate"
                id="Certificate"
                checked={perks.includes('Certificate')}
                onChange={(e) => setPerks(e.target.checked ? [...perks, 'Certificate'] : perks.filter(perk => perk !== 'Certificate'))}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label htmlFor="Certificate" className="ml-2 font-medium text-gray-800">Certificate</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="Letter of recommendation"
                id="Letter of recommendation"
                checked={perks.includes('Letter of recommendation')}
                onChange={(e) => setPerks(e.target.checked ? [...perks, 'Letter of recommendation'] : perks.filter(perk => perk !== 'Letter of recommendation'))}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label htmlFor="Letter of recommendation" className="ml-2 font-medium text-gray-800">Letter of recommendation</label>
            </div>
          </div>
          <button className='px-3 font-medium absolute right-8 bottom-8 text-white py-2 bg-[#00A5EC] rounded-md'>Post</button>
        </form>
      </div>
    </>
  );
};

export default PostInternship;
