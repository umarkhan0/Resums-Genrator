import express from "express";
const router = express.Router();
router.post("/", async (req, res) => {
    res.send("is verifed")

});
export default router;