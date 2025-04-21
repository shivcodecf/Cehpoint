const generateHTML = ({ name, skills, experience, profileImage, projects }) => {
  return `
You are a portfolio website generator.

Generate a **fully responsive**, **modern**, and **professional** portfolio website using **pure HTML, CSS (inside a <style> tag)**, and **JavaScript (inside a <script> tag)**.

Use the following user data:
- Name: ${name}
- Profile Image URL: ${profileImage}
- Skills: ${skills} (each with an icon using Font Awesome)
- Experience: ${experience}
- Projects: ${projects} (each with a title and description)

Your output must be a **complete HTML document** that includes:
- <html>, <head>, and <body> tags
- All CSS inside a single <style> tag in <head>
- All JavaScript inside a <script> tag at the end of <body>

Strict requirements:

---

### 🧩 Layout & Design

- Use full screen width (no max-width or container).
- The heading must be bold
- Must have no overflow on the x-axis.
- No default margin/padding (unless added in CSS).
- Use a clean, professional font like 'Inter', 'Roboto', or 'Open Sans'.
- Visually distinct background color for each section (Hero, About, Skills, Projects, Contact, Footer).
- Use good spacing and styling between sections.
- Portfolio must be clean, modern, and visually pleasing.
- The whole website must responsive.

---

### 🔥 Functional Features (Use JavaScript)


- Smooth scroll when clicking navbar links.
- Highlight **active navbar link** when scrolling.
- Contact form should show an alert "Contact you soon!" when submit is clicked.

---

### 🧱 Structure to Include

1. **Navbar**
   - Left side: user name
   - Right side: Links to About, Skills, Projects, Contact
   - Smooth scrolling and active link highlighting

2. **Hero/About Section**
   - Centered circular profile image
   - Image must be centered horizontally
   - Bold, centered user name and experience text

3. **Skills Section**
   - Responsive flex or grid layout
   - Display each skill with a Font Awesome icon

4. **Projects Section**
   - Display each project in a card with shadow
   - Title and description for each

5. **Contact Section**
   - Input fields: Name, Email, Message
   - Submit button shows alert
   - On clicking submit shows alert "submitted successfully" hit
   - On clicking submit the page must not refresh

6. **Footer**
   - Simple and clean footer with background color

---

### 🧠 Additional Notes

- No unnecessary text, code, or comments.
- No external files – include everything inline.
- No max-width containers – use full screen width.
- Do not use frameworks like Bootstrap or Tailwind.
- Output should be valid and clean HTML, CSS, and JavaScript.

Only return the complete HTML output.
  `;
};

export default generateHTML;
