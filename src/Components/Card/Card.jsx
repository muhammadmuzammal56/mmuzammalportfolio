
import './Card.css'


function Card({emoji,heading,detail,detail2}) {
  return (
    <div className="card">
     <img src={emoji}></img>
     <span>{heading}</span>
     <span>{detail}<br/>{detail2}</span>
    
<button className="c-button">LEARN MORE</button>
    </div>
  );
}

export default Card;
