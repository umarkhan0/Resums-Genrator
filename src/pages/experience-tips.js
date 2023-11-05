import LogoImage from "../images/logo-resume-nerd.svg";
import sideImage from "../images/filetype-pdf.svg";
import resumeImage from "../images/hero_resume_home_page_rn.webp"
import { NavLink, useLocation } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { FaAward } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useEffect } from "react";
import FormHeader from "../componenets/formHeader";
import { BsPencil } from "react-icons/bs"
const ExperienceTips = () => {

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
                            <h1 className=" text-[36px] mb-12 font-[libre] leading-3 font-bold">Work Experience</h1>
                            <div className="flex mt-2 items-center">
                                <div className="text-[#ea7876] absolute flex justify-center items-center bg-[#ffdfdf] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <FaAward />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                    Gather information about your accomplishments at previous jobs to fill in this section.
                                </span>
                            </div>
                            <div className="flex mt-4 items-center">
                                <div className="text-[#eeaa2e] absolute flex justify-center items-center bg-[#feefd1] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <AiOutlineUnorderedList />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                    Need help to fill out your work experience? Simply click to add pre-written examples unique to your industry.
                                </span>
                            </div>
                            <div className="flex mt-4 items-center">
                                <div className="text-[#e9995b] absolute flex justify-center items-center bg-[#ffdbc2] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <BsPencil />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                    Be sure to include keywords from the job posting. This will make your resume more attractive to recruiters.
                                </span>
                            </div>

                            <div className="flex justify-center items-center mt-12 mb-4">
                                <NavLink to={"/builder"} className=" no-underline bg-[#008d5f] border-none active:opacity-5 text-white w-[70%] py-2 rounded-sm font-bold text-center">
                                    CONTINUE
                                </NavLink>
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
export default ExperienceTips;
