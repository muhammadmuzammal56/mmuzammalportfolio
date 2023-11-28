import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from "react";
import CountUp from 'react-countup';
function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="experience" id='Experience'>
        <div className="achievement">
            <div className="circle" style={{color:darkMode?"black":''}}>  <CountUp  style={{ fontSize: '2.5rem' }}  start={0} end={2} duration={7} /><span style={{ fontSize: '1.6rem' }} >+</span></div>
            <span>Years</span>
            <span>Experience</span>
        </div> 
        <div className="achievement">
            <div className="circle" style={{color:darkMode?"black":''}}><CountUp  style={{ fontSize: '2.5rem' }}  start={0} end={3} duration={7} /><span style={{ fontSize: '1.6rem' }} >+</span></div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color:darkMode?"black":''}}><CountUp  style={{ fontSize: '2.5rem' }}  start={0} end={2} duration={7} /><span style={{ fontSize: '1.6rem' }} >+</span></div>
            <span>Companies</span>
            <span>Work</span>
        </div>
  
    </div>
  );
}

export default Experience;
