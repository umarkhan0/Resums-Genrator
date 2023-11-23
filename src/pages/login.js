import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from '../componenets/header';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import roboImg from '../images/beab049afb9f4a654f71eb8dd8164e15-removebg-preview.png';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [loginWidth, setLoginWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setLoginWidth(screenWidth <= 405 ? 200 : 300);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <ResponsiveAppBar />
      <div className=" mt-20 flex justify-center items-center">
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
            <div className=" w-3/4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
