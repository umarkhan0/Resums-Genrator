import express from "express";
const router  = express.Router();
import postReq from "./signUp.js";
import getAllusers from "./alluserget.js"
import putReq from "./login.js";
import verify from "./optvalidate.js";
import alldata from "./alldataResumepost.js"
import resendOtp from "./reSentOtp.js"
import secStep from "./2Stepauth.js"
import OTPValidate from "./optvalidate.js";
router.use("/login" , putReq);
router.use("/secStep" , secStep);
router.use("/verify" , verify);
router.use("/signup" , postReq);
router.use("/otpValidate" , OTPValidate);
// console.log(req.url);
router.use("/allpost" , alldata);
router.use("/reSentotp" , resendOtp);
router.use("/allget" , getAllusers);
export default router;