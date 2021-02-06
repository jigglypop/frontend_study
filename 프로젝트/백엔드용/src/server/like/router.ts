import express from "express";
import checkLoggedIn from "../lib/checkLoggedIn";
import { like } from './controller'
const router = express.Router();

router.get("/:postId/:profileId", checkLoggedIn,  like);

export = router;