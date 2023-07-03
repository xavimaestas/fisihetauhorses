
import samCanyon from '../assets/sam-canyon.jpeg'
import samRiding1 from '../assets/sam-riding1.mp4'
import samRiding2 from '../assets/sam-riding2.mp4'
import samRiding4 from '../assets/sam-riding4.mp4'
import samRiding5 from '../assets/sam-riding5.mp4'


export default function Main(){
    return (

    <div className="main_div_component">

        <section className="main_content">
            <img  className="main_image"alt="horse running" src={samCanyon}></img>
            <h1 className="image_title"></h1> 
        </section>

        <section className="all_info" id="all_info">
            

            <div className="bio_container" id="bio_container">
                <div className="experience" id="experience">

                    <div className="experience_text">
                    <h4>The Experience</h4>
                    <p>Join us on breathtaking horseback adventures through majestic landscapes. Experience the thrill of galloping along mountain trails, meandering through wildflower-filled meadows, and exploring ancient forests. All skill levels are welcome as we discover the wonders of nature together. Saddle up and let your spirit roam free as we embark on unforgettable equestrian journeys. </p>
                    </div>

                    <div className="experience_text">
                    <ul className="contact_main">
                        <li><strong>Company Name:</strong> Acme Corporation</li>
                        <li><strong>Address:</strong> 123 Main Street, Anytown, USA</li>
                        <li><strong>Phone:</strong> (555) 123-4567</li>
                        <li><strong>Fax:</strong> (555) 987-6543</li>
                        <li><strong>Email:</strong> info@acmecorp.com</li>
                        <li><strong>Website:</strong> <a href="http://www.acmecorp.com">www.acmecorp.com</a>
                        </li>
                    </ul>

                    </div>
                   
                    {/* <img className="sam_horse " alt="horse" src={samHorse}></img> */}
                </div>
                <div className="horse_container">

                    <div className="video_container" id="video_container">

                    <video className="sam_riding_v1 content" preload="auto" loop muted controls src={samRiding1}></video>

                    <video className="sam_riding_v1 content video_margin" src={samRiding5} preload="auto" loop muted="muted" controls="controls"></video>

                    <video className="sam_riding_v1 content video_margin" src={samRiding4} preload="auto" loop muted="muted" controls="controls"></video>

                    <video className="sam_riding_v1 content video_margin" src={samRiding2} preload="auto" loop muted="muted" controls="controls"></video>
                        
                    </div>

                </div>
              
            </div>

        </section>

    </div>
      
        
    )
}