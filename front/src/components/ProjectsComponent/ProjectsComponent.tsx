import { useState } from "react";
import { useEffect } from "react";
import "./ProjectsComponent.css";
import JiraChillImage from "../../assets/JiraChill.png";
import LandingPageImage from "../../assets/lis-pagina.jpg";
import lisfullpage from "../../assets/lis-fulpage.jpeg";




const projects = [
  
  

  {
    title: "Kiosko Manager",
    image: "https://via.placeholder.com/400x200",
    fullpage: "https://via.placeholder.com/800x400",
    description:
      "Sistema de gestión de stock, ventas y productos desarrollado con ASP.NET, PostgreSQL y React.",
    technologies:
      "C# • ASP.NET • PostgreSQL • React",
  },

  {
    title: "Jira-Chill-Project",
    image: JiraChillImage,
    fullpage: JiraChillImage,
    description:
      "Aplicación de gestión de tareas inspirada en Jira con autenticación y CRUD completo.",
    technologies:
      "React • TypeScript • Node.js",
    github: "https://github.com/BrunoFredes/jira-chill-project",
    demo: "https://jira-chill-project.vercel.app/",
  },

  {
    title: "Landing Page",
    image: LandingPageImage,
    fullpage: lisfullpage,
    description:
      "Landing moderna enfocada en diseño responsive y experiencia de usuario.",
    technologies:
      "HTML • CSS • React",
  },
  
];



function ProjectsComponent() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);  

 useEffect(() => {

  console.log(
    "useEffect ejecutado",
    selectedImage
  );

  if(selectedImage){

    document.body.style.overflow =
      "hidden";

  }else{

    document.body.style.overflow =
      "auto";

  }

}, [selectedImage]);



  return (
  <>

    
    <section
      id="projects"
      className="projects"
    >

      <h2>
        Proyectos
      </h2>

      <div className="section-line"></div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            key={project.title}
            className="project-card"
          >

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                onClick={() =>
                  setSelectedImage(project.fullpage)
                }
              />
              

            </div>

            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <span>
                {project.technologies}
              </span>

              <div className="project-buttons">

                
                  <button className="link-button">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </button>
            

                
                  <button className="link-button">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
        {
      selectedImage && (
        <div
          className="image-modal"
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <img
            src={selectedImage}
            alt="preview"
            className="image-modal-content"
          />
          
        </div>
      )
    }
  </> 
  );
}
 

export default ProjectsComponent;