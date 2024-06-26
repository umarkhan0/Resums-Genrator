import React, { useState , useEffect} from 'react';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useSpring, animated } from 'react-spring';
import Footer from '../../componenets/footer';
import resumeImage from '../../images/hero_resume_home_page_rn.webp';
import Buttons from '../../componenets/buttons';
import { useNavigate } from 'react-router-dom';
import FormHeader from '../../componenets/formHeader';
import { useLocation } from 'react-router-dom';
import SingleSelectPlaceholder from '../../componenets/dropdown';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const Experience = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const contectUs = location.state.data;

  const [experienceAdded, setExperienceAdded] = useState([]);
  const [swalSetUp , setSwalSetUp] = useState(true);
  // Initialize as an empty array
  const [JobTitleValuefirst, setjobTitleValue] = useState("");
  const [companyValue, setCcpmpanyValue] = useState("");
  const [nextpage , setNextPage] = useState(false)
  const [selectedYear, setSelectedYear] = useState('');
  const [cityTown, setcityvalue] = useState('');
  const [countryValue, setCountryvalue] = useState('');
  const [lastselectedYear, setlastSelectedYear] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handlelastYearChange = (value) => {
    setlastSelectedYear(value);
  };

  const navigate = useNavigate();

  const springProps = useSpring({
    from: { transform: 'translateY(20%)' },
    to: { transform: 'translateY(0%)' },
    config: { duration: 1000 },
    reset: isAnimating,
  });
  
  
  const handleRegenerateAnimation = () => {
    setIsAnimating(!isAnimating); // Toggle isAnimating state
  };
  
 const formik = useFormik({
  initialValues: {
    JobTitle: '',
    Company: '',
    CityTown: '',
    country: '',
    year: '',
    lastYear: '',
    present: '',
  },
  onSubmit: (experience) => {
    const newExperience = {
      JobTitle: JobTitleValuefirst,
      Company: companyValue,
      CityTown: cityTown,
      country: countryValue,
      year: selectedYear,
      lastYear: isChecked ? lastselectedYear : "not found",
      present: isChecked,
    };

    setExperienceAdded([...experienceAdded, newExperience]);
    console.log(swalSetUp)
    if(swalSetUp){
  Swal.fire({
      title: 'Don’t have work experience?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'ADD VOLUNTEER EXPERIENCE',
      cancelButtonText: 'Skip >',
      showCancelButton: true,
      showCloseButton: true,
    }).then((res) => {
      
      if (res.isConfirmed) {
        handleRegenerateAnimation()

        setCcpmpanyValue("");
        setjobTitleValue("");
        setcityvalue("");
        setSelectedYear("");
        setlastSelectedYear("");

        setCountryvalue("");
        setIsChecked(false);
        console.log("yyyyy");
        setTimeout(() => {
          window.scrollTo(0, 0);
        } , 800)

      }

      console.log(experienceAdded);
      if(!res.isConfirmed){
        setNextPage(true)
        // const experiencePlusContect = Object.assign({} , {contectUs},{experienceAdded})
        
                // navigate("/education", { state: { data: experiencePlusContect} });
      }
//       else{
// 
//       }
    });
  }
  },

  validate: (values) => {
    const errors = {};


    return errors;
  },


});
useEffect(()=>{
  console.log("horaha ha")
if(experienceAdded.length == 1){
  setSwalSetUp(false);
  
}
if(experienceAdded.length == 2){
  const experiencePlusContect = Object.assign({} , {contectUs},{experienceAdded});
     navigate("/education-tips", { state: { data: experiencePlusContect} });
}
}, [experienceAdded])
if(nextpage){
  const experiencePlusContect = Object.assign({} , {contectUs},{experienceAdded});
   navigate("/education-tips", { state: { data: experiencePlusContect} });
}

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
                      onChange={(e) => {
                        setjobTitleValue(e.target.value)
                      }}
                      onBlur={formik.handleBlur}
                      value={JobTitleValuefirst}
                      className="p-2 border border-gray-300 rounded w-full outline-blue-400"
                    />
                   
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
                      onChange={(e) => {
                        setCcpmpanyValue(e.target.value)
                      }}
                      onBlur={formik.handleBlur}
                      value={companyValue}
                      className="p-2 border border-gray-300 rounded w-full outline-blue-400"
                    />
                   
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
                        onChange={(e) => {
                          setcityvalue(e.target.value)
                        }}
                        onBlur={formik.handleBlur}
                        value={cityTown}
                        maxLength={13}
                        className="p-2 border border-gray-300 rounded outline-blue-400 w-full"
                      />
                     
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
                        onChange={(e) => {
                          setCountryvalue(e.target.value)
                        }}
                        onBlur={formik.handleBlur}
                        value={countryValue}
                        maxLength={13}
                        className="p-2 border border-gray-300 rounded outline-blue-400 w-full"
                      />

                     
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className="block text-[#535353] font-medium mb-2">
                      Start Date
                    </label>
                    <SingleSelectPlaceholder selectedValue={selectedYear} onChange={handleYearChange} plac={"Start Date"} widthMul={"100%"} />
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
                      <SingleSelectPlaceholder selectedValue={lastselectedYear} isChecked={isChecked} onChange={handlelastYearChange} plac={"End Date"} widthMul={"100%"} />
                      </div>
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
