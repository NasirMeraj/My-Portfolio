import {
  Database,
  Server,
  Code2,
  Braces,
  GitBranch,
  Globe,
  Layers,
  Smartphone,
  Coffee
} from "lucide-react";

const skills = [
  {
    icon:<Code2/>,
    name:"C",
    level:"Addvanced",
    category:"Programming"
  },
  {
    icon:<Coffee/>,
    name:"OOPS Using Java",
    level:"Addvanced",
    category:"Concept & Programming"
  },
  {
    icon: <Code2 />,
    name: "Python",
    level: "Advanced",
    category: "Programming"
  },
  
  {
    icon: <Code2 />,
    name: "HTML5",
    level: "Advanced",
    category: "Frontend"
  },
  {
    icon: <Globe />,
    name: "CSS3",
    level: "Advanced",
    category: "Frontend"
  },
  {
    icon: <Braces />,
    name: "JavaScript",
    level: "Advanced",
    category: "Programming"
  },
  {
    icon: <Layers />,
    name: "React.js",
    level: "Advanced",
    category: "Frontend"
  },
  {
    icon: <Server />,
    name: "Node.js",
    level: "Intermediate",
    category: "Backend"
  },
  {
    icon: <Server />,
    name: "Express.js",
    level: "Intermediate",
    category: "Backend"
  },
  {
    icon: <Database />,
    name: "MongoDB",
    level: "Intermediate",
    category: "Database"
  },
  {
    icon: <GitBranch />,
    name: "Git & GitHub",
    level: "Intermediate",
    category: "Tools"
  },
  {
    icon: <Smartphone />,
    name: "Responsive Design",
    level: "Advanced",
    category: "Frontend"
  }
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">

        <div className="section-heading center">
          <span>02. MY SKILLS</span>
          <h2>Technologies I <strong>work with</strong></h2>
          <p>
            Tools and technologies I use to build modern full-stack
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-details">
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>

              <span className="skill-level">
                {skill.level}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;