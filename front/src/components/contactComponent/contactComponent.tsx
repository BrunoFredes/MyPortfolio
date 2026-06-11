import "./ContactComponent.css";

function ContactComponent() {
  return (
  <section
  id="contact"
  className="contact"
>

  <h2 className="section-title">Contacto</h2>

  <div className="section-line"></div>

  <div className="contact-container">

    <div className="contact-form-container">

      <h3>
        Pongamosnos en contacto
      </h3>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Nombre"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <textarea
          placeholder="Mensaje"
        />

        <button className="submit-btn">
          Enviar mensaje
        </button>

      </form>

    </div>

    

  </div>

</section>
  );
}

export default ContactComponent;