const slides = document.querySelectorAll('.sliding-div');
let currentIndex = 0;
console.log("Script2 is loaded");
console.log(slides.length);
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("current");
        } else {
            slide.classList.remove("current");
        }
    });
}


let setTestimonial = setInterval(function() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}, 5000);

const Home = () => {
    return (
<body>
    <div className="bg-container" >
        
        <div className="gradient-section" > 
        <div className="herobox1"> 
            <h1 className="home-page-heading">How we work</h1>
              <p className="home-page-para">Experience seamless laundry care in four simple steps: <br /> order online, enjoy convenient pick-up, trust our expert <br />
                  cleaning, and receive hassle-free delivery to your doorstep.</p>
        </div>
            <main className="home-page-main">
                <div className="home-page-cards">
                    <div className="home-page-card">
                            <h3 className="cards-heading">1 <br /> Order</h3>
                    </div>
                    <div className="home-page-card">
                            <h3 className="cards-heading">2  <br /> Pick Up</h3>
                    </div>
                    <div className="home-page-card">
                            <h3 className="cards-heading">3  <br /> Cleaning</h3>
                    </div>
                    <div className="home-page-card">
                            <h3 className="cards-heading">4  <br /> Delivery</h3>
                    </div>
                </div>  
            </main>
            <h2 className="category-heading">Categories</h2>
        </div>
            <div className="categories">
                <div className="card-set">
                    <div className="card-set-c">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/washing.jpg" alt="Washing-Photo" />
                            <h4>Washing</h4>
                        </a>
                    </div>
                    <div className="card-set-c">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Ironing.jpg" alt="Ironing-Photo" />
                            <h4>Ironing</h4>
                        </a>
                    </div>
                    <div className="card-set-c">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Folding.jpg" alt="Folding-Photo" />
                            <h4>Folding</h4>
                        </a>
                    </div>
                </div>

                <div className="card-set">

                    <div className="card-set-c">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Dry-cleaning.jpg" alt="Dry-cleaning-Photo" />
                            <h4>Dry cleaning</h4>
                        </a>
                    </div>
                    <div className="card-set-c">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Wash-fold.jpg" alt="Wash-Fold-Photo" />
                            <h4>Wash & Fold</h4>
                        </a>
                    </div>
                    <div className="card-set-c">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Wash-Iron.webp" alt="" />
                            <h4>Wash & Iron</h4>
                        </a>
                    </div>
                </div>
            </div>
            <h2 className="category-heading">Service Types</h2>
            <div className="service-types">
                <div className="reg-service">
                    <h2 className="category-heading">Regular</h2>
                    <p className="home-page-para">Reliable, scheduled laundry solutions for everyday convenience.</p>
                </div>
                <div className="urg-service">
                    <h2 className="category-heading">Urgent</h2>
                    <p className="home-page-para">Instant laundry care for when time is of the essence.</p>
                </div>
            </div>
            <h2 className="category-heading">Pricing</h2>

            <div className="pricing">


                <div className="pricing-set">

                    <div className="pricing-set-c">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Basic-package.png" alt="Basic-Pack-Photo" />
                        </a>    
                        <div className="overlay">
                            <button className="get-started-button">Get Started</button>
                        </div>
                    </div>

                    <div className="pricing-set-c">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Express-package.png" alt="Express-Package-Photo"/>
                        </a>
                        <div className="overlay">
                            <button className="get-started-button">Get Started</button>
                        </div>
                    </div>

                    <div className="pricing-set-c">

                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Luxury-package.png" alt="Luxury-Package-Photo" />
                        </a>
                        <div className="overlay">
                            <button className="get-started-button">Get Started</button>
                        </div>
                    </div>

                    <div className="pricing-set-c">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Custom-package.png" alt="Custom-Package-Photo" />
                        </a>
                        <div className="overlay">
                            <button className="get-started-button">Get Started</button>
                        </div>
                    </div>

                </div>
            </div>
            <h2 className="category-heading">Why Us?</h2>
                <div className="gradient-section-bottom">
                    <div className="testimonial">
                        <div className="testimonial-set">
                            <div className="testimonial-set-photo">
                        <a className="home-page-a" href="#">
                            <img src="./src/assets/Testimonial-photo.png" alt="testimonial-photo" />
                        </a>    
                    </div>

                    <div className="testimonial-text-section">
                        <h2 className="testimonial-heading">Check What our Customers <br /> Say About Us</h2>
                        <div className="slide-container">
            
                            <div className="sliding-div current">
                                <p><span>John Roberts</span><br />⭐⭐⭐⭐⭐</p>
                                <p>&#34;Laundry Lift made laundry day a breeze! Easy online ordering, quick pick-up, and expert cleaning. Highly
                                    recommended!&#34;
                                </p>
                            </div>
                            
                            <div className="sliding-div">
                                <p><span>Maria Rodriguez</span><br />⭐⭐⭐⭐⭐</p>
                                <p>&#34;Seamless service from Laundry Lift! Convenient online orders, swift pick-ups, and top-notch cleaning. Try it—you
                                    won&#39;t be disappointed!&#34;</p>
                            </div>
                            
                            <div className="sliding-div">
                                <p><span>Chandler Bing</span><br />⭐⭐⭐⭐⭐</p>
                                <p>&#34;Life&#39;s easier with Laundry Lift. Quick online orders, efficient pick-ups, and quality cleaning. A happy,
                                    satisfied customer!&#34;</p>
                            </div>
                        </div>
            
                    </div>

                </div>
            </div>
            <div className="form-container">
                <h2 className="Newsletter-heading">Newsletter</h2>
                <p className="Newsletter-para">Get 10% off your first order when you  <br /> sign up for our email list.</p>
                <form>
                  <input type="email" className="input-email" placeholder="Enter email" required />
                  <button type="submit" className="btn-subscribe">Subscribe</button>
                </form>
            </div>
        </div>
       </div>  
    </body>
    );
};
export default Home