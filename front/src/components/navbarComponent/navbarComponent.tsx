import { useState } from "react";
import "./NavbarComponent.css";

function NavbarComponent() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className="navbar">

      <div className="navbar-logo">
        BF
      </div>

      <nav className="navbar-links">

        <a href="#hero">Inicio</a>

        <a href="#about">
          Sobre mí
        </a>

        <a href="#skills">
          Habilidades
        </a>

        <a href="#projects">
          Proyectos
        </a>

        <a href="#contact">
          Contacto
        </a>

      </nav>

      <button className="cv-button">
        Descargar CV
      </button>

      <button
        className="menu-button"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </button>

      {
        menuOpen && (
          <div className="mobile-menu">

            <a
              href="#hero"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Inicio
            </a>

            <a
              href="#about"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Sobre mí
            </a>

            <a
              href="#skills"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Habilidades
            </a>

            <a
              href="#projects"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Proyectos
            </a>

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Contacto
            </a>

          </div>
        )
      }

    </header>
  );
}

export default NavbarComponent;