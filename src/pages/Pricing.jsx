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

        <h3 className="pricing-container-discount">Book via email to save 6%!</h3>

        <div className="card-container">
                <Card 
                    title="Adventure Ride & Horsemanship Lesson"
                    text={<div>Discover the bliss of horseback riding as you embark on this unforgettable journey of learning and exploration in some of Utah’s most magnificent terrains. Learn how to care for, saddle, and ride with these majestic creatures. Perfect for special occasions, anniversaries, or just a great time with your friend. Let’s ride!
                    <br/>
                    <br/>
                    Duration: Approximately 3 Hours
                    <br/>
                    <br/>
                    Please Note: Maximum capacity of 2 riders. Single rider bookings will be charged an additional $50. Age minimum +14 and weight limit of 250lbs. All minors must be accompanied by an adult.
                    </div>}
                    image={meethorses1}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480767/calendar/2023/07/?full-items=yes&flow=1006891"}
                    price={"$150"}
                    imageStyle="meethorses1"
                />

                <Card 
                    title="Horses for Unforgettable Events"
                    text={<div>This unique offering focuses on creating a calm and   interactive environment where children and adults alike can sit with/on a gentle and majestic horse. It's a great option for those who wish to engage with these magnificent creatures in a more relaxed setting without riding independently. Your guests can also be hand-led around via horseback. Capture these        precious moments through photos in a safe, interactive opportunity creating unforgettable memories. Book these horses for your next event!
                        <br/>
                        <br/>
                        Duration: 1 Hour
                        <br/>
                        <br/>
                        Please Note: Base rate for 1 horse, for additional horses or a longer duration please call for additional pricing. Age minimum +2 and weight limit of 250lbs. All minors must be accompanied by an adult.
                        </div>}
                    image={meethorses2}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480554/?full-items=yes&flow=1006891"}
                    price={"$250"}
                />

                <Card 
                    title="Horseback Proposal"
                    text={<div>Ignite the spark of romance with our breathtaking horseback ride proposal experience. Set amidst picturesque landscapes, this enchanting journey combines the thrill of horseback riding with the ecstasy of a heartfelt proposal. Seize the perfect moment and create an unforgettable memory to be cherished for a lifetime. You Can't Get More Charming Than This!
                    <br/>
                    <br/>
                    Duration: Approximately 3 Hours
                    <br/>
                    <br/>
                    Please Note: Maximum capacity of 2 riders. Age minimum +18 and weight limit of 250lbs. Photographer not included, but available upon request. Call for additional pricing.
                    </div>}
                    image={newbg}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480785/?full-items=yes&flow=1006891"}
                    price={"$500"}
                    
                />
                
                <Card 
                    title="Fundamentals Horseback Riding Lesson"
                    text={<div>Embark on an exciting equestrian adventure with our Fundamental Riding Lesson. Designed for those new to horseback riding, this immersive experience offers a safe and supportive environment to learn the basics of horsemanship. Our skilled instructors will guide you through saddling, proper mounting techniques, basic commands, and essential riding skills, fostering confidence and a harmonious connection with your equine partner. Let’s ride!
                    <br/>
                    <br/>
                    Duration: Approximately 1 Hour
                    <br/>
                    <br/>
                    Please Note: Maximum capacity of 2 riders, single rider bookings will be charged an additional $25. Age minimum +6 and weight limit of 250lbs. All minors must be accompanied by an adult.
                    </div>}
                    image={samcanyon}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480734/?full-items=yes&flow=1006891"}
                    price={"$75"}
                    imageStyle="samcanyon"
                />
             
                
               
                
                <GiftCard 
                    title="Gift Cards"
                    image={contactcard}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480824/?full-items=yes&flow=1006891"}
                    price={null}
                />

        </div>

        <div className="booking-fine-print">
                       <span>Please Note:</span> 
                       <p>If your intended booking date(s) show no availability,
                        contact for possible special accomodations.
                        <br/>
                        <br/>
                        These prices for the Greater Salt Lake area. Contact for 
                        pricing beyond the Greater Salt Lake area.
                        <br/>
                        <br/>
                        Legal guardian signatures will be required for all minors.
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