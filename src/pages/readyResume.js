import { useLocation } from "react-router-dom";

const ReadyResume = () => {
    const location = useLocation();
const daata = location.state.data
console.log(daata);
    return(
        <h1>
            Ready Resume
            </h1>
    )
};
export default ReadyResume;