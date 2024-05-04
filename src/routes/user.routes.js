import { Router } from "express";
import { loginUser, registerUser, logoutUser, profile } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    );
router.route("/login").post(loginUser)

//secured routes
router.route("/logout").get(verifyJWT, logoutUser)
router.route("/profile").get(verifyJWT, profile)




export default router;