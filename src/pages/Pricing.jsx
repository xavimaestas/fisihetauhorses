import newbg from "../assets/newbg.png"
import meethorses1 from "../assets/meethorses1.jpg"
import meethorses2 from "../assets/meethorses2.jpg"
import samcanyon from "../assets/sam-canyon.jpeg"
import contactcard from "../assets/contactcard.jpg"
import Card from "../components/Card"
import GiftCard from "../components/GiftCard"

export default function Pricing(){

    return (
        

    <div className="pricing-container">

       

        <div className="card-container">
        <Card 
                    title="Fundamentals Lesson"
                    text="Discover an exciting equestrian adventure with our 1-hour Beginner Horseback Riding Lesson. Perfect for newcomers, our skilled instructors guide you through mounting, commands, and essential riding skills, fostering confidence and a harmonious connection with your horse."
                    image={"https://images.unsplash.com/photo-1678226206688-af7daab00046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480734/?full-items=yes&flow=1006891"}
                    price={"$75"}
                />
        <Card 
                    title="Adventure Ride & Horsemanship Lesson"
                    text="The All Terrain lesson will start with an hour refresher saddling getting to know your horse, and going over the basics, before setting off on our adventure. The remaining 2 hours will be spent learning to ride and exploring the surrounding area by horseback."
                    image={"https://images.unsplash.com/photo-1473252661224-1b28d29788e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480767/calendar/2023/07/?full-items=yes&flow=1006891"}
                    price={"$150"}
                />

        <Card 
                    title="Horse Companions for Unforgettable Events"
                    text="Immerse in enchanting Horse Companionship - perfect for children's parties! Young ones aged 2+ will cherish quality time with gentle, majestic equine friends. Capture precious moments through photos in a safe, interactive environment without riding."
                    image={"https://images.unsplash.com/photo-1604566076263-46e993ed8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480554/?full-items=yes&flow=1006891"}
                    price={"$250"}
                />
                
               
                <Card 
                    title="Horseback Proposal"
                    text="Amidst picturesque landscapes, combine horseback riding with a heartfelt proposal. Seize the perfect moment to profess your love and create an unforgettable memory cherished for a lifetime."
                    image={"https://images.unsplash.com/photo-1591211263346-a660635b71d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480785/?full-items=yes&flow=1006891"}
                    price={"$500"}
                />
                
                <Card 
                    title="Gift Cards"
                    image={contactcard}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480824/?full-items=yes&flow=1006891"}
                    price={null}
                />

        </div>

        <div className="booking-fine-print">
                       <span>Please Note:</span> 
                       <p>
                        An additional 6% charge will be applied to online bookings.
                        <br/>
                        <br/>
                        If your intended booking date(s) show no availability, contact us for possible special accommodation.
                        <br/>
                        <br/>
                        These prices for the Greater Salt Lake area. Please contact us for pricing outside of this area.
                        <br/>
                        <br/>
                        Legal guardians will be required to sign for all participating minors.
                       </p>
        </div>
                
        <ul className="contact-main">
                        <h4>Contact Us</h4>
                        <li>(801) 815-2573</li>
                        <li>snfisihetau@gmail.com</li>
        </ul>
            

    </div>

 
        
        

        
      
        
    )
}