import  jwt  from "jsonwebtoken";
import "dotenv/config"
const verifyToken = (request , response , next) => {
    const {authorization} = request.headers;
    const token = authorization?.split(" ")[1];
    jwt.verify(token , process.env.JWT_SECRET, function(err , decoded){
        if(err){
     return response.status(400).send({ err});
        }else{
            return next();
        }
    })
}
export default verifyToken;