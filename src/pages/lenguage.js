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
        const [moreLanguage, setMoreLanguage] = useState(["setlanguage1"]);

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
                       language: "",
                       language: "",
                       language4: ""
                },
                onSubmit: (values) => {
                      
                        console.log(values);
                        
                        // const experiencePlusContect = Object.assign({}, { contect }, { experiecePage }, { education });
                        // navigate("/education/language", { state: { data: experiencePlusContect } });


                },


        });
        const selected = (value) => {
                console.log(value);
        }
        const deleteOption = () => {
                if (moreLanguage.length > 1) {
                        const updatedLanguages = [...moreLanguage];
                        updatedLanguages.pop(); // Remove the last element
                        setMoreLanguage(updatedLanguages);
                }
        }
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



                                                {
                                                        moreLanguage.map((v, i) => (
                                                                
                                                                        // console.log(v)
                                                                
                                                                <div key={i} className="flex justify-between mt-4 items-center ">
                                                                        <div className=" mr-2 w-[230px]">
                                                                                <label
                                                                                        htmlFor="cityTown"
                                                                                        className="block text-[#535353] mb-2"
                                                                                >
                                                                                        Language <span>{i + 1}</span>
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        id="cityTown"
                                                                                        name="cityTown"
                                                                                        placeholder="Urdu"
                                                                                        
                                                                                        onBlur={
                                                                                                formik.handleBlur
                                                                                        }
                                                                                        // onChange={(e) => v(e.target.value)}
                                                                                       
                                                                                        className=" p-2 border border-gray-300 rounded outline-blue-400 w-full "
                                                                                />

                                                                        </div>
                                                                        <div>
                                                                                <div
                                                                                        className="flex items-center justify-between text-[#535353] mb-2"
                                                                                >
                                                                                        <span className="flex"> Proficiency <AiOutlineExclamationCircle color="#03acbb" className="mt-1 ml-1" /></span>
                                                                                        {
                                                                                                moreLanguage.length !== 1 &&
                                                                                                        <span>
                                                                                                                <AiFillDelete className=" cursor-pointer" onClick={deleteOption} />
                                                                                                        </span>
                                                                                                        
                                                                                        }
                                                                                </div>
                                                                                <BasicSelect onChange={selected} />
                                                                        </div>
                                                                </div>
                                                        ))
                                                }
                                                {moreLanguage.length < 4 ?
                                                        <div className=" flex items-center mt-2 cursor-pointer text-[#03acbb] font-extrabold text-[13px]"
                                                                onClick={() => {
                                                                        setMoreLanguage([...moreLanguage, moreLanguage.length + 1])
                                                                }}
                                                        > <AiOutlinePlusCircle /> Add another Language</div>
                                                        :
                                                        console.log()
                                                }
                  <Buttons />


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