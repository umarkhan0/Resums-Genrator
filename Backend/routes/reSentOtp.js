import express from "express";
const router = express.Router();
import OTP from "../models/otp.js";
import User from "../models/user.js";
import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';
router.post('/', async (req, res) => {
    const DateTime = (servertimeStemp) => {
        const localDateTimeString = servertimeStemp;
        const localDateTime = new Date(localDateTimeString);
        const targetTimeZone = "Asia/Kolkata"; 
        const options = { timeZone: targetTimeZone };
        const formattedDate = localDateTime.toLocaleDateString('en-US', options);
        return formattedDate
      }
try{
    const user = await User.findOne({ email: req.body.email });
    const sendVerifyMail = async (name, email, otp, time) => {
        console.log(time);
        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: 'umaraamir959@gmail.com',
              pass: process.env.APP_PASS
            }
          });
      
          const info = {
            from: `"Resums-Genrator 👻" <${process.env.EMAIL_USERNAME}>`,
            to: email,
            subject: 'Your login verification code',
            html: `
            <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          
      
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          style="
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: #ffffff;
            font-size: 14px;
          "
        >
          <div
            style="
              max-width: 680px;
              margin: 0 auto;
              padding: 45px 30px 60px;
              background: #f4f7ff;
              background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
              background-repeat: no-repeat;
              background-size: 800px 452px;
              background-position: top center;
              font-size: 14px;
              color: #434343;
            "
          >
            <header>
              <table style="width: 100%;">
                <tbody>
                  <tr style="height: 0;">
                    <td>
                      <img
                        alt=""
                        src="https://www.resumenerd.com/blog/wp-content/uploads/2020/02/The-Career-Shift-Resume-06.png"
                        height="80px"
                      />
                    </td>
                    <td style="text-align: right;">
                      <span
                        style="font-size: 16px; line-height: 30px; color: #ffffff;"
                        >${DateTime(time)}</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </header>
      
            <main>
              <div
                style="
                  margin: 0;
                  padding: 92px 30px 115px;
                  margin-top: 30px;
                  background: #ffffff;
                  border-radius: 30px;
                  text-align: center;
                "
              >
                <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                  <h1
                    style="
                      margin: 0;
                      font-size: 24px;
                      font-weight: 500;
                      color: #1f1f1f;
                    "
                  >
                    Your OTP
                  </h1>
                  <p
                    style="
                      margin: 0;
                      margin-top: 17px;
                      font-size: 16px;
                      font-weight: 500;
                    "
                  >
                    Hey ${name},
                  </p>
                  <p
                    style="
                      margin: 0;
                      margin-top: 17px;
                      font-weight: 500;
                      letter-spacing: 0.56px;
                    "
                  >
                    Thank you for choosing Archisketch Company. Use the following OTP
                    to complete the procedure to change your email address. OTP is
                    valid for
                    <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.
                    Do not share this code with others.
                  </p>
                  <p
                    style="
                      margin: 0;
                      margin-top: 60px;
                      font-size: 40px;
                      font-weight: 600;
                      letter-spacing: 25px;
                      color: #ba3d4f;
                    "
                  >
                    ${otp}
                  </p>
                </div>
              </div>
      
              <p
                style="
                  max-width: 400px;
                  margin: 0 auto;
                  margin-top: 90px;
                  text-align: center;
                  font-weight: 500;
                  color: #8c8c8c;
                "
              >
                Need help? Ask at
                <a
                  href="mailto:umaraamir959@gmail.com"
                  style="color: #499fb6; text-decoration: none;"
                  >umaraamir959@gmail.com</a
                >
              
              
              </p>
            </main>
      
            <footer
              style="
                width: 100%;
                max-width: 490px;
                margin: 20px auto 0;
                text-align: center;
                border-top: 1px solid #e6ebf1;
              "
            >
              <p
                style="
                  margin: 0;
                  margin-top: 40px;
                  font-size: 16px;
                  font-weight: 600;
                  color: #434343;
                "
              >
                DivOpsInnovators Company
              </p>
              <div style="margin: 0; margin-top: 16px;">
                <a href="https://www.facebook.com/profile.php?id=100085465336618" target="_blank" style="display: inline-block;">
                  <img
                    width="36px"
                    alt="Facebook"
                    src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/umar-khan-06a7ba265"
                  target="_blank"
                  style="display: inline-block; margin-left: 8px;"
                >
                  <img
                    width="36px"
                    alt="Instagram"
                    src="https://tse3.mm.bing.net/th?id=OIP.VArJwZMxFN-qHnD8Xue-QAHaHa&pid=Api&P=0&h=220"
                /></a>
                
                <a
                  href="https://www.youtube.com/channel/UCaTekAEKySoqWmWk3MQYlRQ"
                  target="_blank"
                  style="display: inline-block; margin-left: 8px;"
                >
                  <img
                    width="36px"
                    alt="Youtube"
                    src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
                /></a>
              </div>
              <p style="margin: 0; margin-top: 16px; color: #434343;">
                Copyright © 2022 Company. All rights reserved.
              </p>
            </footer>
          </div>
        </body>
      </html>
      
            `
          };
      
          const result = await transporter.sendMail(info);
          console.log('Email has been sent:', result.response);
        } catch (err) {
          console.error('Error sending email:', err);
        }
      };
    let vrifycode = otpGenerator.generate(5, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
      const userOtp = new OTP({ email: req.body.email, otp: vrifycode });
      await userOtp.save();
   !user?.vrify && res.status(200).send({ status_code: 200, Message: "otp sent"});
    user?.vrify ? res.status(200).send({ status_code: 200, Message: "user already verify"}) : sendVerifyMail(user.name, user.email, userOtp.otp, userOtp.createdAt)
    // const users = await User.findOne({ email: req.body.email });

}catch(err){
    res.status(400).send({
        Message: err.Message
    });

    console.log(err);
}
});
export default router;