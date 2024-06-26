import express from "express";
import verifyToken from "../middlewere/verifyToken.js";
import User from "../models/user.js";
const router = express.Router();
router.get( "/" , verifyToken , async (request , response) => {
const users = await User.find({});
response.status(200).send({user: users})
});
export default router