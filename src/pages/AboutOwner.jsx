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
                    <h4 >About The Horseman</h4>
                    <p>Sam is a first-generation horseman. His passion for horses and the western industry is unmistakable. He was first placed on a horse at 11 years of age.
                    <br/>
                    <br/>
                    Sam spent two seasons in East Zion and one season in Park City, taking horseback rides through some of Utah's most impressive landscapes. While in Zion, Sam led a team of 12 wranglers and was responsible for the care of 35 horses. He is an experienced all terrain horsemen, riding in all seasons of the year. 
                    <br/>
                    <br/>
                    When Sam isn’t with his Horses… He is a licensed real estate professional, specializing in commercial investment properties and homes for his family and friends.
                    <br/>
                    <br/> 
                    The word "genuine" describes him well. With Sam you will have a personal experience <i>every</i> time.</p>
                </div>

                

            </div>

            <img className="owner2" alt="man with cowboy hat" src={samCanyon}></img>
                
         
    
        </div>

    

        
        </>
  
    
      
        
    )
}