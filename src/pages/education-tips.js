import resumeImage from "../images/hero_resume_home_page_rn.webp"
import {useLocation, useNavigate } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { useEffect } from "react";
import FormHeader from "../componenets/formHeader";
import {CiApple} from "react-icons/ci";
import {PiButterfly} from "react-icons/pi";
import {RiAwardFill} from "react-icons/ri"
const EductionTips = () => {
let navigate = useNavigate();
const location = useLocation();
const experiencePlusContect = location.state.data;
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
                            <h1 className=" text-[36px] mb-12 font-[libre] md:leading-3 font-bold">Education</h1>
                            <div className="flex mt-2 items-center">
                                <div className="text-[#55a1e8] absolute flex justify-center items-center bg-[#deefff] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <CiApple />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                List your high school experience only if you did not go to college.
                                </span>
                            </div>
                            <div className="flex mt-4 items-center">
                                <div className="text-[#56b78a] absolute flex justify-center items-center bg-[#e3f9f2] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <PiButterfly />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                If you are still in school, note the expected date of graduation, your major, and the type of degree you'll be receiving.
                                </span>
                            </div>
                            <div className="flex mt-4 items-center">
                                <div className="text-[#b586df] absolute flex justify-center items-center bg-[#f5e9ff] rounded-sm w-[36px] h-9 text-center font-bold">
                                    <RiAwardFill />
                                </div>
                                <span className="pl-12 text-[17px] leading-[20px] font-normal text-left">
                                Feel free to mention any honors, awards, scholarships or professional certifications or licenses you may have.
                                </span>
                            </div>

                            <div className="flex justify-center items-center mt-12 mb-4">
                                <p onClick={() =>{
                        navigate("/education", { state: { data: experiencePlusContect} });
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
export default EductionTips;
