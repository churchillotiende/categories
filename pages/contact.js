import { useState } from "react";
import styles from  "../styles/Contact.module.scss";
import emailjs from '@emailjs/browser';

export default function Contact(props) {
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ln4u1fd', 'template_3a1ieum', e.target, 'C_wVFncJTjaALMrVC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.left}>
        <p className={styles.lipa}>Lipa na Mpesa</p>
        <img src='/img/till.jpeg' alt="mpesa" style={{maxHeight:'500px',maxWidth:'100%',objectFit:'contain',borderRadius:'20px'}}/>
      </div>
      <div className={styles.right}>
        <h2 className={styles.h2}>Contact.</h2>
        <form onSubmit={sendEmail} className = {styles.form}>
          <input type="text" placeholder="Enter Email Address"  name= 'from_name' className={styles.input}/>
          <input type="text" placeholder="Enter First Name"  name= 'email'/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Subscribe</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}