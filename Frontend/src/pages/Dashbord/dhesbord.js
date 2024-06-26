import { useState } from "react";
import ResponsiveAppBar from "../../componenets/header";
import Checkbox from '@mui/material/Checkbox';
import CardDesh from "./Componenet/card";
import resumeImage from "./images/Resume-Template-Resume-Nerd-Accord.webp";
import robo1Image from "./images/download (1).png";
import roboo2Image from "./images/download.png"
const Deshbord = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [numOneCheckBox, setNumOneCheckBox] = useState(true);
    const [numTwoCheckBox, setNumTwoCheckBox] = useState(true);
    const [removeCheckBox, setRemoveCheckBox] = useState(false);
    const [lengthCheckBox, setLengthCheckBox] = useState(2);

    const numOneCheck = () => {
        const newState = !numOneCheckBox;
        setNumOneCheckBox(newState);
        const newLength = newState ? lengthCheckBox + 1 : lengthCheckBox - 1;
        setLengthCheckBox(newLength);
        setRemoveCheckBox(newLength < 1);
    };

    const numTwoCheck = () => {
        const newState = !numTwoCheckBox;
        setNumTwoCheckBox(newState);
        const newLength = newState ? lengthCheckBox + 1 : lengthCheckBox - 1;
        setLengthCheckBox(newLength);
        setRemoveCheckBox(newLength < 1);
    };

    const removeAll = () => {
        if (removeCheckBox) {
            setRemoveCheckBox(false);
            setNumOneCheckBox(true);
            setNumTwoCheckBox(true);
            setLengthCheckBox(2);
        } else {
            setRemoveCheckBox(true);
            setNumOneCheckBox(false);
            setNumTwoCheckBox(false);
            setLengthCheckBox(0);
        }
    };

    return (
        <>
            <ResponsiveAppBar positionS={"fixed"} />
            <div className="flex justify-around flex-wrap mt-20  ">
                <div className="bg-white p-6 mb-4 rounded-[10px] shadow-lg max-w-md w-[90%]">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Overview</h2>
                        <table className="mt-2 w-full text-left">
                            <tbody>
                                <tr className="border-b">
                                    <th className="py-2 font-bold text-[#333] font-[raleway]">Account ID:</th>
                                    <td className="py-2 text-gray-900">11534716</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="py-2 font-bold text-[#333] font-[raleway]">Email:</th>
                                    <td className="py-2 text-gray-900">umaraamir959@gmail.com</td>
                                </tr>
                                <tr>
                                    <th className="py-2 font-bold text-[#333] font-[raleway]">Password:</th>
                                    <td className="py-2 text-blue-500"><a href="#">Change Password</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Email Settings</h3>
                        <form className="mt-4 space-y-4">
                            <label className="flex items-center">
                                <Checkbox {...label} onChange={numOneCheck} checked={numOneCheckBox} />
                                <span className="ml-2">Expert Resume and Job Search Tips</span>
                            </label>
                            <label className="flex items-center">
                                <Checkbox {...label} onChange={numTwoCheck} checked={numTwoCheckBox} />
                                <span className="ml-2">New Feature Announcements</span>
                            </label>
                            <label className="flex items-center">
                                <Checkbox {...label} onChange={removeAll} checked={removeCheckBox} />
                                <span className="ml-2">Remove All</span>
                            </label>
                        </form>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Cookie Settings</h3>
                        <form className="mt-4 space-y-4">
                            <label className="flex items-center">
                                <Checkbox {...label} defaultChecked />
                                <span className="ml-2">Performance & Web Analytics</span>
                            </label>
                            <label className="flex items-center">
                                <Checkbox {...label} defaultChecked />
                                <span className="ml-2">Marketing</span>
                            </label>
                            <label className="flex items-center">
                                <Checkbox {...label} disabled checked />
                                <span className="ml-2">Functional (essential cookies)</span>
                            </label>
                        </form>
                    </div>

                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg w-full mt-4">Return to Dashboard</button>
                </div>

               <div  className="sm:w-[40%] mb-4 flex justify-around flex-col w-[90%] ">
<div className=" mb-3 sm:mb-0">
                              <CardDesh
    component="img"
    sx={{ width: '50%' }}
    image={resumeImage} // Place your image in the public folder
    alt="Resume"
    title="Resume Score"
    discription="Get your resume scored and learn how to improve your resume and impress employers."
    button="IMPROVE RESUME SCORE"
/>
</div>
<div className=" mb-3 sm:mb-0">
<CardDesh
    component="img"
    title="Cover Letter Builder"
    sx={{ width: '50%' }}
    image={robo1Image} // Place your image in the public folder
    alt="Resume"
    button="CREATE COVER LETTER"

    discription="Create an eye-catching cover letter to send with your resume."
/> 
</div>
<div>
<CardDesh
    component="img"
    title="Job Search & Job Match"
    sx={{ width: '50%' }}
    image={roboo2Image} // Place your image in the public folder
    alt="Resume"
    button="SEARCH FOR JOBS"

    discription="Search for jobs and see which jobs best match your resume."
/>
</div>
               </div>
            </div>
        </>
    );
};

export default Deshbord;
