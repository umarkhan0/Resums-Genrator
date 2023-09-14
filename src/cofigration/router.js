import {BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Basic from '../pages/home';
let AppRouter = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Basic/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter