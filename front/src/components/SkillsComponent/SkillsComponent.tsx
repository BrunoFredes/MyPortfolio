import "./SkillsComponent.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiDotnet,
  SiPython,
  SiMysql,
 
} from "react-icons/si";


const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <SiJavascript /> },
  { name: "C#", icon: <SiDotnet /> },
  { name: "ASP.NET", icon: <SiDotnet /> },
  { name: "Python", icon: <SiPython /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "MySql", icon: <SiMysql/> }
];

function SkillsComponent() {
  return (
    <section
      id="skills"
      className="skills"
    >

      <h2>
        Habilidades
      </h2>

      <div className="section-line"></div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <p>
              {skill.name}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SkillsComponent;