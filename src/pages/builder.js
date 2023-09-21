import {CiLinkedin} from "react-icons/ci";
import { useFormik } from "formik";

import resumeImage from "../images/hero_resume_home_page_rn.webp"
import {AiOutlineFacebook , AiOutlineInstagram} from "react-icons/ai";
// import PAFunc from "./PDF"
import PDFunc from "./PDF";
import FormHeader from "../componenets/formHeader";
// import PhoneInputField from "../componenets/number";
const BuilderForm = () =>{
    const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      password: '',
      country : '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors = {};

      // Example validation rules
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.country) {
        errors.country = 'Country is required';
      }
      if (!values.city) {
        errors.city = 'City is required';
      }
      

      if (!values.password) {
        errors.password = 'Password is required';
      }
      

      return errors;
    },
  });

 
    return(

        <div>
<FormHeader />
<div className="flex justify-between mt-16 m-4">
    <div className="  w-full flex justify-center flex-row">
        <div>
<p className=" text-[36px] mt-[24px] font-bold font-['libre']">Contact Info</p>
<div className=" max-w-[510px] text-[16px] leading-5 text-[#515151]">
This information will be on your resume header. Include at least your name and email address.
</div>
<div className="  flex mt-4  ">
      <div className=" w-full overflow-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#535353] font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Umar khan"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className=" p-2 border border-gray-300 rounded w-full"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-[#535353] font-medium mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Karachi"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className=" p-2 border border-gray-300 rounded w-full outline-blue-400"
            />
            {formik.touched.city && formik.errors.city && (
              <div className="text-red-600 text-sm mt-1">{formik.errors.city}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-[#535353] font-medium mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Pakistan"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
              className=" p-2 border border-gray-300 rounded w-full outline-blue-400"
            />
            {formik.touched.country && formik.errors.country && (
              <div className="text-red-600 text-sm mt-1">{formik.errors.country}</div>
            )}
          </div>
          {/* <PhoneInputField/> */}
          <div className="mb-4 ">
            <label htmlFor="password" className="block text-gray-600 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full p-2 border border-gray-300 rounded"
            />
           
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div></div>
    <div className="flex justify-center items-center form-side-image">
          <img
            width="990px"
            src="https://cdn3.resumenerd.com/images/branded-funnel/how-It-works.svg"
            alt="Ui image"
          />
          <div className=" absolute flex justify-center">
            <img className=" h-[370px]" src={resumeImage} alt="resume image" />
</div>
        </div>
        
    </div>
        </div>
    )
}
export default BuilderForm