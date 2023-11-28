
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from "react";
function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tgad8nj', 'template_kexm2vt', form.current, 'e47X6nhUJmk0FHIuP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
    return (
        <div className="contact-form" id="Contact">
            <div className="w-left">
                <div className="awesome22">
                    <span style={{color:darkMode?"white":''}}>Get in touch</span>
                    <span>Contact me</span>
                    {/* <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}> */}
                    <div className="blurr" style={{ background: "#ABF1FF94" }}>

                    </div> 
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name'></input>
                    <input type='email' name='user_email' className='user' placeholder='Email'></input>
                    <textarea name='message' className='user' placeholder='Message'></textarea>
                    <button className="button22" type='submit' value='Send'>Send</button>
                    <div className="blurr blurr-2" style={{ background: "rgb(238 210 255)" }}></div>
                </form>
            </div>

        </div>
    );
}

export default Contact;
