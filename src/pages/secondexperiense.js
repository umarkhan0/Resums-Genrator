import { useLocation } from "react-router-dom"
const SecondExperience = () => {
    const location = useLocation();
  const experience = location.state.data;
  console.log(experience)
    return(
        <h1>
            Second Experience
        </h1>
    )
}
export default SecondExperience