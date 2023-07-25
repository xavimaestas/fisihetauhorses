import {NavLink, Link} from 'react-router-dom'
import Dropdown from './Dropdown'

export default function Header(){
    return (
        
        <header>
          
               


                <div className="title_container">
                    <Link className="main_title" to="/">Fisihetau Horses</Link>
                    
                    

                </div>
                <div className="nav_container">

                    <NavLink className="navLink" to="/meetthehorses" >MEET THE HORSES</NavLink>
                    <NavLink className="navLink" to="/pricing" >BOOKING & CONTACT</NavLink>
                    <NavLink className="navLink navLink-top-margin" to="/abouttheowner">ABOUT THE COWBOY</NavLink>
                    
                </div>

                {/* <div className="drop_down">
                <i className="fa-solid fa-bars"></i>
                <div className="drop_down_content">
                    <NavLink className="navLink" to="/meetthehorses" >MEET THE HORSES</NavLink>
                    <NavLink className="navLink" to="/pricing" >PRICING & BOOKING</NavLink>
                    <NavLink className="navLink" to="/abouttheowner">ABOUT THE OWNER</NavLink>
                </div>
                </div>     */}

          

                
                   
            
           
               
        </header>

    )
    }