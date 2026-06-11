import "./TalkComponent.css";

import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";

function TalkComponent() {
  return (
    <section className="talk">

      <h2 className="talk-title">
        Hablemos
      </h2>

      <p className="talk-description">
        Siempre estoy abierto a nuevos
        proyectos, colaboraciones y
        oportunidades laborales.
      </p>

      <div className="talk-links">

        <a href="mailto:tuemail@gmail.com">

          <MdEmail className="talk-icon" />

          <span>Email</span>

        </a>

        <a
          href="https://linkedin.com/in/tuperfil"
          target="_blank"
          rel="noreferrer"
        >

          <SlSocialLinkedin className="talk-icon" />

          <span>LinkedIn</span>

        </a>

        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noreferrer"
        >

          <FaGithub className="talk-icon" />

          <span>GitHub</span>

        </a>

      </div>

    </section>
  );
}

export default TalkComponent;