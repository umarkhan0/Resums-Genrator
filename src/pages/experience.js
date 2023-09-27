import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useSpring, animated } from 'react-spring';
import Footer from '../componenets/footer';
import resumeImage from '../images/hero_resume_home_page_rn.webp';
import Buttons from '../componenets/buttons';
import { useNavigate } from 'react-router-dom';
import FormHeader from '../componenets/formHeader';
import { useLocation } from 'react-router-dom';
import SingleSelectPlaceholder from '../componenets/dropdown';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
const Experience = () => {
  const location = useLocation();
  const contectUs = location.state.data;
  // console.log(data)
  const [selectedYear, setSelectedYear] = useState('');
  const [lastselectedYear, setlastSelectedYear] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleYearChange = (value) => {
    setSelectedYear(value);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // handlelastYearChange(is)
  };
  const handlelastYearChange = (value) => {
   
     setlastSelectedYear(value)
    
  };

  const navigate = useNavigate();

  const springProps = useSpring({
    from: { transform: 'translateY(20%)' },
    to: { transform: 'translateY(0%)' },
    config: { duration: 1000 },
  });

  const formik = useFormik({
    initialValues: {
      JobTitle: '',
      Company: '',
      CityTown: '',
      country: '',
      year: '',
      lastYear: '',
      present: "",
    },
    onSubmit: (experience) => {
      experience.year = selectedYear;
    !isChecked ?  experience.lastYear = lastselectedYear : experience.lastYear = "not found"
      experience.present = isChecked
     const ExperiencePlusContect = Object.assign({}, {contectUs} , {experience});
      navigate('/secondexperience', { state: { data: ExperiencePlusContect } });
    },
    validate: (values) => {
      const errors = {};
      !values.JobTitle ? (errors.JobTitle = 'Can we get your Title?') : console.log();
      !values.Company ? (errors.Company = 'Company is required') : console.log();
      !values.CityTown ? (errors.CityTown = 'City is required') : console.log();
      !values.country ? (errors.country = 'Country is required') : console.log();
      selectedYear == "" ? (errors.year = 'Year is required') : console.log();
      !isChecked && lastselectedYear == "" ? (errors.lastYear = 'Last Year is required') : console.log();


      return errors;
    },
  });

  return (
    <div>
      <FormHeader />

      <div className="flex justify-between main-first-component ml-4">
        <animated.div style={springProps} className="w-full flex justify-center flex-row">
          <div>
            <p className="text-[36px] mt-[24px] font-bold font-['libre']">Work Experience</p>
            <div className="max-w-[500px] text-[16px] leading-5 text-[#515151]">Start with your most recent position.</div>
            <div className="flex mt-4">
              <div className="w-full overflow-auto">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="JobTitle" className="block text-[#535353] font-medium mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="JobTitle"
                      name="JobTitle"
                      placeholder="JobTitle"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.JobTitle}
                      className="p-2 border border-gray-300 rounded w-full outline-blue-400"
                    />
                    {formik.touched.JobTitle && formik.errors.JobTitle && (
                      <div className="text-red-600 text-sm mt-1">{formik.errors.JobTitle}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="Company" className="block text-[#535353] font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="Company"
                      name="Company"
                      placeholder="SMIT"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.Company}
                      className="p-2 border border-gray-300 rounded w-full outline-blue-400"
                    />
                    {formik.touched.Company && formik.errors.Company && (
                      <div className="text-red-600 text-sm mt-1">{formik.errors.Company}</div>
                    )}
                  </div>

                  <div className="flex justify-around items-center">
                    <div className="mb-4">
                      <label htmlFor="CityTown" className="block text-[#535353] font-medium mb-2">
                        City/Town
                      </label>
                      <input
                        type="text"
                        id="CityTown"
                        name="CityTown"
                        placeholder="Karachi"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.CityTown}
                        maxLength={13}
                        className="p-2 border border-gray-300 rounded outline-blue-400 w-full"
                      />
                      {formik.touched.CityTown && formik.errors.CityTown && (
                        <div className="text-red-600 text-sm mt-1">{formik.errors.CityTown}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center hover:text-[#2cacbb]">
                        <label htmlFor="extraphone" className="block text-[#535353] font-medium mb-2">
                          Country
                        </label>
                      </div>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="country"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                        maxLength={13}
                        className="p-2 border border-gray-300 rounded outline-blue-400 w-full"
                      />

                      {formik.touched.country && formik.errors.country && (
                        <div className="text-red-600 text-sm mt-1">{formik.errors.country}</div>
                      )}
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className="block text-[#535353] font-medium mb-2">
                      Start Date
                    </label>
                    <SingleSelectPlaceholder selectedValue={selectedYear} onChange={handleYearChange} plac={"Start Date"} />
                    {formik.touched.year && formik.errors.year && (
                      <div className="text-red-600 text-sm mt-1">{formik.errors.year}</div>
                    )}
                  </div>
                  {
                    !isChecked &&

                    <div className='mb-4'>
                      <label className="block text-[#535353] font-medium mb-2">
                        End Date
                      </label>
                      <SingleSelectPlaceholder selectedValue={lastselectedYear} isChecked={isChecked} onChange={handlelastYearChange} plac={"End Date"} />
                      {formik.touched.lastYear && formik.errors.lastYear && (
                        <div className="text-red-600 text-sm mt-1">{formik.errors.lastYear}</div>
                      )}</div>
                  }

                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
                      label="I currently work here"
                    />
                  </FormGroup>

                  <Buttons />
                </form>
              </div>
            </div>
          </div>
        </animated.div>
        <div className="flex justify-center form-side-image items-center">
          <animated.div style={springProps} className="absolute flex justify-center items-center">
            <img className="h-[380px]" src={resumeImage} alt="resume image" />
          </animated.div>
          <div className="flex h-full object-contain">
            <img
              width="1299px"
              src="https://cdn1.resumenerd.com/images/branded-funnel/work-experience.svg"
              alt="Ui image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Experience };
