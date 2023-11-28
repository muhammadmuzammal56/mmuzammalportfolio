
import './Footer.css'
import wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"
function Footer() {



    return (
        <div className="footer">
            <img src={wave} style={{ width: '100%' }}></img>
            <div className="f-content">
                <span>Gmail : Muhammadmuzammal56@gmail.com</span>
                <span>Phone No. : 03107278988</span>
                <span>Address : Sabzazar H-Block Lahore,Pakistan</span>
                <div className="f-icons">
                    <Insta color='white' size='2rem' />
                    <Facebook  color='white' size='2rem' />
                    <Github   color='white' size='2rem'/>
                </div>
                
                <span className='copyright'> &copy; 2023 Your Company Name. All Rights Reserved.</span>
             

            </div>
        </div>
    );
}

export default Footer;
