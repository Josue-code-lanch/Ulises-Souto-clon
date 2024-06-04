import LogoInstagram from "./Instagram";
import LogoSpotify from "./LogoSpotify";
import LogoLinkedin from "./LogoLinkedin";
import "../Styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="contact-me">
          <h4 className="contactame">CONTACT ME</h4>
          <h5 className="city">Buenos Aires / London</h5>
          <div className="contact-me-2">
            <div className="redes-sociales">
              <a
                href="https://www.linkedin.com/in/ulisessouto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoLinkedin />
              </a>
              <a
                href="about:blank#blocked"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoInstagram />
              </a>
              <a
                href="about:blank#blocked"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoSpotify />
              </a>
              <a className="email" href="mailto:soutoulises@gmail.com">
                soutoulises@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
