
import samCanyon from '../assets/sam-canyon.jpeg'
import newBg from '../assets/newbg.png'
import samRiding1 from '../assets/sam-riding1.mp4'
import samRiding2 from '../assets/sam-riding2.mp4'
import samRiding4 from '../assets/sam-riding4.mp4'
import samRiding5 from '../assets/sam-riding5.mp4'


export default function Main(){
    return (

    <div className="main_div_component">

        <section className="main_content">
            <img  className="main_image"alt="close up of two horses" src={newBg}></img>
            <h1 className="image_title"></h1> 
        </section>

        <section className="all_info" id="all_info">
            

            <div className="bio_container" id="bio_container">
                <div className="experience" id="experience">

                    <div className="experience_text">
                    <h4>Let's Ride!</h4>
                    <p>Join us for an authentic horse back experience in the majestic landscapes of Utah. Learn how to care, saddle and ride in a private and genuine setting. Book an advanced lesson or event and invite these horses to your party or proposal.</p>
                    </div>

                    <div className="experience_text">
                    

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