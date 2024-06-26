import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Basic from '../pages/Home/home.js';
import Education from '../pages/FormPages/education';
import Skills from '../pages/FormPages/skill.js';
import Intro from '../pages/TipsPages/Intro.js';
import BuilderForm from '../pages/FormPages/builder.js';
import NotFound from '../pages/NotFound';
import Language from '../pages/FormPages/lenguage.js';
import { Experience } from '../pages/FormPages/experience.js';
import Sumrry from '../pages/FormPages/sumrry';
import EductionTips from '../pages/TipsPages/education-tips.js';
import ExperienceTips from '../pages/TipsPages/experience-tips.js';
import SkillsTips from '../pages/TipsPages/skills-tips.js';
import SummaryTips from '../pages/TipsPages/summary-tips.js';
import Login from '../pages/AuthPages/login.js';
import SignUp from '../pages/AuthPages/SignUpP';
import PDFunc from '../pages/PDF';
import Deshbord from '../pages/Dashbord/dhesbord.js';
import OTPverify from '../pages/AuthPages/otpverify';
import PDFSec from '../pages/secondPDF.js';
let AppRouter = () => {
    let otpCheck = localStorage.getItem("email");
    let Sign = localStorage.getItem("Sign");
    console.log(window.location.pathname);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Basic />}></Route>
                <Route path='/intro' element={<Intro />}></Route>
                <Route path='/builder' element={<BuilderForm />}></Route>
                <Route path='/experience' element={<Experience />}></Route>
                <Route path='/education' element={<Education />}></Route>
                <Route path='/education/language' element={<Language />}></Route>
                <Route path='/summary' element={<Sumrry />}></Route>
                <Route path="*" element={<NotFound />} />
                <Route path='/experience-tips' element={<ExperienceTips />}></Route>
                <Route path='/education-tips' element={<EductionTips />}></Route>
                <Route path='/skill-tips' element={<SkillsTips />}></Route>
                <Route path='/summary-tips' element={<SummaryTips />}></Route>
                <Route path='/ready' element={<PDFSec />}></Route>
                <Route path='/login' element={Sign ? <Navigate to={"/deshbord"} /> : <Login />}></Route>
                <Route path='/sign' element={Sign ? <Navigate to={"/deshbord"} /> : <SignUp />}></Route>
                {<Route path='/otp' element={otpCheck ? <OTPverify /> : <Navigate to={"/sign"} />}></Route>}
                <Route path='/skills' element={<Skills />}></Route>
                <Route path='/deshbord' element={<Deshbord />}></Route>



            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter