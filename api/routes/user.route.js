import express from "express";
import { tst } from "../controllers/users.controllers.js";

const router = express.Router();
router.get('/tmp',tst);
export default router