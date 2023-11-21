import {BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Basic from '../pages/home';
import Education from '../pages/education';
import Skills from '../pages/skill';
import Intro from '../pages/Intro';
import BuilderForm from '../pages/builder';
import Language from '../pages/lenguage';
import { Experience } from '../pages/experience';
import Sumrry from '../pages/sumrry';
import EductionTips from '../pages/education-tips';
import ExperienceTips from '../pages/experience-tips';
import SkillsTips from '../pages/skills-tips';
import SummaryTips from '../pages/summary-tips';
import ReadyResume from '../pages/readyResume';
import Login from '../pages/login';
import PDFunc from '../pages/PDF';
let AppRouter = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Basic/>}></Route>
            <Route path='/intro' element={<Intro/>}></Route>
            <Route path='/builder' element={<BuilderForm/>}></Route>
            <Route path='/experience' element={<Experience/>}></Route>
            <Route path='/education' element={<Education/>}></Route>
            <Route path='/education/language' element={<Language/>}></Route>
            <Route path='/education/language' element={<Language/>}></Route>
            <Route path='/summary' element={<Sumrry/>}></Route>
            <Route path='/experience-tips' element={<ExperienceTips/>}></Route>
            <Route path='/education-tips' element={<EductionTips/>}></Route>
            <Route path='/skill-tips' element={<SkillsTips/>}></Route>
            <Route path='/summary-tips' element={<SummaryTips/>}></Route>
            <Route path='/ready' element={<ReadyResume/>}></Route>
            <Route path='/login' element={<Login/>}></Route>


            <Route path='/skills' element={<Skills/>}></Route>



        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter