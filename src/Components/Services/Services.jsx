
import './Services.css'
import Heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './MuhammadMuzammal.pdf'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';

function Services() {
    const transition = { duration: 2, type: 'spring' };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    return (
        <div className="Services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : '' }}>My Awesome</span>
                <span>Services</span>
                <span>I'm a passionate web developer specializing in Responsive Web Design and Front-End Development, dedicated to crafting exceptional online experiences. </span>
                <a href={Resume} download>
                    <button className="button">Download CV</button>
                </a>
                <div className="blurr" style={{ background: "#ABF1FF94" }}></div>

            </div>
            {/* Right side */}
            <div className="cards">
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25%' }}
                    transition={transition}
                    style={{ left: '16rem', top: '24rem' }}>
                    <Card
                        emoji={Heartemoji}
                        heading={'Web App Development'}
                        detail={' HTML, CSS, JavaScript,BootStrap,Material UI'}
                        detail2={'REACT ,API Integration'}
                    >

                    </Card>
                </motion.div>
                <motion.div
                 whileInView={{ left: '14rem' }}
                 initial={{ left: '25%' }}
                 transition={transition}
                  style={{ left: '16rem' }}>
                    <Card
                        emoji={humble}
                        heading={'Front-End Development'}
                        detail={' HTML, CSS, JavaScript,BootStrap,Material UI'}
                        detail2={'REACT ,API Integration'}
                    >

                    </Card>
                </motion.div>
                <motion.div
                 whileInView={{ left: '-10rem' }}
                 initial={{ left: '25%' }}
                 transition={transition}
                  style={{ left: '-4rem', top: '12rem' }}>
                    <Card
                        emoji={glasses}
                        heading={'Responsive Web Design'}
                        detail={' HTML, CSS, JavaScript,BootStrap,Material UI'}
                        detail2={'REACT ,API Integration'}
                    >

                    </Card>
                </motion.div>
                <div className="blurr blurr-2" style={{ background: "rgb(238 210 255)" }}></div>

            </div>
        </div>
    );
}

export default Services;