import { useLocation } from "react-router-dom";
const Skills = () => {
    const location = useLocation();
    const experience = location.state.data;
    console.log(experience);
    return(
        <h1>
            hello
        </h1>
    );
};
export default Skills