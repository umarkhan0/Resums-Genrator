import ResponsiveAppBar from "../../componenets/header";
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from "axios";
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
const OTPverify = () => {
  const navigate = useNavigate()
  let email = localStorage.getItem("email")
let [seccessAlert  , setSuccessAkert] = useState(false)
  const reSentOtp = () => {
    axios.post("http://localhost:3000/api/reSentotp", {
      email
    }).then(response => {
      const {Message} = response.data
      if(Message == "user already verify"){
        setAlertText("Already Verifed");
        setSuccessAkert(true)
        setAlertShow(false)
      }else if (Message == "otp sent"){
        setAlertText("OTP has been Resent");
        setSuccessAkert(true)
        setAlertShow(false)
      }
      console.log(response.data.Message);
    }).catch(error => console.log(error))
  }
  const [seconds, setSeconds] = useState(60);
  const [alertShow, setAlertShow] = useState(false);
  const [alertText, setAlertText] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;


  const [otp, setOtp] = React.useState('');

  const verifyOTP = () => {
    axios.post('http://localhost:3000/api/verify', {
      email,
      OTP: otp
    }).then(response => {
      setAlertShow(false);
      localStorage.removeItem("email");
      localStorage.setItem("Sign" , response.data.token)
      navigate("/deshbord")
    })
      .catch(error => {
        console.log(error.response.data);
        if (error.response.data == false) {
          console.log("hahhh");
          setAlertText("Invalid OTP");
          setAlertShow(true)
        setSuccessAkert(false)
        }
        else if (error.response.data.message == "Time out") {
          setAlertShow(true);
        setSuccessAkert(false)
          setAlertText("OTP Expire")
        } else {
          setAlertShow(false);
        }
      })

    console.log(otp);

  };


  return (
    <div>
      <ResponsiveAppBar positionS={"relative"} />


      <div className="w-full flex justify-center h-full fixed items-center overflow-y-auto">

        <div className="w-96 shadow-md p-3 pageOtp m-3">

           <Stack sx={{ width: '100%', marginBottom: "13px" }} spacing={2}>
           {alertShow && <Alert severity="error">{alertText}
            </Alert> }
            {
              seccessAlert &&
              <Alert severity="success">{
                alertText
              }</Alert>}
          </Stack>
          <p className="text-center text-[#000] font-[raleway] font-semibold text-[20px]">Enter Your OTP</p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <span className=" flex justify-center">
                <input
                  {...props}
                  style={{
                    width: '65%',
                    height: '37px',
                    textAlign: "center",
                    borderRadius: "7px",
                    border: "1px solid #008d5f",
                    // padding: '15px',
                    fontFamily: "raleway",
                    fontSize: "20px",
                    fontWeight: 700,
                    outlineColor: "#008d5f",
                    backgroundColor: "#ffffff"
                  }}
                  inputmode="numeric"
                  pattern="\d*"
                  onKeyDown={(e) => {
                    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
                    if (!/\d/.test(e.key) && !allowedKeys.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </span>
            )}
          />

          <div className=" flex justify-center mt-3"><span className=" text-[#ffffff] px-2 py-1 bg-[#008d5f] rounded-md font-semibold cursor-pointer active:opacity-30" onClick={verifyOTP}>Verify me</span></div>
          <div className="flex mt-3 justify-center">
            {remainingSeconds < 0 ? <p onClick={() => {
              reSentOtp()
              setSeconds(10)
            }} className=" e cursor-pointer hover:underline active:opacity-25 font-semibold mr-3">ReSent OTP? </p>
              :
              <p className=" cursor-not-allowed font-semibold mr-3">ReSent OTP? </p>
            }
            <div>


              {minutes > -1 ? `0${minutes}` : "00"}:{

                remainingSeconds < 0 ? "00" : remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPverify;
