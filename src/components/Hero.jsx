import {
  ArrowRight,
  Download,
  Mail,
  Code2
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-orb orb-one"></div>
      <div className="hero-orb orb-two"></div>

      <div className="hero-container">

        <div className="hero-content">
          <div className="availability">
            <span></span>
            Available for opportunities
          </div>

          <p className="hero-intro">Hi, I'm</p>

          <h1>
            Nasir <span>Meraj</span>
          </h1>

          <h2>
            MERN Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications
            using MongoDB, Express.js, React and Node.js. I love
            transforming ideas into clean and powerful digital products.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
              <ArrowRight size={19} />
            </a>

            <a href="/resume.pdf" download className="secondary-btn">
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/nasirmeraj"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/nasir-meraj-6a9663339?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Code2 size={21} />
            </a>

            <a href="mailto:nasirmeraj69@gmail.com" aria-label="Email">
              <Mail size={21} />
            </a>
          </div>
        </div>

        <div className="hero-visual">

          <div className="profile-wrapper">
            <div className="profile-glow"></div>

            <div className="profile-card">
              <img
                src={`${process.env.PUBLIC_URL}/profile.png`}
                alt="Nasir Meraj"
                className="profile-image"
              />
            </div>
          </div>

          {/* <div className="code-card">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <Terminal size={16} />
            </div>

            <pre>
{`const developer = {
  name: "Nasir Meraj",
  role: "MERN Developer",
  skills: [
    "React",
    "Node.js",
    "Express",
    "MongoDB"
  ],
  passion: "Building great apps"
};

console.log("Let's build!");`}
            </pre>
          </div> */}

        </div>

      </div>
    </section>
  );
}

export default Hero;