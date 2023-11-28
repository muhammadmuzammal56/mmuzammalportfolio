import './Works.css'
import upwork from '../../img/Upwork.png'
import fiverr from '../../img/fiverr.png'
import facebook from '../../img/Facebook.png'
import shopify from '../../img/Shopify.png'
import amazon from '../../img/amazon.png'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';




function Works() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span style={{color:darkMode?"white":''}}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eveniet nulla
                    <br />sit suscipit perspiciatis. Recusandae.
                    <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eveniet nulla
                    <br />sit suscipit perspiciatis. Recusandae.</span>
                    <button className="button2">Hire me</button>
                {/* <div className="blurr" style={{ background: "#ABF1FF94" }}></div> */}
            </div>
             {/* right side */}
             <div className="w-right">
                <motion.div 
                initial={{rotate : 45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration: 3.5, type: 'spring' }}
                className="w-mainCircle">
                    <div className="w-seccircle">
                        <img src={upwork}></img>
                    </div>
                    <div className="w-seccircle">
                        <img src={fiverr}></img>
                    </div>
                    <div className="w-seccircle">
                        <img src={amazon}></img>
                    </div>
                    <div className="w-seccircle">
                        <img src={shopify}></img>
                    </div>
                    <div className="w-seccircle">
                        <img src={facebook}></img>
                    </div>
                </motion.div>
                <div className="w-backcircle bluecircle">

                </div>
                <div className="w-backcircle yellowcircle">

</div>
             </div>
        </div>
    );
}

export default Works;
