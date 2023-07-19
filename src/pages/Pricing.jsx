import newbg from "../assets/newbg.png"

export default function Pricing(){
    return (

        <div className="page-top-margin pricing-container">

        <img className="price-img" alt="close-up of two horses" src={newbg}></img>

        <div className="pricing-text">
            <h3>Pricing</h3>
            
            <ul className="contact_main">
                        <li><strong>Phone:</strong> (801) 815-2573</li>
                        <li><strong>Email:</strong> snfisihetau@gmail.com</li>
                    </ul>
            <a  href="https://fareharbor.com/embeds/book/fisihetauhorses/items/480785/?full-items=yes&flow=1006891">Fareharbor</a>

        </div>
        <div><script src="https://fareharbor.com/embeds/script/items/fisihetauhorses/?full-items=yes&amp;fallback=simple&flow=1006891"></script></div>
     

      
    </div>
      
        
    )
}