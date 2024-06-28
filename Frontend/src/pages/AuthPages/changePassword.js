import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../componenets/footer";
import ResponsiveAppBar from "../../componenets/header";
import roboImg from '../../images/beab049afb9f4a654f71eb8dd8164e15-removebg-preview.png';

let ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [oldPasswordError, setOldPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        let valid = true;

        if (!oldPassword) {
            setOldPasswordError("Old password is required");
            valid = false;
        } else {
            setOldPasswordError("");
        }

        if (!newPassword) {
            setNewPasswordError("New password is required");
            valid = false;
        } else if (newPassword.length < 6) {
            setNewPasswordError("Password must be at least 6 characters long");
            valid = false;
        } else {
            setNewPasswordError("");
        }

        if (!confirmPassword) {
            setConfirmPasswordError("Please confirm your new password");
            valid = false;
        } else if (confirmPassword !== newPassword) {
            setConfirmPasswordError("Passwords do not match");
            valid = false;
        } else {
            setConfirmPasswordError("");
        }

        return valid;
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform password reset logic
            console.log("Password reset successful", { oldPassword, newPassword, confirmPassword });
            // Navigate to another page or show a success message
        }
    };

    return (
        <div>
            <ResponsiveAppBar positionS={"relative"} />

            <form onSubmit={formSubmit}>
                <div className="mt-[25px] mb-[25px] flex justify-center items-center rounded-sm">
                    <div className="shadow-lg login-container flex justify-center w-[550px]">
                        <div className="flex flex-col w-[95%]">
                            <div className="flex mt-7 justify-center items-center">
                                <img className="h-14 w-14" src={roboImg} alt="robo img" />
                            </div>
                            <h1 className="text-center mb-[7px] font-black font-[raleway] text-[30px]">
                                Reset Password
                            </h1>

                            <hr className="hr-text" data-content="OR" />
                            <div className='mb-3 pl-1 pr-1 w-full'>
                                <div className="w-full">
                                    <label htmlFor='old-password' className='pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                                        Old Password
                                    </label>
                                    <br />
                                    <input
                                        onChange={e => setOldPassword(e.target.value)}
                                        value={oldPassword}
                                        id='old-password'
                                        className={`mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${oldPasswordError ? 'border-red-500' : ''}`}
                                        type='password'
                                        placeholder='Enter Old Password'
                                    />
                                </div>
                                <span className='pl-0.5 text-[#fb6565] text-[14px] font-[Raleway] leading-3'>
                                    {oldPasswordError}
                                </span>
                            </div>

                            <div className='mb-3 pl-1 pr-1'>
                                <div>
                                    <label htmlFor='new-password' className='pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                                        New Password
                                    </label>
                                    <br />
                                    <input
                                        onChange={e => setNewPassword(e.target.value)}
                                        value={newPassword}
                                        id='new-password'
                                        className={`mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${newPasswordError ? 'border-red-500' : ''}`}
                                        type='password'
                                        placeholder='Enter New Password'
                                    />
                                </div>
                                <span className='pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
                                    {newPasswordError}
                                </span>
                            </div>
                            <div className='mb-3 pl-1 pr-1'>
                                <div>
                                    <label htmlFor='confirm-password' className='pl-0.5 text-[14px] font-light min-h-[19px] font-[Raleway]'>
                                        Confirm New Password
                                    </label>
                                    <br />
                                    <input
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        value={confirmPassword}
                                        id='confirm-password'
                                        className={`mt-1 appearance-none rounded-md h-[40px] w-[100%] p-[8px] text-[14px] border outline-[#03acbb] font-[Raleway] ${confirmPasswordError ? 'border-red-500' : ''}`}
                                        type='password'
                                        placeholder='Confirm New Password'
                                    />
                                </div>
                                <span className='pl-0.5 text-[#fb6565] text-[14px] font-[Raleway]'>
                                    {confirmPasswordError}
                                </span>
                            </div>
                            <div className='flex justify-center'>
                                <button className='w-[95%] bg-[#008d5f] mb-3 text-[16px] font-[800] active:opacity-30 text-[#fff] h-[45px] rounded-md'>
                                    Continue
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

export default ChangePassword;
