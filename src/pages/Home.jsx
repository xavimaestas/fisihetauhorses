
import samCanyon from '../assets/sam-canyon.jpeg'
import newBg from '../assets/newbg.png'
import samRiding1 from '../assets/sam-riding1.mp4'
import samRiding2 from '../assets/sam-riding2.mp4'
import samRiding4 from '../assets/sam-riding4.mp4'
import samRiding5 from '../assets/sam-riding5.mp4'
import samRiding6 from '../assets/sam-riding6.mp4'
import samRiding1Ph from '../assets/samRiding1Ph.jpg'
import samRiding2Ph from '../assets/samRiding2Ph.jpg'
import samRiding4Ph from '../assets/samRiding4Ph.jpg'
import samRiding5Ph from '../assets/samRiding5Ph.jpg'
import samRiding6Ph from '../assets/samRiding6Ph.jpg'

export default function Main(){
    return (

    <div className="main_div_component">

    

        <section className="all_info" id="all_info">
            

            <div className="bio_container" id="bio_container">
                {/* <div className="experience" id="experience">
                    <img  className="main_image"alt="close up of two horses" src={newBg}></img>
                    <div className="experience_text">
                        <h4>Let's Ride!</h4>
                        <p>Join us for an authentic horse back experience in the majestic landscapes of Utah. Learn how to care, saddle and ride in a private and genuine setting. Book an advanced lesson or event and invite these horses to your party or proposal.</p>
                    </div>

                   
                    <img className="sam_horse " alt="horse" src={samHorse}></img>
                </div> */}
                <div className="horse_container">

                    <div className="video_container" id="video_container">

                    <img  className="sam_riding_v1"alt="close up of two horses" src={newBg}></img>

                    <div className="experience_text">
                        <h2>Let's Ride!</h2>
                        <p>Join us for an authentic horse back experience in the majestic landscapes of Utah. Learn how to care, saddle and ride in a private and genuine setting. Book an advanced lesson or event and invite these horses to your party or proposal.</p>
                    </div>

                    <video className="sam_riding_v1 content video_margin" preload="auto" loop muted controls src={samRiding5} poster={samRiding5Ph}></video>

                    <video className="sam_riding_v1 content video_margin" src={samRiding1} poster={samRiding1Ph}preload="auto" loop muted="muted" controls="controls"></video>

                    <video className="sam_riding_v1 content video_margin" src={samRiding4} poster={samRiding4Ph} preload="auto" loop muted="muted" controls="controls"></video>

                    <video className="sam_riding_v1 content video_margin" src={samRiding2} poster={samRiding2Ph} preload="auto" loop muted="muted" controls="controls"></video>

                    <video className="sam_riding_v1 content video_margin" src={samRiding6} poster={samRiding6Ph} preload="auto" loop muted="muted" controls="controls"></video>
                        
                    </div>

                </div>
              
            </div>

        </section>

    </div>
      
        
    )
}