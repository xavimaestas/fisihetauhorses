import {HashLink as Link} from 'react-router-hash-link'


export default function Dropdown(){
    return (
        <div className="drop-down">
            <i className="fa-solid fa-bars"></i>
            <div className="drop-down-content">
                <Link to='#experience'>The Experience</Link>
                
                <br></br>
                <Link to='#video-container'>Riding Content</Link>
            </div>
        
        </div>

    )
}


