import React, { useState } from "react";

const PortfolioBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    profileImage: "",
    skills: "",
    experience: "",
    projects: "",
    achievements:"",
    github:"",
    linkedin:"",
    coding:"",
  });

  const [hide, setHide] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    profileImage: false,
    skills: false,
    projects: false,
  
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    const { name, skills, profileImage, projects } = formData;

    // Validation
    const newErrors = {
      name: !name.trim(),
      profileImage: !profileImage.trim(),
      skills: !skills.trim(),
      projects: !projects.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).includes(true)) {
      alert("Name, Projects, Image URL, and Skills are mandatory");
      return;
    }

    setLoading(true);
    setHide(true);
    try {
      const response = await fetch(
        "https://cehpoint.onrender.com/api/portfolio/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      setHtmlContent(
        data.htmlContent || "<p>Failed to generate portfolio.</p>"
      );
    } catch (err) {
      console.error("Error generating portfolio:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-900">
      {!hide ? (
        <>
          <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
            ✨ AI Portfolio Builder
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-md border">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`w-full border p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.name}
              onChange={handleChange}
            />
             <input
              type="text"
              name="profileImage"
              placeholder="Enter your photo url"
              className={`w-full border p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.profileImage}
              onChange={handleChange}
            />
            <input
              type="text"
              name="github"
              placeholder="Your github link"
              className={`w-full border p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 ${
                errors.profileImage ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.github}
              onChange={handleChange}
            />
             <input
              type="text"
              name="linkedin"
              placeholder="Your linkedin URL"
              className={`w-full border p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 ${
                errors.profileImage ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.linkedin}
              onChange={handleChange}
            />
             <input
              type="text"
              name="coding"
              placeholder="Your coding profile url (if any)"
              className={`w-full border p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 ${
                errors.profileImage ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.coding}
              onChange={handleChange}
            />
            <textarea
              name="skills"
              placeholder="Skills (comma-separated)"
              rows={4}
              className={`w-full border p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 ${
                errors.skills ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.skills}
              onChange={handleChange}
            />
            <textarea
              name="experience"
              placeholder="Experience"
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2"
              value={formData.experience}
              onChange={handleChange}
            />
            <textarea
              name="projects"
              placeholder="Projects ((1st Project (title , Link)) , (2nd project (title , Link)).....)"
              rows={4}
              className={`w-full border p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 md:col-span-2 ${
                errors.projects ? "border-red-800" : "border-gray-300"
              }`}
              value={formData.projects}
              onChange={handleChange}
            />
              <textarea
              name="achievements"
              placeholder=" achievements (coding profile, hackathons)"
              rows={4}
              className={`w-full border p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 md:col-span-2 ${
                errors.projects ? "border-red-800" : "border-gray-300"
              }`}
              value={formData.achievements}
              onChange={handleChange}
            />
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleGenerate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Portfolio"}
            </button>
          </div>
        </>
      ) : loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Generating your awesome portfolio...
          </p>
        </div>
      ) : (
        htmlContent && (
          <div
            className="w-screen bg-white mt-[-65px] ml-[-250px] text-gray-800  overflow-hidden"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )
      )}
    </div>
  );
};

export default PortfolioBuilder;
