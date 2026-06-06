import resume from "./Resume.pdf";
import { useState } from "react";
import profile from "./saikiran.jpeg";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : "light"}> 
      <nav>
        <h1>My Portfolio</h1>
       <button onClick={() => setDarkMode(!darkMode)}>
  Toggle Dark Mode
</button>
        <p className="tagline">
  Full Stack Developer | React Learner | Tech Enthusiast
</p>

        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <hr />

      <h2>About Me</h2>
     <img src={profile} alt="profile" className="profile-image" />

<p>
  Hello, I am Saikiran and I am learning Full Stack Development.
</p>

<a href={resume} download>
  <button>Download Resume</button>
</a>
      <h2>Skills</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      <h2>Projects</h2>

     <div className="project-card">
  <h3>Portfolio Website</h3>

  <p>This is my first React project.</p>
</div>

<div className="project-card">
  <h3>Weather App</h3>

  <p>A simple weather checking application.</p>
</div>

      <h2>Contact</h2>
<div className="contact-box">
      <p>Email: saikiran@gmail.com</p>
><p>
  LinkedIn:
  <a
    href="https://www.linkedin.com/in/saikiran-nagelli-5889a1377"
    target="_blank" rel="noreferrer"
  >
    My LinkedIn
  </a>
</p>

<p>
  GitHub:
  <a
    href="https://github.com/Saikiranb24cs177"
    target="_blank"  rel="noreferrer"
  >
    My GitHub
  </a>
</p>
  </div>
  
  <footer>
  <p>© 2026 Saikiran Portfolio. All Rights Reserved.</p>
</footer>
    </div>
  );
}



export default App;