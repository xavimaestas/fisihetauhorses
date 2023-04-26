import samHorse from '../assets/sam-horse.jpeg'
import samCanyon from '../assets/sam-canyon.jpeg'
import samRiding1 from '../assets/sam-riding1.mp4'
import samRiding2 from '../assets/sam-riding2.mp4'

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur labore itaque sunt fugiat. Optio aliquam doloribus deleniti ab ullam placeat minima, dolorum amet odio laboriosam quo corrupti molestias ea veniam deserunt est nam odit temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero nostrum, accusantium tempora ad atque quis nisi facere fugiat tenetur quibusdam, deserunt dolores quos itaque qui veniam dicta odit voluptas? </p>
                    </div>
                   
                    <img className="sam_horse " alt="horse" src={samHorse}></img>
                </div>
                <div className="horse_container">

                    <div className="video_container" id="video_container">

                    <video className="sam_riding_v1 content" preLoad="auto" loop muted controls autoPlay={"autoplay"} src={samRiding1}></video>

                    <video className="sam_riding_v1 content video_margin" src={samRiding2} preLoad="auto" loop muted="muted" controls="controls" autoPlay={"autoplay"}></video>
                        
                    </div>

                  

                </div>

            
                
              
            </div>

          



        </section>

        </div>
      
        
    )
}