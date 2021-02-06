import express from "express";
import checkLoggedIn from "../lib/checkLoggedIn";
import checkOwnRecomment from "../lib/checkOwnRecomment";
import getCommentById from "../lib/getCommentById";
import getReCommentById from "../lib/getReCommentById";
import { writeRecomment, removeRecomment } from './controller'

const router = express.Router();

router.post("/:postId/:commentId", getCommentById, checkLoggedIn, writeRecomment);
router.delete("/:postId/:commentId/:recommentId", getReCommentById, checkLoggedIn, checkOwnRecomment, removeRecomment);

export = router;