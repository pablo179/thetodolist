import { Router } from "express";
import { register } from "../controllers/auth.controller";

const router: Router = Router();

router.post("/signup", register);

export default router;
