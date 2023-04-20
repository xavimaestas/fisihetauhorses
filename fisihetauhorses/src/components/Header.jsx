import {BrowserRouter as Router} from 'react-router-dom'
import Dropdown from './Dropdown'

export default function Header(){
    return (
        
        <header>
            <div className="header_container">
               


                <div className="title_container">
                    <h1 className ="main_title">Fisihetau Horses</h1>
                    <i className="fa-solid fa-horse fa-lg"></i>
                </div>
                <a className="main_phone" href="tel:111-111-1111">111-111-1111</a>
            </div>
            
            <Router>
                <Dropdown />
            </Router>
           
            
        </header>

    )
    }