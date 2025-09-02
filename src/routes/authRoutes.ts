import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { getUsers } from "../controllers/getUsers.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", getUsers);

export default router;
