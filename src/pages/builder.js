import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import Footer from "../componenets/footer";
import resumeImage from "../images/hero_resume_home_page_rn.webp";
import Buttons from "../componenets/buttons";
import { useNavigate , useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
        AiFillDelete,
        AiOutlinePlusCircle,
} from "react-icons/ai";
import FormHeader from "../componenets/formHeader";
import { useState } from "react";
const BuilderForm = () => {
           const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
        const navigate = useNavigate();
        let [inputTrueFalse, setInputChack] = useState(false);
        const springProps = useSpring({
                from: { transform: "translateY(20%)" }, 
                to: { transform: "translateY(0%)" },
                config: { duration: 1000 },
        });
        const formik = useFormik({
                initialValues: {
                        name: "",
                        city: "",
                        country: "",
                        phone: "",
                        extraphone: "",
                        email: "",
                },
                onSubmit: (values) => {
                        console.log(values);
                        // navigate("/experience", { state: { data: values } });
                        navigate("/experience-tips", { state: { data: values } });


                },
                validate: (values) => {
                        const errors = {};

                        if (!values.name) {
                                errors.name = "Can we get your name?";
                        }
                        
                        if (!values.email) {
                                errors.email = "Required";
                        } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        values.email,
                                )
                        ) {
                                errors.email = "Invalid email address";
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
                                                        Contact Info
                                                </p>
                                                <div className=" max-w-[510px] text-[16px] leading-5 text-[#515151]">
                                                        This information will be
                                                        on your resume header.
                                                        Include at least your
                                                        name and email address.
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
                                                                                        htmlFor="name"
                                                                                        className="block text-[#535353] font-medium mb-2"
                                                                                >
                                                                                        Name*
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        id="name"
                                                                                        name="name"
                                                                                        placeholder="Umar khan"
                                                                                        onChange={
                                                                                                formik.handleChange
                                                                                        }
                                                                                        onBlur={
                                                                                                formik.handleBlur
                                                                                        }
                                                                                        value={
                                                                                                formik
                                                                                                        .values
                                                                                                        .name
                                                                                        }
                                                                                        className=" p-2 border border-gray-300 rounded w-full outline-blue-400"
                                                                                />
                                                                                {formik
                                                                                        .touched
                                                                                        .name &&
                                                                                        formik
                                                                                                .errors
                                                                                                .name && (
                                                                                                <div className="text-red-600 text-sm mt-1">
                                                                                                        {
                                                                                                                formik
                                                                                                                        .errors
                                                                                                                        .name
                                                                                                        }
                                                                                                </div>
                                                                                        )}
                                                                        </div>

                                                                        <div className="mb-4">
                                                                                <label
                                                                                        htmlFor="city"
                                                                                        className="block text-[#535353] font-medium mb-2"
                                                                                >
                                                                                        City
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        id="city"
                                                                                        name="city"
                                                                                        placeholder="Karachi"
                                                                                        onChange={
                                                                                                formik.handleChange
                                                                                        }
                                                                                        onBlur={
                                                                                                formik.handleBlur
                                                                                        }
                                                                                        value={
                                                                                                formik
                                                                                                        .values
                                                                                                        .city
                                                                                        }
                                                                                        className=" p-2 border border-gray-300 rounded w-full outline-blue-400"
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
                                                                        <div className="flex justify-between items-center">
                                                                                <div className="mb-4">
                                                                                        <label
                                                                                                htmlFor="phone"
                                                                                                className="block text-[#535353] font-medium mb-2"
                                                                                        >
                                                                                                Phone
                                                                                                Number
                                                                                        </label>
                                                                                        <input
                                                                                                type="number"
                                                                                                id="phone"
                                                                                                name="phone"
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
                                                                                                                .phone
                                                                                                }
                                                                                                maxLength={
                                                                                                        13
                                                                                                }
                                                                                                className=" p-2 border border-gray-300 rounded outline-blue-400 w-full "
                                                                                        />
                                                                                      
                                                                                </div>
                                                                                {inputTrueFalse ? (
                                                                                        <div className="mb-4">
                                                                                                <div className="flex justify-between items-center hover:text-[#2cacbb]">
                                                                                                        <label
                                                                                                                htmlFor="extraphone"
                                                                                                                className=" text-[#535353] text-center  font-medium mb-2"
                                                                                                        >
                                                                                                                Additional
                                                                                                                Phone
                                                                                                        </label>
                                                                                                        <AiFillDelete
                                                                                                                size={
                                                                                                                        "20px"
                                                                                                                }
                                                                                                                className=" cursor-pointer "
                                                                                                                onClick={() => {
                                                                                                                        setInputChack(
                                                                                                                                "",
                                                                                                                        );
                                                                                                                        formik.values.extraphone =
                                                                                                                                "";
                                                                                                                        setInputChack(
                                                                                                                                false,
                                                                                                                        );
                                                                                                                }}
                                                                                                        />
                                                                                                </div>
                                                                                                <input
                                                                                                        type="number"
                                                                                                        id="extraphone"
                                                                                                        name="extraphone"
                                                                                                        // value={inputTrueFalse}
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
                                                                                                                        .extraphone
                                                                                                        }
                                                                                                        maxLength={
                                                                                                                13
                                                                                                        }
                                                                                                        className="p-2 border border-gray-300 rounded outline-blue-400 w-full"
                                                                                                />
                                                                                        </div>
                                                                                ) : (
                                                                                        <div
                                                                                                className="flex justify-center w-1/2 mt-3 items-center cursor-pointer"
                                                                                                onClick={() =>
                                                                                                        setInputChack(
                                                                                                                true,
                                                                                                        )
                                                                                                }
                                                                                        >
                                                                                                <div className="text-add-other flex justify-center items-center">
                                                                                                        <span className="text-[#03acbb] flex leading-4 justify-center items-center  text-center">
                                                                                                        <AiOutlinePlusCircle size={20} className=" ml-1" color="#03acbb" />
                                                                                                                Add another number
                                                                                                        </span>
                                                                                                </div>
                                                                                        </div>
                                                                                )}
                                                                        </div>
                                                                        <div className="mb-4 ">
                                                                                <label
                                                                                        htmlFor="email"
                                                                                        className="block text-gray-600 font-medium"
                                                                                >
                                                                                        Email*
                                                                                </label>
                                                                                <input
                                                                                        type="email"
                                                                                        id="email"
                                                                                        name="email"
                                                                                        onChange={
                                                                                                formik.handleChange
                                                                                        }
                                                                                        onBlur={
                                                                                                formik.handleBlur
                                                                                        }
                                                                                        value={
                                                                                                formik
                                                                                                        .values
                                                                                                        .email
                                                                                        }
                                                                                        placeholder="umaraamir959@gmail.com"
                                                                                        className="w-full p-2 border border-gray-300 rounded outline-blue-400"
                                                                                />

                                                                                {formik
                                                                                        .touched
                                                                                        .email &&
                                                                                        formik
                                                                                                .errors
                                                                                                .email && (
                                                                                                <div className="text-red-600 text-sm mt-1">
                                                                                                        {
                                                                                                                formik
                                                                                                                        .errors
                                                                                                                        .email
                                                                                                        }
                                                                                                </div>
                                                                                        )}
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
export default BuilderForm;
