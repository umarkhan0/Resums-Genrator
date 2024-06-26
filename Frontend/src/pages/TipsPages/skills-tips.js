import LogoImage from "../../images/logo-resume-nerd.svg";
import sideImage from "../../images/filetype-pdf.svg";
import resumeImage from "../../images/hero_resume_home_page_rn.webp"
import {  useLocation, useNavigate } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import {BsRecycle , BsTools} from "react-icons/bs"
import { FaAward } from "react-icons/fa";
import { AiOutlineUnorderedList , AiOutlinePaperClip } from "react-icons/ai";
import { useEffect } from "react";
import FormHeader from "../../componenets/formHeader";
const SkillsTips = () => {
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
                            <h1 className=" text-[36px] mb-12 font-[libre] md:leading-3 font-bold">Skills</h1>
                            <div className="flex mt-2 items-center">
                                <div className="text-[#ff9061] absolute flex justify-center items-center bg-[#f9ebe3] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <AiOutlinePaperClip />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                Keep your list of skills to around 8 if possible. Also, if you can, use skills listed in the job posting you are applying to.
                                </span>
                            </div>
                            <div className="flex mt-4 items-center">
                                <div className="text-[#eeaa2e] absolute flex justify-center items-center bg-[#feefd1] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <BsRecycle />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                Soft skills are the most transferable from one role to the other as they are more universal.
                                </span>
                            </div>
                            <div className="flex mt-4 items-center">
                                <div className="text-[#55a1e8] absolute flex justify-center items-center bg-[#deefff] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <BsTools />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                Hard skills, on the other hand, are technical skills. They relate to specific roles and responsibilities.
                                </span>
                            </div>

                            <div className="flex justify-center items-center cursor-pointer mt-12 mb-4">
                                <p onClick={() =>{
                        navigate("/skills", { state: { data: contectUs} });
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
export default SkillsTips;
