// const mongoose = require("mongoose");

// const PortfolioSchema = new mongoose.Schema({
//   name: String,
//   skills: String,
//   experience: String,
//   markdown: String,
// }, { timestamps: true });

// module.exports = mongoose.model("Portfolio", PortfolioSchema);

import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  name: String,
  skills: String,
  github:String,
  linkedin:String,
  coding:String,
  experience: String,
  profileImage: String,
  projects: String,
  achievements: String,
  htmlContent: String,
});

export default mongoose.model("Portfolio", portfolioSchema);
