import './App.css';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';

function App() {
  // Initialize theme from localStorage or browser preference
  
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">RS.</div>
        <ul className="nav-links">
          <li><a href="#projects">projects</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#contact">contact </a></li>
  
        </ul>
      </nav>

      {/* Header/Intro Section */}
      <header className="header">
        <h1>Hi, I am <span>Rudrakshala Surya</span>.</h1>
        <h2>A Front End Developer.</h2>
        <p>A student passionate about designing, developing, and exploring.</p>
        <div className="social-links">
          <a href="https://github.com/SuryaRudrakshala" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/surya-rudrakshala-4867a0283/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://leetcode.com/u/RUDRAKSHALA/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaCode className="icon" />
          </a>
          <a href="mailto:suryarudrakshala10@gmailc.om" className="social-link">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm Rudrakshala Surya, a passionate web developer currently pursuing my 3rd year Bachelor's degree 
          in G. Pulla Reddy Engineering College with a CGPA of 9.4. I specialize in React, CSS, and building 
          projects that blend functionality with aesthetics.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <span className="skill-item">React</span>
          <span className="skill-item">JavaScript</span>
          <span className="skill-item">CSS</span>
          <span className="skill-item">HTML</span>
          <span className="skill-item">GitHub</span>
          <span className="skill-item">Data Structures</span>
          <span className="skill-item">Java</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Tic-Tac-Toe</h3>
            <p>A classic two-player game built using React that lets users compete, track turns, and restart.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
          <div className="project-item">
            <h3>Memory-Matrix</h3>
            <p>Challenge your visual memory by memorizing and recreating a pattern of squares round by round.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
          <div className="project-item">
            <h3>Instant-Task-Tracker</h3>
            <p>Manage tasks efficiently with a clean UI, Pomodoro timer, and real-time progress tracking.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        </div>
      </section>
  
      {/* Certifications Section */}
      <section className="certifications">
        <h2>Certifications</h2>
        <div className="certifications-list">
          <div className="certification-item">
            <h3>XR MONK Certification</h3>
            <p>GPREC, 2024</p>
            <a href="https://drive.google.com/file/d/1wXIJQlQM2dH6CtDhqi0BnMpi2i3xt987/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="project-link">
              View Certificate
            </a>
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <footer className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>
          <a href="https://www.linkedin.com/in/surya-rudrakshala-4867a0283/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin className="contact-icon" /> LinkedIn
          </a> | 
          <a href="https://github.com/SuryaRudrakshala" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub className="contact-icon" /> GitHub
          </a> | 
          <a href="https://leetcode.com/u/RUDRAKSHALA/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaCode className="contact-icon" /> LeetCode
          </a> | 
          <a href="mailto:suryarudrakshala10@gmail.com" className="contact-link">
            <FaEnvelope className="contact-icon" /> Email
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;