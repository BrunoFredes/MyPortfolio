import "./AboutComponent.css";

function AboutComponent() {
  return (
    <section
      id="about"
      className="about"
    >

      <div className="about-left">

        <h2>
          Sobre mí
        </h2>

        <div className="section-line"></div>

        <p>
          Soy estudiante de la Tecnicatura
          Universitaria en Programación
          en la UTN FRLP.
        </p>

        <p>
          Me gusta resolver problemas,
          aprender tecnologías nuevas y
          construir proyectos que tengan
          impacto real.
        </p>

        <p>
          Actualmente desarrollo proyectos
          Full Stack utilizando React,
          TypeScript, ASP.NET y PostgreSQL.
        </p>

        <button className="about-btn">
          Conocé más sobre mí
        </button>

      </div>

      <div className="about-right">

        <div className="info-card">
          <h3>🎓 Estudios</h3>

          <p>
            Tecnicatura Universitaria
            en Programación
          </p>

          <span>
            UTN FRLP
          </span>
        </div>

        <div className="info-card">
          <h3>💻 Experiencia</h3>

          <p>
            Proyectos personales
            y académicos
          </p>
        </div>

        <div className="info-card">
          <h3>🚀 Enfoque</h3>

          <p>
            Desarrollo Full Stack
            y aplicaciones modernas
          </p>
        </div>

        <div className="info-card">
          <h3>🎯 Objetivo</h3>

          <p>
            Conseguir mi primera
            experiencia profesional
            como desarrollador.
          </p>
        </div>

      </div>

    </section>
  );
}

export default AboutComponent;