import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import Footer from "../componenets/footer";
import resumeImage from "../images/hero_resume_home_page_rn.webp";
import { useNavigate, useLocation } from "react-router-dom";
import BasicSelect from "../componenets/simpleDropDown";
import {
        AiOutlinePlusCircle,
        AiOutlineExclamationCircle,
        AiFillDelete
} from "react-icons/ai";
import FormHeader from "../componenets/formHeader";
import { useState } from "react";
import Buttons from "../componenets/buttons";
const Language = () => {
        const location = useLocation();
const [language1 , setLanguage1] = useState("");
const [language2 , setLanguage2] = useState("");
const [language3 , setLanguage3] = useState("");
const [proficiency1 , setProfency1] = useState("");
const [proficiency2 , setProfency2] = useState("");
const [proficiency3 , setProfency3] = useState("");

        const experienceEndInfo = location.state.data;
       
        const navigate = useNavigate();
        const springProps = useSpring({
                from: { transform: "translateY(20%)" },
                to: { transform: "translateY(0%)" },
                config: { duration: 1000 },
        });
        const formik = useFormik({
                initialValues: {
                       language1: "",
                       proficiency1: "",
                       language2: "",
                       proficiency2: "",
                       language3: "",
                       proficiency3: "",
                },
                onSubmit: (values) => {
                      values.language1 = language1;
                      values.proficiency1 = proficiency1;
                      values.language2 = language2
                      values.proficiency2 = proficiency2
                      values.language3 = language3;
                      values.proficiency3 = proficiency3
                        console.log(values);
                        
                       

let language = values;
let contect = experienceEndInfo.contect;
let experiecePage = experienceEndInfo.experiecePage;
let education = experienceEndInfo.education;

 const experiencePlusContect = Object.assign({}, { contect }, { experiecePage }, { education } , {language});
                        navigate("/skills", { state: { data: experiencePlusContect } });
                },


        });

       
        
        return (
                <>
                        <FormHeader />
                        <div className="flex justify-between  main-first-component ml-4">
                                <animated.div
                                        style={springProps}
                                        className=" w-full flex justify-center   flex-row"
                                >
                                        <div>
                                                <p className=" text-[36px] mt-[24px] font-bold font-['libre']">
                                                        Languages
                                                </p>
                                                <div className=" max-w-[460px] text-[16px] mb-3 leading-5 text-[#515151]">
                                                        Add languages you know or may have studied. We’ve included a proficiency guide on the right. You can also skip this step for now.
                                                </div>



                                              
                                                                
                                                                     
                                                <form onSubmit={formik.handleSubmit}>
                                                                <div  className="flex justify-between flex-wrap   mt-4 items-center ">
                                                                        <div className=" mr-2 w-[230px] languageType">
                                                                                <label
                                                                                        htmlFor="lan1"
                                                                                        className="block text-[#535353] mb-2"
                                                                                >
                                                                                        Language 1
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        id="lan1"
                                                                                        name="language1"
                                                                                        placeholder="Urdu"
                                                                                        value={language1}
                                                                                       
                                                                                        onChange={(e) => setLanguage1(e.target.value)}
                                                                                       
                                                                                        className=" p-2 border border-gray-300 rounded outline-blue-400 w-full "
                                                                                />

                                                                        </div>
                                                                        <div className="  languageType mr-1">
                                                                                <div
                                                                                        className="flex items-center justify-between  text-[#535353]  mb-2"
                                                                                >
                                                                                        <span className="flex"> Proficiency <AiOutlineExclamationCircle color="#03acbb" className="mt-1 ml-1" /></span>
                                                                                        
                                                                                                        
                                                                                                        
                                                                                        
                                                                                </div>
                                                                                <BasicSelect onChange={(e) => setProfency1(e)}/>
                                                                        </div>
                                                                </div>
                                                                {language2 &&
                                                                         <div  className="flex justify-between flex-wrap   mt-4 items-center ">
                                                                         <div className=" mr-2 w-[230px] languageType">
                                                                                 <label
                                                                                         htmlFor="lan1"
                                                                                         className="block text-[#535353] mb-2"
                                                                                 >
                                                                                         Language 2
                                                                                 </label>
                                                                                 <input
                                                                                         type="text"
                                                                                         id="lan1"
                                                                                         name="lan1"
                                                                                         placeholder="Urdu"
                                                                                         onBlur={
                                                                                                 formik.handleBlur
                                                                                         }
                                                                                        onChange={(e) => setLanguage2(e.target.value)}

                                                                                        
                                                                                         className=" p-2 border border-gray-300 rounded outline-blue-400 w-full "
                                                                                 />
 
                                                                         </div>
                                                                         <div className="  languageType mr-1">
                                                                                 <div
                                                                                         className="flex items-center justify-between  text-[#535353]  mb-2"
                                                                                 >
                                                                                         <span className="flex"> Proficiency <AiOutlineExclamationCircle color="#03acbb" className="mt-1 ml-1" /></span>
                                                                                         
                                                                                                         <span>
                                                                                                                 <AiFillDelete className=" cursor-pointer"  onClick={() => {
                                                                                                                        language3  ? 
                                                                                                                        setLanguage3(false)
                                                                                                                        :
                                                                                                                        setLanguage2(false)
                                                                                                                 }} />
                                                                                                         </span>
                                                                                                         
                                                                                         
                                                                                 </div>
                                                                                 <BasicSelect onChange={(e) => setProfency2(e)}/>
                                                                         </div>
                                                                 </div>
                                                                }
                                                                 {language3 &&
                                                                         <div  className="flex justify-between flex-wrap   mt-4 items-center ">
                                                                         <div className=" mr-2 w-[230px] languageType">
                                                                                 <label
                                                                                         htmlFor="cityTown"
                                                                                         className="block text-[#535353] mb-2"
                                                                                 >
                                                                                         Language 3
                                                                                 </label>
                                                                                 <input
                                                                                         type="text"
                                                                                         id="cityTown"
                                                                                         name="cityTown"
                                                                                         placeholder="Urdu"
                                                                                         
                                                                                        
                                                                                         onChange={(e) => setLanguage3(e.target.value)}

                                                                                        
                                                                                         className=" p-2 border border-gray-300 rounded outline-blue-400 w-full "
                                                                                 />
 
                                                                         </div>
                                                                         <div className="  languageType mr-1">
                                                                                 <div
                                                                                         className="flex items-center justify-between  text-[#535353]  mb-2"
                                                                                 >
                                                                                         <span className="flex"> Proficiency <AiOutlineExclamationCircle color="#03acbb" className="mt-1 ml-1" /></span>
                                                                                         
                                                                                                         <span>
                                                                                                                 <AiFillDelete className=" cursor-pointer" onClick={() => {
                                                                                                                        setLanguage3(false)
                                                                                                                       
                                                                                                                 }}  />
                                                                                                         </span>
                                                                                                         
                                                                                         
                                                                                 </div>
                                                                                 <BasicSelect onChange={(e) => setProfency3(e)}/>
                                                                         </div>
                                                                 </div>
                                                                }
                                                               
                                                        
                                                
                                               
                                                   {!language3 &&    <div onClick={() =>{ 
                                                               if(!language2){
                                                                setLanguage2(true);
                                                               }else{
                                                                setLanguage3(true);
                                                               };
                                                              
                                                               
                                                        
                                                        
                                                        }} className=" flex items-center mt-2 cursor-pointer text-[#03acbb] font-extrabold text-[13px]"
                                                              
                                                        > <AiOutlinePlusCircle /> Add another Language</div>
                                                      } 
                  <Buttons />
                  </form>              


                                        </div>
                                </animated.div>
                                <div className=" flex justify-center form-side-image items-center">
                                        <animated.div
                                                style={springProps}
                                                className=" absolute flex  justify-center items-center"
                                        >
                                                <img
                                                        className=" h-[380px]"
                                                        src={resumeImage}
                                                        alt="resume image"
                                                />
                                        </animated.div>

                                        <div className="flex h-full  object-contain">
                                                <img
                                                        width="1299px"
                                                        src="https://cdn3.resumenerd.com/images/branded-funnel/how-It-works.svg"
                                                        alt="Ui image"
                                                />
                                        </div>
                                </div>
                        </div>
                        <Footer />
                </>
        )
};
export default Language;