import express from "express";
import {signUp} from '../controlles/auth.js'
const router = express.Router();

router.get("/signup",signUp);
export default router;
