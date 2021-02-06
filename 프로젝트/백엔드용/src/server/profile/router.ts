import express from "express";
import { readProfile } from './controller'
const router = express.Router();

router.get("/:id", readProfile);

export = router;