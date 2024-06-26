import LogoImage from "../../images/logo-resume-nerd.svg";
import sideImage from "../../images/filetype-pdf.svg";
import resumeImage from "../../images/hero_resume_home_page_rn.webp"
import {  useLocation, useNavigate } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { FaAward , FaHandshake } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useEffect } from "react";
import FormHeader from "../../componenets/formHeader";
import { BsPencil , BsFillPenFill } from "react-icons/bs";
import {HiOutlineLightBulb} from "react-icons/hi"
const SummaryTips = () => {
let navigate = useNavigate();
const location = useLocation();
const contectUs = location.state.data;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const animationProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });
    return (
        <animated.div style={animationProps}>
            <div>
                <FormHeader />
            </div>
            <div className="flex justify-between  main-container-intro ">
                <div className=" pl-2 flex justify-end container-contaent-intero  items-center ">
                    <div className=" w-full flex justify-center">
                        <div className=" w-3/4">
                            <p className=" text-[#a0a5dd] font-bold text-sm">UP NEXT:</p>
                            <h1 className=" text-[36px] mb-12 font-[libre] md:leading-3 font-bold">Summary</h1>
                            <div className="flex mt-2 items-center">
                                <div className="bg-[#f1e4f3] absolute flex justify-center items-center text-[#c176ce] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <BsFillPenFill />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                    Gather information about your accomplishments at previous jobs to fill in this section.
                                </span>
                            </div>
                            <div className="flex mt-4 items-center">
                                <div className="text-[#6bb8a0] absolute flex justify-center items-center bg-[#d6f8ee] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <HiOutlineLightBulb />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                    Need help to fill out your work experience? Simply click to add pre-written examples unique to your industry.
                                </span>
                            </div>
                            <div className="flex mt-4 items-center">
                                <div className="bg-[#deefff] absolute flex justify-center items-center text-[#55a1e8] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <FaHandshake />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                    Be sure to include keywords from the job posting. This will make your resume more attractive to recruiters.
                                </span>
                            </div>

                            <div className="flex justify-center items-center cursor-pointer mt-12 mb-4">
                                <p onClick={() =>{
                        navigate("/summary", { state: { data: contectUs} });
                                }} className=" no-underline bg-[#008d5f] border-none active:opacity-5 text-white w-[70%] py-2 rounded-sm font-bold text-center">
                                    CONTINUE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="img-revers"
                        width="560px"
                        src="https://cdn1.resumenerd.com/images/branded-funnel/work-experience.svg"
                        alt="Ui image"
                    />
                    <div className=" absolute flex justify-center">
                        <img className=" h-[370px]" src={resumeImage} alt="resume image" />
                    </div>
                </div>

            </div>
        </animated.div>
    );
};
export default SummaryTips;
