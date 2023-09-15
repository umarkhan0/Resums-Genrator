import {BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Basic from '../pages/home';
import Intro from '../pages/Intro';
import BuilderForm from '../pages/builder';
let AppRouter = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Basic/>}></Route>
            <Route path='/intro' element={<Intro/>}></Route>
            <Route path='/builder' element={<BuilderForm/>}></Route>

        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter