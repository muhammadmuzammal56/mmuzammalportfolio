import React from "react";
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import boy1 from '../../img/Portfoliopic.png'


import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";

// const Transittion = {duration:2,type:'spring'}
const Intro = () => {


    const transition = { duration: 2, type: 'spring' };

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
    return (
        <div className="intro" id="Home">
            <div className="i-left">
                <div className="i-name">
                    <span className="Heading1" style={{color:darkMode?"white":''}}>Hy! I Am</span>
                    <span className="Heading2">Muhammad Muzammal</span>
                    <span className="Heading3"> I'm a React.js developer with 1 year of experience , skilled in crafting user-centric web applications. My focus on clean code and innovation drives impactful digital solutions.</span>

                </div>
                <div className="">
                    <button className="i-button">Hire me</button>
                </div>
                <div className="i-icons">
                    <a href="https://github.com/muhammadmuzammal56" target="_blank" >
                    <img src={Github} alt="Github Picture"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/muzammal56/" target="_blank" >
                    <img src={Linkedin} style={{marginLeft:'2rem'}}  alt="Linkedin Picture"></img>
                    </a>
                    <img src={Instagram}  style={{marginLeft:'2rem'}}  alt="Instagram Picture"></img>

                </div>
                {/* <button className=" i-button">Hire me</button> */}
            </div>
            <div className="i-right ">
            <img src={vector1} alt="Github Picture"></img>
            <img src={vector2} alt="Github Picture"></img>
            <img src={boy} alt="Github Picture"></img>
            <motion.img 
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesemoji} alt="Glassesemoji Picture"/>

            <motion.div 
                 initial={{top:'-4%',left:'74%'}}
                 whileInView={{left:'68%'}}
                 transition={transition}
            style={{top:'-4%',left:'68%'}}  className="f-fiv"> 
               <FloatingDiv image={Crown} text1="Web" text2="Developer" />
            </motion.div>
            <motion.div 
            initial={{top:'18rem',left:'9rem'}}
            whileInView={{left:'3rem'}}
            transition={transition}
            style={{top:'18.3rem',left:'6%'}} className="f-fiv">
               <FloatingDiv image={thumbup} text1="Best Design" text2="Award"/>
            </motion.div>
            {/* <div className="blurr" style={{background:"rgb(238 210 255)"}}></div> */}
            <div className="blurr" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>

            </div>
        </div>
    )
}
export default Intro;