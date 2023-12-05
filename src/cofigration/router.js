import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Basic from '../pages/home';
import Education from '../pages/education';
import Skills from '../pages/skill';
import Intro from '../pages/Intro';
import BuilderForm from '../pages/builder';
import NotFound from '../pages/NotFound';
import Language from '../pages/lenguage';
import { Experience } from '../pages/experience';
import Sumrry from '../pages/sumrry';
import EductionTips from '../pages/education-tips';
import ExperienceTips from '../pages/experience-tips';
import SkillsTips from '../pages/skills-tips';
import SummaryTips from '../pages/summary-tips';
import ReadyResume from '../pages/readyResume';
import Login from '../pages/login';
import SignUp from '../pages/SignUpP';
import PDFunc from '../pages/PDF';
import Deshbord from '../pages/dhesbord';
import OTPverify from '../pages/otpverify';
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
                <Route path='/ready' element={<PDFunc />}></Route>
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