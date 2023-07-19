import newbg from "../assets/newbg.png"

export default function Pricing(){
    return (

        <div className="page-top-margin pricing-container">

        <img className="price-img" alt="close-up of two horses" src={newbg}></img>

        <div className="pricing-text">
            <h3>Pricing</h3>
            <ul  className="pricing-list">
                <li>
                    <h4>Basic Package</h4>
                    <p  className="price">$50</p>
                    <p>Includes 1-hour horse riding lesson.</p>
                    <ul  className="features">
                    <li>-Beginner-friendly</li>
                    <li>-Professional instructor</li>
                    <li>-Horse provided</li>
                    </ul>
                    {/* <a href="#"  className="btn">Book Now</a> */}
                </li>
                <li>
                    <h4>Advanced Package</h4>
                    <p  className="price">$80</p>
                    <p>Includes 2-hour horse riding lesson.</p>
                    <ul  className="features">
                    <li>-Intermediate to advanced riders</li>
                    <li>-Private lesson</li>
                    <li>-Choice of horse</li>
                    <li>-Jumping exercises</li>
                    </ul>
                    {/* <a href="#"  className="btn">Book Now</a> */}
                </li>
                <li>
                    <h4>Family Package</h4>
                    <p  className="price">$120</p>
                    <p>Includes 1-hour lesson for 2 adults and 2 children.</p>
                    <ul  className="features">
                    <li>-Suitable for families</li>
                    <li>-Group lesson</li>
                    <li>-Fun activities</li>
                    <li>-Picnic area available</li>
                    </ul>
                    {/* <a href="#"  className="btn">Book Now</a> */}
                </li>
            </ul>

            <ul className="contact_main">
                        <li><strong>Company Name:</strong> Acme Corporation</li>
                        <li><strong>Address:</strong> 123 Main Street, Anytown, USA</li>
                        <li><strong>Phone:</strong> (555) 123-4567</li>
                        <li><strong>Fax:</strong> (555) 987-6543</li>
                        <li><strong>Email:</strong> info@acmecorp.com</li>
                        <li><strong>Website:</strong> <a href="http://www.acmecorp.com">www.acmecorp.com</a>
                        </li>
                    </ul>
            <a  href="https://fareharbor.com/embeds/book/fisihetauhorses/items/480785/?full-items=yes&flow=1006891">Fareharbor</a>

        </div>
        <div><script src="https://fareharbor.com/embeds/script/items/fisihetauhorses/?full-items=yes&amp;fallback=simple&flow=1006891"></script></div>
     

      
    </div>
      
        
    )
}