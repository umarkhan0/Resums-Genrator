import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import Footer from "../componenets/footer";
import resumeImage from "../images/hero_resume_home_page_rn.webp";
import Buttons from "../componenets/buttons";
import { useNavigate, useLocation } from "react-router-dom";
import ComboBox from "../componenets/seachSelect";
import SelectSmall from "../componenets/dateselect";
import SingleSelectPlaceholder from "../componenets/dropdown";
import SingleSelectPlaceholderMonth from "../componenets/monthselect";
import { FaUnderline, FaBold } from "react-icons/fa"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { FiItalic } from "react-icons/fi"
import {
        AiFillDelete,
        AiOutlinePlusCircle,
} from "react-icons/ai";
import FormHeader from "../componenets/formHeader";
import { useState } from "react";
const Education = () => {
        const [boldText, setBoldText] = useState('');
        const [selectionStart, setSelectionStart] = useState(0);
        const [selectionEnd, setSelectionEnd] = useState(0);
        const handleBoldText = () => {
                if (selectionStart !== selectionEnd) {
                        const selectedText = decription.substring(selectionStart, selectionEnd);
                        const newText = decription.replace(selectedText, `<strong>${selectedText}</strong>`);
                        setBoldText(newText);

                }
        };
        const handleTextSelection = (e) => {
                setSelectionEnd(e.target.selectionEnd);
        };
        const [selectedYear, setSelectedYear] = useState('');
        const [decription, setDescription] = useState("");
        console.log(decription);
        const handleYearChange = (value) => {
                setSelectedYear(value);
        };
        const [selectedMonth, setSelectedMonth] = useState('');

        const handleMonthChange = (value) => {
                setSelectedMonth(value);
        };
        const [dgreeValue, setDegreeValue] = useState("")
        const handleSelectionChange = (selectedValue) => {
                setDegreeValue(selectedValue)
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


                        year: "",
                        month: ""
                },
                onSubmit: (values) => {
                        console.log(values);
                        // navigate("/experience", { state: { data: values } });


                },
                validate: (values) => {
                        const errors = {};
                        values.Degree = dgreeValue;
                        values.year = selectedYear;
                        values.month = selectedMonth;
                        if (!values.schoolName) {
                                errors.schoolName = "Can we get your name?";
                        }
                        if (!values.year) {
                                errors.year = "Can we get your name?";
                        }
                        if (!values.month) {
                                errors.month = "Can we get your name?";
                        }
                        if (!values.fieldStudy) {
                                errors.fieldStudy = "Can we get your name?";
                        }
                        if (!values.Degree) {
                                errors.Degree = "Please enter degree";
                        }
                        if (!values.country) {
                                errors.country = "Country is required";
                        }
                        if (!values.cityTown) {
                                errors.cityTown = "CityTown is required";
                        }





                        return errors;
                },
        });

        return (
                <div>
                        <FormHeader />

                        <div className="flex justify-between main-first-component ml-4">
                                <animated.div
                                        style={springProps}
                                        className="w-full flex justify-center flex-row"
                                >
                                        <div>
                                                <p className=" text-[36px] mt-[24px] font-bold font-['libre']">
                                                        Education
                                                </p>
                                                <div className=" max-w-[510px] text-[16px] leading-5 text-[#515151]">
                                                        Start with your most recent educational institution.
                                                </div>
                                                <div className="  flex mt-4  ">
                                                        <div className=" w-full overflow-auto">
                                                                <form
                                                                        onSubmit={
                                                                                formik.handleSubmit
                                                                        }
                                                                >
                                                                        <div className="mb-4">
                                                                                <label
                                                                                        htmlFor="schoolName"
                                                                                        className="block text-[#535353] font-medium mb-2"
                                                                                >
                                                                                        School Name
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        id="schoolName                                                                                        "
                                                                                        name="schoolName"
                                                                                        placeholder="Karachi Univercity"
                                                                                        onChange={
                                                                                                formik.handleChange
                                                                                        }
                                                                                        onBlur={
                                                                                                formik.handleBlur
                                                                                        }
                                                                                        value={
                                                                                                formik
                                                                                                        .values
                                                                                                        .schoolName
                                                                                        }
                                                                                        className=" p-2 border border-gray-300 rounded w-full outline-blue-400"
                                                                                />
                                                                                {formik
                                                                                        .touched
                                                                                        .schoolName &&
                                                                                        formik
                                                                                                .errors
                                                                                                .schoolName && (
                                                                                                <div className="text-red-600 text-sm mt-1">
                                                                                                        {
                                                                                                                formik
                                                                                                                        .errors
                                                                                                                        .schoolName
                                                                                                        }
                                                                                                </div>
                                                                                        )}
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
                                                                                        {formik
                                                                                                .touched
                                                                                                .cityTown &&
                                                                                                formik
                                                                                                        .errors
                                                                                                        .cityTown && (
                                                                                                        <div className="text-red-600 text-sm mt-1">
                                                                                                                {
                                                                                                                        formik
                                                                                                                                .errors
                                                                                                                                .phone
                                                                                                                }
                                                                                                        </div>
                                                                                                )}
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
                                                                                        {formik
                                                                                                .touched
                                                                                                .country &&
                                                                                                formik
                                                                                                        .errors
                                                                                                        .country && (
                                                                                                        <div className="text-red-600 text-sm mt-1">
                                                                                                                {
                                                                                                                        formik
                                                                                                                                .errors
                                                                                                                                .country
                                                                                                                }
                                                                                                        </div>
                                                                                                )}
                                                                                </div>

                                                                        </div>

                                                                        <ComboBox onSelectionChange={handleSelectionChange} />
                                                                        {formik
                                                                                .touched
                                                                                .Degree &&
                                                                                formik
                                                                                        .errors
                                                                                        .Degree && (
                                                                                        <div className="text-red-600 text-sm mt-1">
                                                                                                {
                                                                                                        formik
                                                                                                                .errors
                                                                                                                .Degree
                                                                                                }
                                                                                        </div>
                                                                                )}





                                                                        <div className="flex flex-col sm:flex-row justify-between items-center">
                                                                                <div className="mb-4 sm:mr-2 w-full sm:w-2/5">
                                                                                        <label htmlFor="fieldStudy" className="block text-[#535353] font-medium mb-2">
                                                                                                Field of Study
                                                                                        </label>
                                                                                        <input
                                                                                                type="text"
                                                                                                id="fieldStudy"
                                                                                                name="fieldStudy"
                                                                                                placeholder="Business Administration"
                                                                                                onChange={(e) => {
                                                                                                        if (e.target.value.length <= 15) {
                                                                                                                formik.handleChange(e);
                                                                                                        }
                                                                                                }}
                                                                                                onBlur={formik.handleBlur}
                                                                                                value={formik.values.fieldStudy}
                                                                                                maxLength={13}
                                                                                                className="p-2 border border-gray-300 rounded outline-blue-400 w-full"
                                                                                        />
                                                                                        {formik.touched.fieldStudy && formik.errors.fieldStudy && (
                                                                                                <div className="text-red-600 text-sm mt-1">
                                                                                                        {formik.errors.fieldStudy}
                                                                                                </div>
                                                                                        )}
                                                                                </div>
                                                                                {/* <div className="mb-4 sm:mr-2 w-full sm:w-1/3"> */}
                                                                                <div className="mb-4 sm:mt-4 w-full sm:w-1/3">
                                                                                        <label className="  text-[#535353] w-full font-medium">
                                                                                                Graduation Date
                                                                                        </label>

                                                                                        <div className="mb-4 mt-2  w-full sm:w-full">
                                                                                                <SingleSelectPlaceholder
                                                                                                        selectedValue={selectedMonth}
                                                                                                        onChange={handleMonthChange}
                                                                                                        plac={"Month"}
                                                                                                        widthMul={"100%"}
                                                                                                />
                                                                                                {formik.touched.month && formik.errors.month && (
                                                                                                        <div className="text-red-600 text-sm mt-1">
                                                                                                                {formik.errors.month}
                                                                                                        </div>
                                                                                                )}
                                                                                        </div>
                                                                                </div>
                                                                                <div className="mb-4 sm:ml-2 sm:mt-8  w-full sm:w-1/3">
                                                                                        <SingleSelectPlaceholder
                                                                                                selectedValue={selectedYear}
                                                                                                onChange={handleYearChange}
                                                                                                plac={"Year"}
                                                                                                widthMul={"100%"}
                                                                                        />
                                                                                        {formik.touched.year && formik.errors.year && (
                                                                                                <div className="text-red-600 text-sm mt-1">
                                                                                                        {formik.errors.year}
                                                                                                </div>
                                                                                        )}
                                                                                </div>
                                                                        </div>
                                                                        <div>
                                                                                <div className=" flex justify-between items-center text-center h-12">
                                                                                        <p className=" text-center block text-[#535353] font-medium mb-2">Description</p>
                                                                                        <section className=" flex mb-3">
                                                                                                <div onClick={handleBoldText} className="border-solid border-2 w-8 flex justify-center h-8 items-center  mr-1 hover:shadow-md cursor-pointer rounded-sm ease-in duration-300">
                                                                                                        <FaBold color="#9b9b9b" />
                                                                                                </div>
                                                                                                <div className="border-solid border-2 w-8 flex justify-center h-8 items-center  mr-1 hover:shadow-md cursor-pointer rounded-sm ease-in duration-300">
                                                                                                        <FaUnderline color="#9b9b9b" />
                                                                                                </div>
                                                                                                <div className="border-solid border-2 w-8 flex justify-center h-8 items-center  mr-1 hover:shadow-md cursor-pointer rounded-sm ease-in duration-300">
                                                                                                        <FiItalic color="#9b9b9b" />
                                                                                                </div>
                                                                                                <div className="border-solid border-2 w-8 flex justify-center h-8 items-center  mr-1 hover:shadow-md cursor-pointer rounded-sm ease-in duration-300">
                                                                                                        <AiOutlineUnorderedList color="#9b9b9b" />
                                                                                                </div>

                                                                                        </section>
                                                                                </div>

                                                                                <textarea className=" w-full  h-56 border-solid border-2  outline-none rounded-sm p-1 resize-none" onSelect={handleTextSelection} value={decription} onChange={e => setDescription(e.target.value)} placeholder="Enter Edication Description"></textarea>
                                                                        </div>





                                                                        <Buttons />
                                                                </form>
                                                        </div>
                                                </div>
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
                </div>
        );
};
export default Education;
