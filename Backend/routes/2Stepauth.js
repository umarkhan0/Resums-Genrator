import express from "express";
const router = express.Router();
import User from '../models/user.js';
import { jwtDecode } from "jwt-decode";
router.post("/", async (req, res) => {
   try {
      const token = req.body.token;
      const decoded = jwtDecode(token);

      const existingUser = await User.findOne({ _id: decoded._id });
      let { _id, password } = existingUser;
      if (password == decoded.password && _id == decoded._id) {
         res.status(200).send(true)
      } else {
         res.status(400).send(false)
      }

   } catch (err) {
      res.status(400).send({ status_code: 400, messge: "token invalid" })
   };
});
export default router;