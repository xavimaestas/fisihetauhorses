import {HashLink as Link} from 'react-router-hash-link'


export default function Dropdown(){
    return (
        <div className="drop_down">
            <i className="fa-solid fa-bars"></i>
            <div className="drop_down_content">
                <Link to='#experience'>The Experience</Link>
                
                <br></br>
                <Link to='#contact_container'>Contact</Link>
            </div>
        
        </div>

    )
}


