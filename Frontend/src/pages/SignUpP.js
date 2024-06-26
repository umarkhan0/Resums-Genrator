import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from '../componenets/header';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import roboImg from '../images/beab049afb9f4a654f71eb8dd8164e15-removebg-preview.png';
import { jwtDecode } from 'jwt-decode';
import Footer from '../componenets/footer';
import { NavLink , useNavigate  } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameerror, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  // console.log(process)
  const formSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/signup?key=123', {
      name: username,
      email,
      password
    }).then(response => {
      localStorage.setItem("email" , response.data.user.email)
      navigate("/otp")
      
    })
      .catch(error => {

        let select = error.response?.data?.message?.split(' ')[0];
        select == '"name"' ? setNameError(error.response.data.message) : setNameError("")
        select == '"name"' ? document.getElementById("name-inp").focus() : console.log();
       
        select == '"password"' ? document.getElementById("pass-inp").focus() : console.log();
        select == '"password"' ? setPasswordError(error.response.data.message) : setPasswordError("");
        console.log(error.response.data.messge);
        if(error.response.data.messge == `E11000 duplicate key error collection: ResumeGenra.users index: email_1 dup key: { email: "${email}" }`){
          setEmailError("Already use Email");
          document.getElementById("mail-inp").focus();
        }else{
          select == '"email"' ? document.getElementById("mail-inp").focus() : console.log();
        select == '"email"' ? setEmailError(error.response.data.message) : setEmailError("")
        }
      });
  }

  const [loginWidth, setLoginWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setLoginWidth(screenWidth <= 405 ? 250 : 350);
      screenWidth < 305 && setLoginWidth(screenWidth <= 305 ? 150 : 250);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <ResponsiveAppBar positionS={"relative"} />

      <form onSubmit={formSubmit}>
        <div className=" mt-[25px] mb-[25px] flex justify-center items-center rounded-sm">
          <div className=" shadow-lg login-container flex justify-center w-[550px]">
            <div className="flex flex-col">
              <div className=" flex mt-7 justify-center items-center">
                <img className=" h-14 w-14" src={roboImg} alt="robo img" />
              </div>
              <h1 className=" text-center mb-[7px] font-black font-[raleway] text-[30px]">
                Wellcome
              </h1>
              <p className=" mb-[25px] text-[16px] font-normal text-center leading-3">
                Create your account
              </p>
              <div className=' flex justify-center items-center'>
                <GoogleOAuthProvider

                  clientId="742252403958-odjbfog3o3j18gpp5bc95udqt0i2k9dg.apps.googleusercontent.com"
                >
                  <GoogleLogin
                    width={loginWidth}

                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse.clientId);
                      const decoded = jwtDecode(credentialResponse.credential);
                      console.log(decoded);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </GoogleOAuthProvider>
              </div>
              <hr className="hr-text" data-content="OR" />
              <div className=' mb-3 pl-1 pr-1'>
                <div>
                  <label htmlFor='name-inp' className='pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                    Your Name
                  </label>
                  <br />
                  <input
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    id='name-inp'
                    className={`mt-1 appearance-none  rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${nameerror ? 'border-red-500' : ''}`}
                    type='text'
                    placeholder='Enter Name'
                  />
                </div>
                <span className='pl-0.5 text-[#fb6565]  text-[14px] font-[Raleway] leading-3'>
                  {nameerror}
                </span>
              </div>

              <div className=' mb-3 pl-1 pr-1'>
                <div>
                  <label htmlFor='mail-inp' className=' pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                    Email address
                  </label>
                  <br />
                  <input onChange={e => setEmail(e.target.value)} value={email} id='mail-inp' className=' mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb]   font-[Raleway]' type='text' placeholder='Enter Email' />
                </div>
                <span className=' pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
                 {
                  emailError
                 }
                </span>
              </div>
              <div className=' mb-3 pl-1 pr-1'>
                <div>
                <label htmlFor='pass-inp' className=' pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                  Password
                </label>
                <br />
                <input onChange={e => setPassword(e.target.value)} value={password} id='pass-inp' className=' mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb]   font-[Raleway]' type='password' placeholder='Enter Password' />
               </div>
                <span className=' pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
                 {
                  passwordError
                 }
                </span>
              </div>
              <div className='flex justify-center'>
                <button className=' w-[95%]  bg-[#008d5f] mb-3 text-[16px] font-[800] active:opacity-30 text-[#fff] h-[45px] rounded-md'>
                  Sign up
                </button>
              </div>
              <NavLink to={"/login"} className=' text-center no-underline'>
                <p className='text-[#03acbb] p-2 font-[600] text-[13px] hover:underline cursor-pointer'>Have an account? Log in now</p>
              </NavLink>
            </div>
          </div>
        </div>
      </form>
      <Footer />

    </div>

  );
};

export default SignUp;
