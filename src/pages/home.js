import React from "react";
import ResponsiveAppBar from "../componenets/header";
import { NavLink } from "react-router-dom";
import resumsImage from "../images/hero_resume_home_page_rn.webp";
import { useSpring, animated } from 'react-spring';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
      <ResponsiveAppBar />
      <div className=" flex justify-center mt-3 mb-3 flex-wrap items-center">
        {/* <div className="flex justify-center"></div> */}
        <div className="  lg:w-2/5 sm:w-full">
          <div className="media-change">
          <p className=" text-heading text-5xl font-extrabold  font-serif text-[#333]">
            Create a custom resume and cover letter in minutes!
          </p>
          {/* <i class="far fa-file-certificate"></i> */}
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
          <img className="" src={resumsImage} alt="resumsimage" />
        </div>
      
    </div>

    </animated.div>
  );
};

export default Basic;
