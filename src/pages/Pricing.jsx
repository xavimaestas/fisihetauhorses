import newbg from "../assets/newbg.png"

export default function Pricing(){
    return (

        <div className="page_top_margin pricing-container">

        <img className="price-img" alt="man with cowboy hat" src={newbg}></img>

        <div className="pricing-text">
            <h3>Pricing</h3>
            <ul class="pricing-list">
                <li>
                    <h4>Basic Package</h4>
                    <p class="price">$50</p>
                    <p>Includes 1-hour horse riding lesson.</p>
                    <ul class="features">
                    <li>-Beginner-friendly</li>
                    <li>-Professional instructor</li>
                    <li>-Horse provided</li>
                    </ul>
                    {/* <a href="#" class="btn">Book Now</a> */}
                </li>
                <li>
                    <h4>Advanced Package</h4>
                    <p class="price">$80</p>
                    <p>Includes 2-hour horse riding lesson.</p>
                    <ul class="features">
                    <li>-Intermediate to advanced riders</li>
                    <li>-Private lesson</li>
                    <li>-Choice of horse</li>
                    <li>-Jumping exercises</li>
                    </ul>
                    {/* <a href="#" class="btn">Book Now</a> */}
                </li>
                <li>
                    <h4>Family Package</h4>
                    <p class="price">$120</p>
                    <p>Includes 1-hour lesson for 2 adults and 2 children.</p>
                    <ul class="features">
                    <li>-Suitable for families</li>
                    <li>-Group lesson</li>
                    <li>-Fun activities</li>
                    <li>-Picnic area available</li>
                    </ul>
                    {/* <a href="#" class="btn">Book Now</a> */}
                </li>
            </ul>

        </div>

     

        
    </div>
      
        
    )
}