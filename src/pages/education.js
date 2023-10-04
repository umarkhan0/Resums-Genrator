import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import Footer from "../componenets/footer";
import resumeImage from "../images/hero_resume_home_page_rn.webp";
import Buttons from "../componenets/buttons";
import { useNavigate, useLocation } from "react-router-dom";
import ComboBox from "../componenets/seachSelect";
import {
        AiFillDelete,
        AiOutlinePlusCircle,
} from "react-icons/ai";
import FormHeader from "../componenets/formHeader";
import { useState } from "react";
const Education = () => {
        const selectedValuepass = (value) => {
                console.log(value)
        };
        const navigate = useNavigate();
        let [inputTrueFalse, setInputChack] = useState(false);
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
                        country: "",
                        phone: "",
                        extraphone: "",
                        email: "",
                },
                onSubmit: (values) => {
                        console.log(values);
                        // navigate("/experience", { state: { data: values } });


                },
                validate: (values) => {
                        const errors = {};

                        if (!values.schoolName) {
                                errors.schoolName = "Can we get your name?";
                        }
                        if (!values.country) {
                                errors.country = "Country is required";
                        }
                        if (!values.cityTown) {
                                errors.cityTown = "CityTown is required";
                        }
                        if (!values.city) {
                                errors.city = "City is required";
                        }
                        if (!values.phone) {
                                errors.phone = "phone is required";
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

                                                                        <ComboBox onChange={selectedValuepass} />




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
                                                                                {formik
                                                                                        .touched
                                                                                        .city &&
                                                                                        formik
                                                                                                .errors
                                                                                                .city && (
                                                                                                <div className="text-red-600 text-sm mt-1">
                                                                                                        {
                                                                                                                formik
                                                                                                                        .errors
                                                                                                                        .city
                                                                                                        }
                                                                                                </div>
                                                                                        )}
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
                                                                                        {formik
                                                                                                .touched
                                                                                                .phone &&
                                                                                                formik
                                                                                                        .errors
                                                                                                        .phone && (
                                                                                                        <div className="text-red-600 text-sm mt-1">
                                                                                                                {
                                                                                                                        formik
                                                                                                                                .errors
                                                                                                                                .phone
                                                                                                                }
                                                                                                        </div>
                                                                                                )}
                                                                                </div>
                                                                                {inputTrueFalse ? (
                                                                                        <div className="mb-4">
                                                                                                <div className="flex justify-between items-center hover:text-[#2cacbb]">
                                                                                                        <label
                                                                                                                htmlFor="extraphone"
                                                                                                                className="block text-[#535353]  font-medium mb-2"
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
                                                                                                        <AiOutlinePlusCircle color="#03acbb" />
                                                                                                        <span className="text-[#03acbb]">
                                                                                                                Add
                                                                                                                another
                                                                                                                number
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
                                                                                        Email
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
export default Education;
