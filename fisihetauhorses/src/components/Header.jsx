import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Dropdown from './Dropdown'

export default function Header(){
    return (
        
        <header>
            <div className="header_container">
               


                <div className="title_container">
                    <h1 className ="main_title">Fisihetau Horses</h1>
                    <i className="fa-solid fa-horse fa-lg"></i>

                </div>
                <div className="nav_container">
                    <p>MEET THE HORSES</p>
                    <p>PRICING & CONTACT</p>
                    <p>ABOUT THE OWNER</p>
                    
                </div>

          

                </div>
                   
            
           
               
        </header>

    )
    }