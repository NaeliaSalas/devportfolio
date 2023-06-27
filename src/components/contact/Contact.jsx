import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fee7vb1', 'template_zmp1exi', formRef.current, '9216My6_a7e9kFXWT')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title"> Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <FontAwesomeIcon icon={faPhone} />
              +34 651 145 593
            </div>
  
            <div className="c-info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              naeliasalas@gmail.com
            </div>
  
            <div className="c-info-item">
              <FontAwesomeIcon icon={faLocationDot} />
              Sweden/Barcelona
            </div>
            </div>

        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            questions or other inquieries.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;