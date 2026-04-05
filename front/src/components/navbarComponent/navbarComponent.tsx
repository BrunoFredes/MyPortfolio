import React from 'react'
import './navbarComponent.css'

const NavbarComponent: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Fredes Bruno</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse izquierda" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Contact
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">LinkedIn</a></li>
                  <li><a className="dropdown-item" href="#">Instagram</a></li>
                  <li><a className="dropdown-item" href="#">GitHub</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <span className="nav-link disabled">Disabled</span>
              </li>

            </ul>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent