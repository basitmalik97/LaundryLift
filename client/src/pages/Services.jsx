import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Services = () => {
    return (
        
        <body className="gradient-section">
            <Nav />
            <div>
        
                <div className="bg-container">
                    <main>
                        <div className="herobox1">
        
                            <h1 className="services-h1">Our Laundry Services</h1>
                            <p className="main-p">Welcome to Laundry Lift, where we take care of your garments with precision and
                                care. Our
                                comprehensive laundry
                                services are designed to make your life easier, giving you more time to focus on what matters
                                most. Explore our
                                range of services below:</p> <br />
                        </div>
                    </main>
                    <div className="service-section">
        
                        <div className="herobox2">
        
                            <h2>Washing</h2>
                            <p>Leave the dirty work to us! Our washing service ensures that your clothes are treated with the
                                utmost care. We use
                                advanced technology and premium detergents to remove stains, odors, and impurities, leaving your
                                garments fresh and
                                vibrant.</p> <br />
                            <a href="test-page.html" className="mybutton">Book Now</a>
                        </div>
        
                        <div className="herobox2-img">
                            <img src="./src/assets/washing.jpg" alt="Image for washing." />
                        </div>
                    </div>
        
                    <div className="service-section">
        
                        <div className="herobox3">
        
                            <h2>Ironing</h2>
                            <p>Experience the joy of neatly folded laundry without lifting a finger. Our meticulous folding
                                service not only saves
                                you time but also ensures that your clothes are organized and ready to be placed back into your
                                wardrobe with
                                precision.</p> <br />
                            <a href="test-page.html" className="mybutton">Book Now</a>
                        </div>
        
                        <div className="herobox3-img">
                            <img src="./src/assets/Ironing.jpg" alt="Image for Ironing." />
                        </div>
        
                    </div>
        
                    <div className="service-section">
        
                        <div className="herobox4">
        
                            <h2>Folding</h2>
                            <p>Say goodbye to wrinkles and creases! Our ironing service transforms your clothes into impeccably
                                pressed
                                masterpieces. Whether it&#39;s business attire or casual wear, we handle each garment with expertise
                                to deliver a
                                polished and professional look.</p> <br />
                            <a href="test-page.html" className="mybutton">Book Now</a>
                        </div>
        
                        <div className="herobox4-img">
                            <img src="./src/assets/Folding.jpg" alt="Image for Folding." />
                        </div>
        
                    </div>
        
                    <div className="service-section">
        
                        <div className="herobox5">
        
                            <h2>Dry cleaning</h2>
                            <p>For delicate fabrics and garments with special care requirements, our dry cleaning service is the
                                solution. Using
                                industry-leading techniques and eco-friendly solvents, we gently clean and refresh your items,
                                preserving their
                                quality and extending their lifespan.</p> <br />
                            <a href="test-page.html" className="mybutton">Book Now</a>
                        </div>
        
                        <div className="herobox5-img">
                            <img src="./src/assets/Dry-cleaning.jpg" alt="Image for dry cleaning." />
                        </div>
        
                    </div>
        
                    <div className="service-section">
        
                        <div className="herobox6">
        
                            <h2>Wash & Fold</h2>
                            <p>Enjoy the perfect combination of convenience and quality with our Wash & Fold service. Simply
                                drop off your laundry,
                                and our expert team will take care of the rest. Your clothes will be washed, dried, and expertly
                                folded, ready for
                                you to pick up or have delivered to your doorstep. Experience the ultimate time-saving solution
                                for your busy
                                lifestyle.</p> <br />
                            <a href="test-page.html" className="mybutton">Book Now</a>
                        </div>
        
                        <div className="herobox6-img">
                            <img src="./src/assets/Wash-fold.jpg" alt="Image for wash & fold." />
                        </div>
        
                    </div>
        
                    <div className="service-section">
        
                        <div className="herobox7">
        
                            <h2>Wash & Iron</h2>
                            <p>For a hassle-free laundry routine, try our Wash & Iron service. We go the extra mile by not only
                                washing your clothes
                                with precision but also ensuring they are professionally ironed to perfection. Whether it&#39;s your
                                everyday essentials
                                or special garments, our team ensures that your clothes look impeccable and ready to wear.</p>
                            <br />
                            <a href="test-page.html" className="mybutton">Book Now</a>
                        </div>
        
                        <div className="herobox7-img">
                            <img src="./src/assets/Wash-Iron.webp" alt="Image for wash & iron." />
                        </div>
        
                    </div>
                </div>
            </div>
            <Footer />
        </body>
          );
};
export default Services