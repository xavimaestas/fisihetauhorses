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
                    title="Fundamentals Horseback Riding Lesson"
                    text={<div>Embark on an exciting equestrian adventure with our Fundamental Riding Lesson. Designed for those new to horseback riding, this immersive experience offers a safe and supportive environment to learn the basics of horsemanship. Our skilled instructor(s) will guide you through saddling, proper mounting techniques, basic commands, and essential riding skills, fostering confidence and a harmonious connection with your equine partner.
                    <br/>
                    <br/>
                    Duration: Approximately 1 Hour
                    <br/>
                    <br/>
                    Please Note: Maximum capacity of 2 riders, single rider bookings will be charged an additional $25. Age minimum +6 and weight limit of 250lbs. All minors must be accompanied by an adult.</div>}
                    image={samcanyon}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480734/?full-items=yes&flow=1006891"}
                    price={"$79.50"}
                    imageStyle="samcanyon"
                />
        <Card 
                    title="Adventure Ride & Horsemanship Lesson"
                    text={<div>Discover the bliss of horseback riding. Learn how to care for, saddle, and ride these majestic creatures in native terrains and in all seasons of the year. Perfect for special occasions, anniversaries, or just a great time with your friend. Our skilled instructor(s) will guide you through saddling, proper mounting techniques, basic commands, and essential riding skills, fostering confidence and a harmonious connection with your equine partner.
                    <br/>
                    <br/>
                    Duration: Approximately 3 Hours
                    <br/>
                    <br/>
                    Please Note: Maximum capacity of 2 riders. Single rider bookings will be charged an additional $50. Age minimum +14 and weight limit of 250lbs. All minors must be accompanied by an adult.

                    </div>}
                    image={meethorses2}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480767/calendar/2023/07/?full-items=yes&flow=1006891"}
                    price={"$159"}
                    
                />

        <Card 
                    title="Invite Horse(s) to your Event"
                    text={<div>This unique offering focuses on creating a calm and          interactive environment where children and adults alike can be or sit on a gentle horse. It's a great option for those who wish to engage with these magnificent creatures in a more relaxed setting without riding independently. Your guests can also be hand-led around via horseback. Book these horses for your next event!
                        <br/>
                        <br/>
                        Duration: 1 Hour
                        <br/>
                        <br/>
                        Please Note: Base rate for 1 horse, for additional horses or a longer duration please call for additional pricing. Age minimum +2 and weight limit of 250lbs. All minors must be accompanied by an adult.
    
                        </div>}
                    image={meethorses1}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480554/?full-items=yes&flow=1006891"}
                    price={"$265"}
                    imageStyle="meethorses1"
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
                    price={"$530"}
                />
                
                <Card 
                    title="Gift Cards"
                    text="With our gift cards, you're not just giving a present – you're giving the gift of freedom and discovery. Whether it's exploring breathtaking trails, honing riding skills with expert instructors, or bonding with majestic horses, there's something for every equestrian enthusiast to enjoy."
                    image={contactcard}
                    btn={"https://fareharbor.com/embeds/book/fisihetauhorses/items/480824/?full-items=yes&flow=1006891"}
                    price={null}
                    giftSize="gift-size"
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
                        <li>(801) 815-2473</li>
                        <li>snfisihetau@gmail.com</li>
        </ul>
            

    </div>

 
        
        

        
      
        
    )
}