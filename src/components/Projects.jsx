import {
  Code2,
  ExternalLink,
  CloudSun,
  TicTacToe,
  Clapperboard,
} from "lucide-react";

const projects = [
  {
    title: "Cine-X Movies OTT Platform",
    description:"Cine-X is a full-stack OTT streaming platform built with React, Node.js, Express, and MongoDB, featuring movie streaming, authentication, resume playback, ratings, subscriptions, notifications, and an admin dashboard.",
    icon: <Clapperboard  />,
    tags: ["React", "Node.js", "MongoDB", "Mongoose","JWT","Cloudflare R2","Razorpay",],
    github: "https://github.com/NasirMeraj/-Cine-X",
    demo: "https://cine-x-frontend.onrender.com/"
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "The game tic tac toe allows players to take turns placing X and O on a 3×3 grid. It automatically detects winning combinations, draws.",
    icon: <TicTacToe />,
    tags: ["HtML","CSS","JavaScript"],
    github: "https://github.com/NasirMeraj/Javascript-Practice-Project/tree/main/tic-tac-toe",
    demo: "https://nasirmeraj.github.io/Javascript-Practice-Project/tic-tac-toe/"
  },
 
  {
    title: "Weather App",
    description:
      "A responsive weather application that displays real-time weather information using an API.",
    icon: <CloudSun />,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/NasirMeraj/Javascript-Practice-Project/tree/main/weather-app",
    demo: "https://nasirmeraj.github.io/Javascript-Practice-Project/weather-app/"
  }
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">

        <div className="projects-header">
          <div className="section-heading">
            <span>03. MY PROJECTS</span>
            <h2>Featured <strong>Projects</strong></h2>
          </div>

          <a
            href="https://github.com/nasirmeraj"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <Code2 size={18} />
            View GitHub
          </a>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article className="project-card" key={index}>

              <div className="project-top">
                <div className="project-icon">
                  {project.icon}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 size={19} />
                  </a>

                  <a href={project.demo}>
                    <ExternalLink size={19} />
                  </a>
                </div>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;