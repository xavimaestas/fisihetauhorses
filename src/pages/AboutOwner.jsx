import owner1 from '../assets/owner1.jpg'
import samCanyon from '../assets/sam-canyon.jpeg'
import { HashLink } from 'react-router-hash-link'

export default function AboutOwner(){
    return (

        <>

        <div className="about-owner-desktop">

            <div className="about-owner-container">

                <img className="owner1" alt="man with cowboy hat" src={owner1}></img>
                <HashLink to='#about-owner-text' ><i class="fa-solid fa-angles-down about-owner-angles fa-2xl"></i></HashLink>

                <div className="about-owner-text" id="about-owner-text">
                    <h4 >About The Owner</h4>
                    <p>Sam is a first generation horseman. He spent two seasons in East Zion and one season in Park City, taking horseback rides through some of Utah's most impressive landscapes. He is an experienced all terrain horseman. Traveling through terrain in all seasons of the year. Sam is a licensed real estate professional and specializes in commerical investment properties and homes for his family and friends. The word "genuine" describes him well. With Sam you will have a personal experience everytime. </p>
                </div>

                

            </div>

            <img className="owner2" alt="man with cowboy hat" src={samCanyon}></img>
                
         
    
        </div>

    

        
        </>
  
    
      
        
    )
}