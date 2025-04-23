import Portfolio from "../models/Portfolio.js";
import generateHTML from "../utils/generateHTML.js";
import fetch from "node-fetch";

export const generatePortfolio = async (req, res) => {
  const { name, skills, experience, profileImage, projects, achievements,github,linkedin,coding} = req.body;

  const prompt = generateHTML({
    name,
    skills,
    experience,
    profileImage,
    projects,
    achievements,
    github,
    linkedin,
    coding,
  });

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await geminiRes.json();

    const htmlContent =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "<h2>Failed to generate.</h2>";

    const newPortfolio = new Portfolio({
      name,
      skills,
      github,
      linkedin,
      coding,
      experience,
      profileImage,
      projects,
      achievements,

      htmlContent,
    });

    await newPortfolio.save();

    res.json({ htmlContent });


  } catch (err) {
    console.error("Error generating portfolio:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
