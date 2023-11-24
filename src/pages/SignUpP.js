import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from '../componenets/header';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import roboImg from '../images/beab049afb9f4a654f71eb8dd8164e15-removebg-preview.png';
import { jwtDecode } from 'jwt-decode';
import Footer from '../componenets/footer';
import { NavLink } from 'react-router-dom';
import Login from './login';
const SignUp = () => {
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
            <div className=' mb-6 pl-1 pr-1'>
  <label htmlFor='mail-inp' className=' pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
  Your Name
  </label>
  <br />
  <input id='mail-inp' className=' mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb]   font-[Raleway]' type='email' placeholder='Enter Email' />
  <span className=' pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
  Please enter correct username
  </span>
</div>
<div className=' mb-6 pl-1 pr-1'>
  <label htmlFor='mail-inp' className=' pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
  Email address
  </label>
  <br />
  <input id='mail-inp' className=' mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb]   font-[Raleway]' type='email' placeholder='Enter Email' />
  <span className=' pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
  Please enter correct username
  </span>
</div>
<div className=' mb-6 pl-1 pr-1'>
  <label htmlFor='pass-inp' className=' pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
  Password
  </label>
  <br />
  <input id='pass-inp' className=' mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb]   font-[Raleway]' type='password' placeholder='Enter Password' />
  <span className=' pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
  Password is required.
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
      <Footer />
    </div>
    
  );
};

export default SignUp;
