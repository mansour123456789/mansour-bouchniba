import emailjs from "emailjs-com";
import { useState } from "react";
const Contact = () => {
const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    recipient: "mansboch@gmail.com", // Recipient email address
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            // Reset form fields and ensure recipient is set
            setMailData({ name: "", email: "", message: "", subject: "", recipient: "mansboch@gmail.com" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section
      id="contactus"
data-nav-tooltip="Contact"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Contactez-moi.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
<h4>Quelle est votre histoire ? Contactez-moi</h4>
<p>
Toujours disponible pour du freelance si le bon projet se présente, n&#39;hésitez pas à me contacter.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
<span className="media-body">
                    20 rue bahar omen nkhilet ariana
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
<span className="media-body">mansboch@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
<span className="media-body">52465398</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
<h4>Laissez un message</h4>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
placeholder="Nom *"
                        className={`form-control ${
                          error ? (!name ? "invalid" : "") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
placeholder="Email *"
                        className={`form-control ${
                          error ? (!email ? "invalid" : "") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
placeholder="Sujet *"
                        className={`form-control ${
                          error ? (!subject ? "invalid" : "") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
placeholder="Votre message *"
                        rows={5}
                        className={`form-control ${
                          error ? (!message ? "invalid" : "") : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      {/* <button
                        onSubmit={(e) => onSubmit(e)}
                        className="px-btn px-btn-theme"
                        type="button"
value="Envoyer"
                      >
                        {" "}
                        send message
                      </button> */}
<input
                        className="px-btn px-btn-theme"
                        type="submit"
                        value="Envoyer le message"
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{
                        display:
                          error !== null ? (!error ? "block" : "none") : "none",
                      }}
                    >
Message envoyé avec succès
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      style={{ display: "none" }}
                    >
L&#39;envoi du message a échoué
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7265.0705121725705!2d10.177335392683265!3d36.887223433423635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb6f36d20d1d%3A0x604c1b561c477ca!2sPoste%20de%20Police%20Nkhilet!5e0!3m2!1sfr!2stn!4v1760557765358!5m2!1sfr!2stn"
         allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
