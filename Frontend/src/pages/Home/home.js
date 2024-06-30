import React from "react";
import ResponsiveAppBar from "../../componenets/header";
import { NavLink } from "react-router-dom";
import resumsImage from "../../images/hero_resume_home_page_rn.webp";
import ImageModal from "./modal";
import { useSpring, animated } from 'react-spring';
import { useEffect } from "react";
import resumeImageOne from "./images/Software-Engineer-Resume-Example.png";
import resumeImageTwo from "./images/Data-Analyst-Resume-Example (1).png";
import resumeImageThree from "./images/Administrative-Assistant-Resume-Example.png";
const Basic = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const animationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div style={animationProps} className=" bg-[#f4faff] fixed w-full h-full overflow-auto">
      <ResponsiveAppBar positionS={"fixed"} />
      <div className=" flex justify-center mt-3 flex-wrap items-center">
        <div className="  lg:w-2/5 sm:w-full">
          <div className="media-change">
            <p className=" text-heading sm:text-5xl leading-8 text-[30px] font-extrabold  font-serif text-[#333]">
              Create a custom resume and cover letter in minutes!
            </p>
            <div>
              <div className="flex text-center pt-2  items-center">
                <svg
                  className=" text-xl mr-2 bi bi-filetype-pdf"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"

                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
                  />
                </svg>
                <span className=" font-medium ml-3">
                  Clean, attention-grabbing resume templates.
                </span>
              </div>
              <div className="flex text-center pt-2 items-center">
                <svg
                  className=" text-xl mr-2 bi bi-magic"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"

                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z" />
                </svg>
                <span className="font-medium ml-3">
                  Pre-written resume examples to get you started.
                </span>
              </div>

              <div className="flex text-center pt-2 items-center">
                <svg
                  className=" text-xl mr-2 bi bi-list-task"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"

                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                  />
                  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                  />
                </svg>
                <span className=" font-medium ml-3">
                  Step-by-step process created by resume experts.
                </span>
              </div>
            </div>
            <NavLink to={"./intro"} className="btn-create">
              <button className=" btn-create bg-[#008d5f] text-center px-5 mt-7 py-2 rounded-md text-white">
                Create Resume
              </button>

            </NavLink>
          </div>
        </div>
        <div className=" inline-block">
          <img src={resumsImage} alt="resumsimage" />
        </div>

      </div>
      <div className=" w-full bg-[#ffff] border-b-2">
        <h2 className=" sm:text-[30px] font-semibold sm:leading-[42px] font-[Libre] px-[14px] text-center leading-[33px]  py-6">Create your resume in 3 simple steps:</h2>
        <div className=" flex justify-around flex-row flex-wrap">
          <div className=" w-[300px]">
            <div className=" flex justify-center flex-col items-center">
              <div className=" px-8 py-3 font-semibold font-[raylway] hover:underline cursor-pointer text-[#14bc79] text-[22px] bg-[#d7ffef] text-center rounded-md">
                1
              </div>
              <h3 className=" font-semibold text-[28px] font-[Libre] text-center mt-4">Choose a template</h3>
              <p className=" w-[230px] text-center font-[raylway]">Pick from one of our professional designed templates that get past the ATS robots.</p>
            </div>
          </div>
          <div className=" w-[300px]">
            <div className=" flex justify-center flex-col items-center">
              <div className=" px-8 py-3 font-semibold font-[raylway] hover:underline cursor-pointer text-[#6f7cd6] text-[22px] bg-[#e9eaff] text-center rounded-md">
                2
              </div>
              <h3 className=" font-semibold text-[28px] font-[Libre] text-center mt-4">Enter your info</h3>
              <p className=" w-[230px] text-center font-[raylway]">Follow a guided, step-by-step process with recruiter tips.</p>
            </div>
          </div>
          <div className=" w-[300px]">
            <div className=" flex justify-center flex-col items-center">
              <div className=" px-8 py-3 font-semibold font-[raylway] hover:underline cursor-pointer text-[#eeaa2e] text-[22px] bg-[#feefd1] text-center rounded-md">
                3
              </div>
              <h3 className=" font-semibold text-[28px] font-[Libre] text-center mt-4">Download your resume</h3>
              <p className=" w-[230px] text-center font-[raylway]">Download in PDF, MSWord, or TXT format.</p>
            </div>
          </div>

        </div>
      </div>

      <section className=" bg-[#fff]">
        <h3 className=" font-[Libre] text-[35px] font-bold pt-9 pl-9">Resume</h3>
        <p className=" pl-9 pr-4 text-[18px] font-[Raleway] text-[#333]">In the modern world, the right resume is everything. Companies use applicant tracking systems (ATS) to filter good resumes from those that don’t suit the job description. So, you must have the best resume that showcases your skills and work experience. This article will break down what a resume is, why you need one and how you can create a resume that catches a hiring manager’s attention.</p>
        <div className=" flex justify-around flex-wrap sm:flex-nowrap">
          <div className="  m-4 sm:m-0 sm:w-[330px]">
            <p className=" text-[#00b5c3] uppercase text-[16px] leading-4 font-bold">DATA ANALYST RESUME</p>
            <div className="relative inline-block border group">
              <img className="border-2 border-[#008d5f] md:border-transparent md:group-hover:border-[#008d5f]" src={resumeImageOne} alt="resume" />
              <div className="bg-[#008d5f] font-bold p-2 rounded-md text-[#fff] sm:hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ImageModal img={resumeImageOne} />
              </div>
            </div>
          </div>
          <div className="m-4 sm:m-0 sm:w-[330px]">
            <p className=" text-[#00b5c3] uppercase text-[16px] leading-4 font-bold">ADMINISTRATIVE ASSISTANT RESUME</p>
            <div className="relative border inline-block group">
              <img className="border-2 border-[#008d5f] md:border-transparent md:group-hover:border-[#008d5f] p-2" src={resumeImageTwo} alt="resume" />
              <div className="bg-[#008d5f] font-bold p-2 rounded-md text-[#fff] sm:hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ImageModal img={resumeImageTwo} />
              </div>
            </div>
          </div>
          <div className=" m-4 sm:m-0 sm:w-[330px]">
            <p className=" text-[#00b5c3] uppercase text-[16px] leading-4 font-bold">SOFTWARE ENGINEER RESUME</p>
            <div className="relative border inline-block group">
              <img className="border-2 border-[#008d5f] md:border-transparent md:group-hover:border-[#008d5f]" src={resumeImageThree} alt="resume" />
              <div className="bg-[#008d5f] font-bold p-2 rounded-md text-[#fff] sm:hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ImageModal img={resumeImageThree} />
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className=" bg-[#fff]">
        <h3 className=" font-[Libre] text-[35px] font-bold pt-9 sm:pl-9 pl-4">What Is a Resume?</h3>
        <p className=" sm:pl-9 pl-4 pr-4 text-[18px] font-[inherit] text-[#333]">A resume is similar to a curriculum vitae (CV) in many ways but is significantly shorter. A CV is a comprehensive document listing a job seeker’s academic and professional history. Meanwhile, a resume is a single-page snapshot of the skills and experiences that make a job seeker right for a certain job title. Here are three main resume formats that you can choose:</p>
        <p className="font-[Libre] text-[20px] font-[800] pt-2 sm:pl-9 pl-4 text-[#00b5c3]">CHRONOLOGICAL RESUME</p>
        <p className=" sm:pl-9 pl-4 pr-4 text-[18px] font-[inherit] text-[#333]">A chronological resume format, or reverse-chronological resume format, focuses on the work history of a job seeker and is best for people who have a lot of professional experience.
        </p>
        <p className="font-[Libre] text-[20px] font-[800] pt-2 sm:pl-9 pl-4 text-[#00b5c3]">FUNCTIONAL RESUME</p>
        <p className=" sm:pl-9 pl-4 pr-4 text-[18px] font-[inherit] text-[#333]">A functional resume format focuses on a job seeker's skill set and is competency-based. This resume format is best for those who have limited or patchy work experience.</p>
        <p className="font-[Libre] text-[20px] font-[800] pt-2 sm:pl-9 pl-4 text-[#00b5c3]">COMBINATION RESUME</p>
        <p className=" sm:pl-9 pl-4 pr-4 text-[18px] font-[inherit] text-[#333]">A combination resume format balances work history and skills to provide a broad overview of a job seeker's competencies. This is a great option for those with limited work history and is generally received more positively by hiring managers.</p>
        <p className=" sm:pl-9 pl-4 pr-4 pt-4 text-[18px] font-[inherit] text-[#333]">Whichever resume format you choose, the ResumeNerd resume builder has a range of free resume templates you can select.</p>
      </section>
    </animated.div>
  );
};

export default Basic;
