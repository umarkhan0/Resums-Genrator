import express from "express";
const router = express.Router();
import Joi from "joi";
import  Jwt  from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcrypt"
const userSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required().min(6)
});
router.post("/", async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) {
          res.status(400).send({ message: error.details[0].message });
        } else {
        const {email , password} = req.body;
            const user = await User.findOne({email: email}).then(res => res.toObject())
            if(!user){
            return res.status(200).send({status_code: 401,  message: "user not found"})
            }else{


const compare = await bcrypt.compare(password , user.password)
if(compare){

const token = Jwt.sign({_id: user._id , password: user.password} , process.env.JWT_SECRET);
delete user.password;
            return res.status(200).send({status_code: 200,  messege: "sucess" , token ,  user: user})
}else{
    return res.status(403).send({status_code: 403, user: "Rong Password"});
}
            }
        }
    }
    catch (err) {
        res.status(400).send({ status_code: 400,  messge: err.message})
    };
});
export default router;
