import samHorse from '../assets/sam-horse.jpeg'
import samCanyon from '../assets/sam-canyon.jpeg'

export default function Main(){
    return (

        <div className="main_div_component">

        <section className="main_content">
            <img  className="main_image"alt="horse running" src={samCanyon}></img>
            <h1 className="image_title">Horseback Adventures</h1> 
        </section>

        <section className="all_info">
            

            <div className="bio_container">
                <div className="experience">
                    <h4>The Experience</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur labore itaque sunt fugiat. Optio aliquam doloribus deleniti ab ullam placeat minima, dolorum amet odio laboriosam quo corrupti molestias ea veniam deserunt est nam odit temporibus! Voluptas omnis molestiae optio quam magnam perferendis quo laudantium unde quibusdam nostrum placeat quia modi, eaque sed laborum sunt itaque quisquam repudiandae illum rem nulla. Molestiae recusandae ipsa sint nisi, non aliquid? Modi exercitationem repellat, laudantium animi aperiam dolorum quae veniam architecto eveniet, atque repudiandae, eaque eum? Iste possimus consequuntur veniam aut, praesentium magnam minus sed minima reiciendis hic, sunt laborum fuga voluptatibus ipsa!</p>
                </div>
                <img className="sam_horse" alt="horse" src={samHorse}></img>
              
            </div>

            <div className="contact_container">
                <a className="contact_phone" href="tel:1111111111">111.111.1111</a>
                <p className="contact_email">Email@email.com</p>
            </div>

        </section>

        </div>
      
        
    )
}