import express from "express";
import checkLoggedIn from "../lib/checkLoggedIn";
import { follow } from './controller'
const router = express.Router();

router.get("/:myId/:yourId", checkLoggedIn,  follow);

export = router;