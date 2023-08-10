import newbg from "../assets/newbg.png"
import { useState } from 'react'

export default function Card(props){
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };


    return (

        


        <div className={
            isHovered ? "fareharbor-giftcard  cardEnter" : "fareharbor-giftcard  cardLeave"} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            <img className="fareharbor-img" alt="close-up of two horses" src={props.image}></img>

          { props.price ? <div className="fareharbor-price-container">
                <p className="fareharbor-price">{props.price}</p>
            </div> : null}
            

            <div className="fareharbor-card-text" >
                <h3 className="fareharbor-title">{props.title}</h3>
               
                <p>{props.text}</p>
                
            </div>
            <a className="fareharbor-btn" href={props.btn} target="blank_">Purchase</a>
        </div>
      

   
      
        
    )
}