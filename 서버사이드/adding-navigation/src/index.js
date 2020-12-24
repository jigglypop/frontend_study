import express from "express";
import React from "react";
import Home from "./client/components/Home";
import { renderToString } from "react-dom/server";
import renderer from "./helpers/renderer";

const app = express();
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
