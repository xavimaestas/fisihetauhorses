import meethorses1 from "../assets/meethorses1.jpg"
import meethorses2 from "../assets/meethorses2.jpg"
import meethorses3 from "../assets/meethorses3.jpg"

export default function MeetHorses(){
    return (

<div className="page-top-margin meet-horses-page-container" >

        {/* Horse 1 */}

        <div className="page-top-margin meet-horses-container">

            <img className="meet-horse-img" alt="a saddled horse, tied up to a tree, looking at the camera, in a desert forest." src={meethorses1}></img>

            <div className="meet-horses-text">
                <h4>Stan</h4>
                <p>Handsome and kind... Stanley is a Papered American Quarterhorse standing at 16 hands. He doubles as a therapy horse in an instance. He is without a doubt Sam's kindered spirit. He was sired in Farmington, Utah and is 13 years of age. </p>
            </div>

        </div>


  {/* Horse 2 */}

        <div className="meet-horses-container">

            <img className="meet-horse-img" alt="An orange horse in a horse pen in the forest, eating hay on the ground." src={meethorses3}></img>

            <div className="meet-horses-text swap-order">
                <h4>Sunshine</h4>
                <p>The boss, smart. Sunshine has striking blue and brown eyes, matching her personality perfectly.  </p>
            </div>

        </div>

     

  {/* Horse 3 */}

        <div className="meet-horses-container">

            <img className="meet-horse-img last-meet-horse-img" alt="A man riding a brown horse in a wooded area, wearing a blue sweater and brown cowboy hat." src={meethorses2}></img>

            <div className="meet-horses-text meet-horses-bottom">
                <h4>About Horse 3</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur labore itaque sunt fugiat. Optio aliquam doloribus deleniti ab ullam placeat minima, dolorum amet odio laboriosam quo corrupti molestias ea veniam deserunt est nam odit temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero nostrum, accusantium tempora ad atque quis nisi facere fugiat tenetur quibusdam, deserunt dolores quos itaque qui veniam dicta odit voluptas? </p>
            </div>

        </div>

</div>
      
        
    )
}