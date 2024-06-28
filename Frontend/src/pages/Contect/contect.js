import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Footer from "../../componenets/footer";
import roboImg from '../../images/beab049afb9f4a654f71eb8dd8164e15-removebg-preview.png';
import ResponsiveAppBar from "../../componenets/header";

let Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!message) {
      setMessageError("Message is required");
      valid = false;
    } else {
      setMessageError("");
    }

    if (valid) {
      // Submit the form or perform any desired action
      console.log("Form Submitted", { name, email, message });
      // navigate to some page or show a success message
    }
  };

  return (
    <div>
      <ResponsiveAppBar positionS={"relative"} />

      <form onSubmit={formSubmit}>
        <div className=" mt-[25px] mb-[25px] flex justify-center items-center rounded-sm">
          <div className=" shadow-lg login-container flex justify-center w-[550px]">
            <div className="flex flex-col w-[95%]">
              <div className=" flex mt-7 justify-center items-center">
                <img className=" h-14 w-14" src={roboImg} alt="robo img" />
              </div>
              <h1 className=" text-center mb-[7px] font-black font-[raleway] text-[30px]">
                Contact Us
              </h1>

              <div className=' mb-3 pl-1 pr-1  w-full'>
                <div className=" w-full">
                  <label htmlFor='name-inp' className='pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                    Name
                  </label>
                  <br />
                  <input
                    onChange={e => setName(e.target.value)}
                    value={name}
                    id='name-inp'
                    className={`mt-1 appearance-none  rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${nameError ? 'border-red-500' : ''}`}
                    type='text'
                    placeholder='Enter Name'
                  />
                </div>
                <span className='pl-0.5 text-[#fb6565]  text-[14px] font-[Raleway] leading-3'>
                  {nameError}
                </span>
              </div>

              <div className=' mb-3 pl-1 pr-1'>
                <div>
                  <label htmlFor='mail-inp' className=' pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                    Email
                  </label>
                  <br />
                  <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    id='mail-inp'
                    className={`mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${emailError ? 'border-red-500' : ''}`}
                    type='text'
                    placeholder='Enter Email'
                  />
                </div>
                <span className=' pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
                  {emailError}
                </span>
              </div>
              <div className=' mb-3 pl-1 pr-1'>
                <div>
                  <label htmlFor='message-inp' className=' pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                    Message
                  </label>
                  <br />
                  <textarea
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    id='message-inp'
                    className={`mt-1 appearance-none rounded-md h-[100px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${messageError ? 'border-red-500' : ''}`}
                    placeholder='Enter Message'
                  />
                </div>
                <span className=' pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
                  {messageError}
                </span>
              </div>
              <div className='flex justify-center'>
                <button className=' w-[95%] bg-[#008d5f] mb-3 text-[16px] font-[800] active:opacity-30 text-[#fff] h-[45px] rounded-md'>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
