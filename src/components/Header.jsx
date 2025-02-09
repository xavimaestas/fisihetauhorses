import {NavLink, Link} from 'react-router-dom'
import Dropdown from './Dropdown'
import logo from '/Users/xmaestas/Documents/dev ic/fisihetauhorses/src/assets/FH logo.png'

export default function Header(){
    return (
        
        <header>
          
               


                <div className="title-container">
                    <Link className="main-title" to="/">
                    <img src={logo} alt="Fisihetau Horses Logo" className="main-title" />
                    </Link>
                    
                    

                </div>
                <div className="nav-container">

                    <NavLink className="navLink" to="/meetthehorses" >MEET THE HORSES</NavLink>
                    <NavLink className="navLink" to="/pricing" >BOOKING & CONTACT</NavLink>
                    <NavLink className="navLink navLink-top-margin" to="/abouttheowner">ABOUT THE HORSEMAN</NavLink>
                    
                </div>

                {/* <div className="drop-down">
                <i className="fa-solid fa-bars"></i>
                <div className="drop-down-content">
                    <NavLink className="navLink" to="/meetthehorses" >MEET THE HORSES</NavLink>
                    <NavLink className="navLink" to="/pricing" >PRICING & BOOKING</NavLink>
                    <NavLink className="navLink" to="/abouttheowner">ABOUT THE OWNER</NavLink>
                </div>
                </div>     */}

          

                
                   
            
           
               
        </header>

    )
    }