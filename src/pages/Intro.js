import LogoImage from "../images/logo-resume-nerd.svg";
import sideImage from "../images/filetype-pdf.svg";
import resumeImage from "../images/hero_resume_home_page_rn.webp"
import { NavLink } from "react-router-dom";
import { useSpring, animated } from 'react-spring';

const Intro = () => {
  const animationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <animated.div style={animationProps}>
      <div>
        <img className=" p-4 h-16" src={LogoImage} alt="logo" />
      </div>
      <div className="flex justify-between  main-container-intro">
        <div className=" pl-2 flex justify-center container-contaent-intero  w-1/2 items-center">
          <div>
            <p className=" text-[#a0a5dd] text-sm">3 SIMPLE STEPS</p>
            <h2 className=" text-3xl font-serif font-bold">Get Started</h2>
            <div className="flex mt-2">
              <div className=" text-[#55a1e8] absolute  flex justify-center items-center bg-[#deefff] rounded-sm  w-[32px] h-7 text-center font-bold">
                1
              </div>
              <span className=" pl-9">
                Save time using pre-written bullets crafted by resume experts.
              </span>
            </div>
            <div className="flex mt-3">
              <div className=" text-[#008d5f] flex justify-center items-center rounded-sm absolute bg-[#e3f9f2] w-[32px]  h-7 text-center font-bold">
                2
              </div>
              <span className=" pl-9">
                Select a recruiter approved template that will get your resume
                noticed.
              </span>
            </div>
            <div className="flex mt-3">
              <div className=" text-[#6f7bd6]  flex justify-center items-center absolute rounded-sm bg-[#e9e9ff]  w-[32px] h-7 text-center font-bold">
                3
              </div>
              <span className="pl-9">Download or print your new resume!</span>
            </div>
            <div className="flex justify-center items-center mt-12 mb-4">
           <NavLink to={"/builder"} className=" bg-[#008d5f] border-none active:opacity-5 text-white w-[70%] py-2 rounded-sm font-bold text-center">
                CONTINUE
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="img-revers"
            width="560px"
            src="https://cdn3.resumenerd.com/images/branded-funnel/how-It-works.svg"
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
export default Intro;
