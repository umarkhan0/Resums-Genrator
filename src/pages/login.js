import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from '../componenets/header';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import roboImg from '../images/beab049afb9f4a654f71eb8dd8164e15-removebg-preview.png';
import { jwtDecode } from 'jwt-decode';
import Footer from '../componenets/footer';
import { NavLink , useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  let navigate = useNavigate()
  const [loginWidth, setLoginWidth] = useState(300);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordError, setPasswordError] = useState("")
  let [emailError, setEmailError] = useState("")
  const loginFinal = () => {
    axios.post("http://localhost:3000/api/login", {
      email,
      password
    }).then(response => {
      let {token} =  response.data;
      localStorage.setItem("Sign" , token);
      navigate("/deshbord")
    }).catch(error => {
      console.log(error.response.data.user);
      let emailInput = document.getElementById("mail-inp");
      let passwordInput = document.getElementById("pass-inp");
      let { message } = error.response.data;
      if (message == '"email" is not allowed to be empty') {
        setEmailError("Email is not allowed to be empty");
        emailInput.focus();
      } else if (message == '"email" must be a valid email') {
        setEmailError("Enter your correct email address");
        emailInput.focus();
      } 
      else if (error.response.data.messge == "Cannot read properties of null (reading 'toObject')"){
        setEmailError("Email not found");
        emailInput.focus();
      }
      else {
        setEmailError("");
      };
      if (message == '"password" is not allowed to be empty') {
        setPasswordError("password not allowed to be empty");
        passwordInput.focus();
      } else if (message == '"password" length must be at least 6 characters long') {
        setPasswordError("your password length must 6 characters long");
        passwordInput.focus();
      }
      else if(error.response.data.user == "Rong Password"){
        setPasswordError("Rong password");
        passwordInput.focus();
      }
      else {
        setPasswordError("");
      }
      console.log(error.response.data.messge);
    })
    console.log(email, password);
  }
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
      <div className=" mt-[25px] mb-[25px] flex justify-center items-center rounded-sm">
        <div className=" shadow-lg login-container flex justify-center w-[550px]">
          <div className="flex flex-col">
            <div className=" flex mt-7 justify-center items-center">
              <img className=" h-14 w-14" src={roboImg} alt="robo img" />
            </div>
            <h1 className=" text-center mb-[7px] font-black font-[raleway] text-[30px]">
              Welcome Back
            </h1>
            <p className=" mb-[25px] text-[16px] font-normal text-center leading-3">
              Sign in to your account.
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
            <div className=' flex justify-end w-[95%] leading-4'>
              <p className='text-[#03acbb] font-[600] text-[13px] hover:underline cursor-pointer'>Forgot my password</p>
            </div>
            <div className='flex justify-center'>
              <button onClick={loginFinal} className=' w-[95%]  bg-[#008d5f] mb-3 text-[16px] font-[800] active:opacity-30 text-[#fff] h-[45px] rounded-md'>
                Sign in
              </button>
            </div>
            <NavLink to={"/sign"} className=' text-center no-underline'>
              <p className='text-[#03acbb] p-2 font-[600] text-[13px] hover:underline cursor-pointer'>Don't have an account? Sign Up</p>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};
export default Login;