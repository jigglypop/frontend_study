"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProfileSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    imageurl: { type: String },
    postlike: { type: [String], required: true },
    follower: { type: [String], required: true },
    following: { type: [String], required: true },
});
exports.default = mongoose_1.model('Profile', ProfileSchema);
