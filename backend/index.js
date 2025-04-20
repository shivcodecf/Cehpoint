import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

import Portfolio from "./models/Portfolio.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


app.post("/api/portfolio/generate", async (req, res) => {
  const { name, skills, experience, profileImage, projects } = req.body;

  const prompt = `
You are a portfolio website generator. Create a modern, responsive, and professional HTML + CSS portfolio page using the following data:

Name: ${name}
Profile Image: ${profileImage}
Skills: ${skills}
Experience: ${experience}
Projects: ${projects}

Requirements:

- looks like professional portfolio.
- There should no overflow on x-axis.
- The heading must in bold and must be in center.
- The image must be on center horizontally.
- The User name must On left side of Navbar
- The skills must be displayed with respective icons.
- Add cool Contact section also
- The page must fully responsive
- there  should not any margin and padding
- No margin from top
- The portfolio should use the full screen width (no max-width or centered container).
- Use visually pleasing background colors for different sections to create contrast.
- Each section (Header, About, Skills, Projects, Footer) should be well-spaced and styled.
- Use a clean, readable, professional font (like 'Inter', 'Open Sans', or 'Roboto').
- Display the profile image in the center, circular, and styled properly.
- In Contact Section the user input Name , Email and Message.
- Use proper background color in each section.
- The each elemets loooks good.
- proper color should be there.
- Looks neat and clean.
- Use inline CSS or include <style> inside the <head>.
- Use clean and readable fonts.
- Use responsive layout.
- Show profile image at the mid horizontally.
- List skills as bullet points.
- Display each project with title and description.
- Add a modern header with name and section titles.
- Do not include script tags or JavaScript.
- Display Projects section in the form of card
- Display skills section with icon.
- the portfoilio takes whole screen width.
- Only return the complete HTML including <html>, <head>, and <body>.

`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        }),
      }
    );

    const data = await geminiRes.json();
    const htmlContent = data?.candidates?.[0]?.content?.parts?.[0]?.text || "<h2>Failed to generate.</h2>";

    // Save to DB
    const newPortfolio = new Portfolio({ name, skills, experience, profileImage, projects, htmlContent });
    await newPortfolio.save();

    res.json({ htmlContent });
  } catch (err) {
    console.error("Error generating portfolio:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
