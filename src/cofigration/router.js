import {BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Basic from '../pages/home';
import SecondExperience from '../pages/secondexperiense';
import Intro from '../pages/Intro';
import BuilderForm from '../pages/builder';
import { Experience } from '../pages/experience';
let AppRouter = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Basic/>}></Route>
            <Route path='/intro' element={<Intro/>}></Route>
            <Route path='/builder' element={<BuilderForm/>}></Route>
            <Route path='/experience' element={<Experience/>}></Route>
            <Route path='/secondexperience' element={<SecondExperience/>}></Route>



        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter