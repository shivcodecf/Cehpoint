const generateHTML = ({ name, skills, experience, profileImage, projects }) => {
    return `
  You are a portfolio website generator. Create a modern, responsive, and professional HTML + CSS portfolio page using the following data:
  
  Name: ${name}
  Profile Image: ${profileImage}
  Skills: ${skills}
  Experience: ${experience}
  Projects: ${projects}
  
  Requirements:
  
  - looks like professional portfolio.
- There should no overflow on x-axis.
- The must not any unwanted text
- The heading must in bold and must be in center.
- The image must be on center.
- The User name must On left side of Navbar
- The skills must be displayed with respective icons.
- Add cool Contact section also
- The page must fully responsive
- there  should not any margin and padding
- No margin from top 
- The Projects Cards should be shadow
- The portfolio should use the full screen width (no max-width or centered container).
- Use visually pleasing background colors for different sections to create contrast.
- Each section (Header, About, Skills, Projects, Footer) should be well-spaced and styled.
- Use a clean, readable, professional font (like 'Inter', 'Open Sans', or 'Roboto').
- Display the profile image in the center, circular, and styled properly.
- In Contact Section the user input Name , Email and Message.
- On Clicking Submit Button in Contact Section the message "Contact You soon"  displayed
- Use proper background color in each section.
- The each elemets loooks good.
- proper color should be there.
- Looks neat and clean.
- Use inline CSS or include <style> inside the <head>.
- Use clean and readable fonts.
- Use responsive layout.
- Show profile image at the mid horizontally.

- Display each project with title and description.
- Add a modern header with name and section titles.
- Do not include script tags or JavaScript.
- Display Projects section in the form of card
- Display skills section with icon.
- the portfoilio takes whole screen width.
- Only return the complete HTML including <html>, <head>, and <body>.
  `;
  };
  
  export default generateHTML;
  