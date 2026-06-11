import "./HeroComponent.css";

function HeroComponent() {
  return (
    <section
      id="hero"
      className="hero"
    >

      <div className="hero-left">

        <p className="hero-greeting">
          Hola, soy
        </p>

        <h1 className="hero-title">
          Bruno Fredes
        </h1>

        <h2 className="hero-subtitle">
          Desarrollador Full Stack
        </h2>

        <p className="hero-description">
          Desarrollador apasionado por construir
          soluciones web modernas, funcionales
          y con un gran foco en la experiencia
          del usuario.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            <a href="#Projects"></a>Ver mis proyectos
          </button>

          <button className="secondary-btn">
           <a href="#contact">Contactame</a>
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="code-card">

          <div className="code-header">

            <span className="red"></span>

            <span className="yellow"></span>

            <span className="green"></span>

          </div>

          <pre>
{`1     const developer = {

2       name: 'Bruno Fredes',

3       role: 'Full Stack Developer',

4       technologies: [

5         'JavaScript',

6         'ASP.NET',

7         'React',

8         'TypeScript',

9         'Node.js',

10        'PostgreSQL'

11      ],

12  

13      passion:

14      'Building real products'

15    };

`}
</pre>

        </div>

      </div>

    </section>
  );
}

export default HeroComponent;