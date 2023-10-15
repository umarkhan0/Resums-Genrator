import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import Footer from "../componenets/footer";
import resumeImage from "../images/hero_resume_home_page_rn.webp";
import Buttons from "../componenets/buttons";
import { useNavigate, useLocation } from "react-router-dom";
import ComboBox from "../componenets/seachSelect";
import SingleSelectPlaceholder from "../componenets/dropdown";
import { FaUnderline, FaBold } from "react-icons/fa"
import { FiItalic } from "react-icons/fi";
import { MdDoNotDisturbOnTotalSilence } from 'react-icons/md';
import BasicSelect from "../componenets/simpleDropDown";
import {
        AiOutlinePlusCircle,
} from "react-icons/ai";
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

import FormHeader from "../componenets/formHeader";
import { useState } from "react";
const Language = () =>{
    const location = useLocation();
    const experienceEndInfo = location.state.data;
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [storedValue, setStoredValue] = useState('');
    const onChange = (newEditorState) => {
            setEditorState(newEditorState);
            const contentState = newEditorState.getCurrentContent();
            const serializedContent = JSON.stringify(convertToRaw(contentState));
            setStoredValue(serializedContent);
    };
 
    const navigate = useNavigate();
    const springProps = useSpring({
            from: { transform: "translateY(20%)" },
            to: { transform: "translateY(0%)" },
            config: { duration: 1000 },
    });
    const formik = useFormik({
            initialValues: {
                    schoolName: "",
                    cityTown: "",
                    city: "",
                    fieldStudy: "",
                    Degree: "",
                    country: "",
                    description: "",

                    year: "",
                    month: ""
            },
            onSubmit: (values) => {
                    values.description = storedValue
                    console.log(values);
                    const education = values
                    let contect = experienceEndInfo.contectUs;
                    let experiecePage = experienceEndInfo.experienceAdded;
                    const experiencePlusContect = Object.assign({}, { contect }, { experiecePage }, { education });
                    navigate("/education/language", { state: { data: experiencePlusContect } });


            },
           
          
    });
    return(
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
                                                <div className="flex justify-between items-center">
                                                                                <div className="mb-4">
                                                                                        <label
                                                                                                htmlFor="cityTown"
                                                                                                className="block text-[#535353] font-medium mb-2"
                                                                                        >
                                                                                                City/Town
                                                                                        </label>
                                                                                        <input
                                                                                                type="text"
                                                                                                id="cityTown"
                                                                                                name="cityTown"
                                                                                                placeholder="03152805977"
                                                                                                onChange={(
                                                                                                        e,
                                                                                                ) => {
                                                                                                        if (
                                                                                                                e
                                                                                                                        .target
                                                                                                                        .value
                                                                                                                        .length <=
                                                                                                                15
                                                                                                        ) {
                                                                                                                formik.handleChange(
                                                                                                                        e,
                                                                                                                );
                                                                                                        }
                                                                                                }}
                                                                                                onBlur={
                                                                                                        formik.handleBlur
                                                                                                }
                                                                                                value={
                                                                                                        formik
                                                                                                                .values
                                                                                                                .cityTown
                                                                                                }
                                                                                                maxLength={
                                                                                                        13
                                                                                                }
                                                                                                className=" p-2 border border-gray-300 rounded outline-blue-400 w-full "
                                                                                        />
                                                                                        
                                                                                </div>

                                                                                <div className="mb-4">
                                                                                        <label
                                                                                                htmlFor="country"
                                                                                                className="block text-[#535353] font-medium mb-2"
                                                                                        >
                                                                                                Country
                                                                                        </label>
                                                                                        <input
                                                                                                type="text"
                                                                                                id="country"
                                                                                                name="country"
                                                                                                placeholder="Pakistan"
                                                                                                onChange={
                                                                                                        formik.handleChange
                                                                                                }
                                                                                                onBlur={
                                                                                                        formik.handleBlur
                                                                                                }
                                                                                                value={
                                                                                                        formik
                                                                                                                .values
                                                                                                                .country
                                                                                                }
                                                                                                className=" p-2 border border-gray-300 rounded w-full outline-blue-400"
                                                                                        />
                                                                                      
                                                                                </div>

                                                                        </div> 
<BasicSelect />



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
       </>
    )
};
export default Language;