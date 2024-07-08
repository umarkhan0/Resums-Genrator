import React, { useState, useEffect } from 'react';
import { signUp } from '../../redux/Features/auth/SignUp/Slice';
import ResponsiveAppBar from '../../componenets/header';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import roboImg from '../../images/beab049afb9f4a654f71eb8dd8164e15-removebg-preview.png';
import Footer from '../../componenets/footer';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
  let dispatch = useDispatch();
  const { isLoading, error, success } = useSelector((state) => state?.signUp);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    const credentials = { name: username, email, password };
    dispatch(signUp(credentials));
  
    if (typeof error === 'string') {
      const select = error.split(' ')[0];
  
      if (select === '"name"') {
        setNameError(error);
        document.getElementById("name-inp").focus();
      } else {
        setNameError("");
      }
  
      if (select === '"password"') {
        setPasswordError(error);
        document.getElementById("pass-inp").focus();
      } else {
        setPasswordError("");
      }
  
      if (error === 'Email is already registered.') {
        setEmailError("Already used Email");
        document.getElementById("mail-inp").focus();
      } else if (select === '"email"') {
        setEmailError(error);
        document.getElementById("mail-inp").focus();
      } else {
        setEmailError("");
      }
    }
  };
  

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
        <div className="mt-[25px] mb-[25px] flex justify-center items-center rounded-sm">
          <div className="shadow-lg login-container flex justify-center w-[550px]">
            <div className="flex flex-col">
              <div className="flex mt-7 justify-center items-center">
                <img className="h-14 w-14" src={roboImg} alt="robo img" />
              </div>
              <h1 className="text-center mb-[7px] font-black font-[raleway] text-[30px]">
                Welcome
              </h1>
              <p className="mb-[25px] text-[16px] font-normal text-center leading-3">
                Create your account
              </p>
              <div className='flex justify-center items-center'>
                <GoogleOAuthProvider
                  clientId="742252403958-odjbfog3o3j18gpp5bc95udqt0i2k9dg.apps.googleusercontent.com"
                >
                  <GoogleLogin
                    width={loginWidth}
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse.clientId);
                    
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </GoogleOAuthProvider>
              </div>
              <hr className="hr-text" data-content="OR" />
              <div className='mb-3 pl-1 pr-1'>
                <div>
                  <label htmlFor='name-inp' className='pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                    Your Name
                  </label>
                  <br />
                  <input
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    id='name-inp'
                    className={`mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${nameError ? 'border-red-500' : ''}`}
                    type='text'
                    placeholder='Enter Name'
                  />
                </div>
                <span className='pl-0.5 text-[#fb6565] text-[14px] font-[Raleway] leading-3'>
                  {nameError}
                </span>
              </div>

              <div className='mb-3 pl-1 pr-1'>
                <div>
                  <label htmlFor='mail-inp' className='pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                    Email address
                  </label>
                  <br />
                  <input onChange={e => setEmail(e.target.value)} value={email} id='mail-inp' className={`mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${emailError ? 'border-red-500' : ''}`} type='text' placeholder='Enter Email' />
                </div>
                <span className='pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
                  {emailError}
                </span>
              </div>

              <div className='mb-3 pl-1 pr-1'>
                <div>
                  <label htmlFor='pass-inp' className='pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                    Password
                  </label>
                  <br />
                  <input onChange={e => setPassword(e.target.value)} value={password} id='pass-inp' className={`mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${passwordError ? 'border-red-500' : ''}`} type='password' placeholder='Enter Password' />
                </div>
                <span className='pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
                  {passwordError}
                </span>
              </div>
              <div className='flex justify-center'>
                <button className='w-[95%] bg-[#008d5f] mb-3 text-[16px] font-[800] active:opacity-30 text-[#fff] h-[45px] rounded-md'>
                  Sign up
                </button>
              </div>
              <NavLink to={"/login"} className='text-center no-underline'>
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
