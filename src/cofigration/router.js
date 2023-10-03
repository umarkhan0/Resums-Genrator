import {BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Basic from '../pages/home';
import Education from '../pages/education';
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
            <Route path='/education' element={<Education/>}></Route>



        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter