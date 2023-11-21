import { useLocation } from "react-router-dom";
import axios from "axios";
const ReadyResume = () => {
    const location = useLocation();
const daata = location.state.data
console.log(daata);
axios.post('http://localhost:3000/api/allpost?key=123', {
    daata
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    return(
        <h1>
            Ready Resume
            </h1>
    )
};
export default ReadyResume;