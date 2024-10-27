import express from "express";
const router = express.Router();

router.get("/signup",(req,res)=>{
    res.json("you hit the signup route")
});
export default router;
