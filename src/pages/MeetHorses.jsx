import meethorses1 from "../assets/meethorses1.jpg"
import meethorses2 from "../assets/meethorses2.jpg"
import meethorses3 from "../assets/meethorses3.jpg"
import sunshineMain from '../assets/sunshineMain.jpeg'
import foalStan from '../assets/foalStan.jpeg'

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


        {/* Foal Photo */}

        <div className="meet-horses-container">

            <img className="meet-horse-img coltImg" alt="Orange foal hose" src={foalStan}></img>

            <div className="meet-horses-text swap-order">
                <h4>Baby Stan</h4>
                <p></p>
            </div>

        </div>

        {/* Horse 2 */}

        <div className="meet-horses-container">

        <img className="meet-horse-img" alt="An orange horse in a horse pen in the forest, eating hay on the ground." src={sunshineMain}></img>

        <div className="meet-horses-text ">
            <h4>Sunshine</h4>
            <p>The boss, smart and swift. Sunshine has striking blue and brown eyes, matching her personality perfectly. She walks out like a Missouri Fox Trotter however she is a Papered American Painthorse. Sunshine stands at 16.1 hands tall and was sired in Lehi, Utah. She is 12 years of age. </p>
        </div>

        </div>

     

  {/* Horse 3 */}

        <div className="meet-horses-container">

            <img className="meet-horse-img last-meet-horse-img" alt="A man riding a brown horse in a wooded area, wearing a blue sweater and brown cowboy hat." src={meethorses2}></img>

            <div className="meet-horses-text meet-horses-bottom swap-order">
                <h4>Nocona</h4>
                <p>Nebraska boy sold to the Lone Star state, and then finally settling in the Rocky Mountains. He is a Papered American Quarterhorse standing at an astounding 16.2 hands. Nocona's awareness and tolerance for children is remarkable. Available for babysitting.</p>
            </div>

        </div>

</div>
      
        
    )
}