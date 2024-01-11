import '../styles/Home.css';
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


var setTestimonial = setInterval(function() {
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
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="./Assets/home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

</head>
<body>

    <div class="bg-container">

        <div class="gradient-section">

        <header>
                <div class="logo">
                    <a href="#">
                        <img src="./images/Logo.png" alt="Logo"> Laundry Lift
                    </a>
                </div>
    
                <nav>
    
    
                    <div class="navbutton">
                        <a href="#">Home</a>
                    </div>
    
                    <div class="navbutton">
                        <a href="#">About Us</a>
                    </div>
                    
                    <div class="navbutton">
                        <a href="#">Services</a>
                    </div>

                    <div class="contactusnavbutton">
                        <a href="#">Contact Us</a>
                    </div>

                    <div class="loginnavbutton">
                        <a href="#">Login</a>
                    </div>
    
    
                </nav>
        </header>

        <div class="herobox1">
        
            <h1>How we work</h1>
              <p>Experience seamless laundry care in four simple steps: <br> order online, enjoy convenient pick-up, trust our expert <br>
                  cleaning, and receive hassle-free delivery to your doorstep.</p>
        </div>

        <!-- Main Section -->
            
            <main>

                <div class="cards">
                    <div class="card">
                            <h3>1 <br> <br> Order</h3>
                    </div>
                    <div class="card">
                            <h3>2 <br> <br> Pick Up</h3>
                    </div>
                    <div class="card">
                            <h3>3 <br> <br> Cleaning</h3>
                    </div>
                    <div class="card">
                            <h3>4 <br> <br> Delivery</h3>
                    </div>
                </div>  

            </main>

            <!-- Category Section -->

            <h2>Categories</h2>

        </div>

            <div class="categories">

                <div class="card-set">

                    <div class="card-set-c">
                        <a href="#">
                            <img src="./images/Washing.jpg" alt="Washing-Photo">
                            <h4>Washing</h4>
                        </a>
                    </div>
                    <div class="card-set-c">
                        <a href="#">
                            <img src="./images/Ironing.jpg" alt="Ironing-Photo">
                            <h4>Ironing</h4>
                        </a>
                    </div>
                    <div class="card-set-c">
                        <a href="#">
                            <img src="./images/Folding.jpg" alt="Folding-Photo">
                            <h4>Folding</h4>
                        </a>
                    </div>
                </div>

                <div class="card-set">

                    <div class="card-set-c">
                        <a href="#">
                            <img src="./images/Dry-cleaning.jpg" alt="Dry-cleaning-Photo">
                            <h4>Dry cleaning</h4>
                        </a>
                    </div>
                    <div class="card-set-c">
                        <a href="#">
                            <img src="./images/Wash-fold.jpg" alt="Wash-Fold-Photo">
                            <h4>Wash & Fold</h4>
                        </a>
                    </div>
                    <div class="card-set-c">
                        <a href="#">
                            <img src="./images/Wash-Iron.webp" alt="">
                            <h4>Wash & Iron</h4>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Services Section -->

            <h2>Service Types</h2>

            <div class="service-types">
                <div class="reg-service">
                    <h2>Regular</h2>
                    <p>Reliable, scheduled laundry solutions for everyday convenience.</p>
                </div>

                <div class="urg-service">
                    <h2>Urgent</h2>
                    <p>Instant laundry care for when time is of the essence.</p>
                </div>

            </div>

            <!-- Pricing Section -->

            <h2>Pricing</h2>

            <div class="pricing">


                <div class="pricing-set">

                    <div class="pricing-set-c">
                        <a href="#">
                            <img src="./images/Basic-package.png" alt="Basic-Pack-Photo">
                        </a>    
                        <div class="overlay">
                            <button class="get-started-button">Get Started</button>
                        </div>
                    </div>

                    <div class="pricing-set-c">
                        <a href="#">
                            <img src="./images/Express-package.png" alt="Express-Package-Photo">
                        </a>
                        <div class="overlay">
                            <button class="get-started-button">Get Started</button>
                        </div>
                    </div>

                    <div class="pricing-set-c">
                        <a href="#">
                            <img src="./images/Luxury-package.png" alt="Luxury-Package-Photo">
                        </a>
                        <div class="overlay">
                            <button class="get-started-button">Get Started</button>
                        </div>
                    </div>

                    <div class="pricing-set-c">
                        <a href="#">
                            <img src="./images/Custom-package.png" alt="Custom-Package-Photo">
                        </a>
                        <div class="overlay">
                            <button class="get-started-button">Get Started</button>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Testimonial Section -->

            <h2>Why Us?</h2>


            <div class="gradient-section-bottom">

            <div class="testimonial">


                <div class="testimonial-set">

                    <div class="testimonial-set-photo">
                        <a href="#">
                            <img src="./images/Testimonial-photo.png" alt="testimonial-photo">
                        </a>    
                    </div>

                    <div class="testimonial-text-section">
                        <h2 class="testimonial-heading">Check What our Customers <br> Say About Us</h2>
                        <div class="slide-container">
            
                            <div class="sliding-div current">
                                <p><span>John Roberts</span><br>⭐⭐⭐⭐⭐</p>
                                <p>"Laundry Lift made laundry day a breeze! Easy online ordering, quick pick-up, and expert cleaning. Highly
                                    recommended!"
                                </p>
                            </div>
                            
                            <div class="sliding-div">
                                <p><span>Maria Rodriguez</span><br>⭐⭐⭐⭐⭐</p>
                                <p>"Seamless service from Laundry Lift! Convenient online orders, swift pick-ups, and top-notch cleaning. Try it—you
                                    won't be disappointed!</p>
                            </div>
                            
                            <div class="sliding-div">
                                <p><span>Chandler Bing</span><br>⭐⭐⭐⭐⭐</p>
                                <p>"Life's easier with Laundry Lift. Quick online orders, efficient pick-ups, and quality cleaning. A happy,
                                    satisfied customer!</p>
                            </div>
                        </div>
            
                    </div>

                </div>
            </div>

            <!-- Newsletter Section -->

            

            <div class="form-container">
                <h2 class="Newsletter-heading">Newsletter</h2>
                <p class="Newsletter-para">Get 10% off your first order when you  <br> sign up for our email list.</p>
                <form>
                  <input type="email" class="input-email" placeholder="Enter email" required>
                  <button type="submit" class="btn-subscribe">Subscribe</button>
                </form>
            </div>


            <!-- Footer Section -->
            <footer>
                <div class="footer-social">
                    <a href="#" target="_blank" class="fa fa-facebook"></a>
                    <a href="#" target="_blank" class="fa fa-twitter"></a>
                    <a href="#" target="_blank" class="fa fa-instagram"></a>
                    <br>
                    <br>
                </div>

                <div class="footer-nav">

                    <div class="footer-navbutton">
                        <a href="#">Home</a>
                    </div>
    
                    <div class="footer-navbutton">
                        <a href="#">About Us</a>
                    </div>
                    
                    <div class="footer-navbutton">
                        <a href="#">Services</a>
                    </div>
    
                    <div class="footer-navbutton">
                        <a href="#">Contact Us</a>
                    </div>
    
                    <div class="footer-navbutton">
                        <a href="#">Login</a>
                    </div>
                </div>


        
                <div class="footer-bottom">
                    All rights reserved - Copyright 2023©
        
                </div>
                
            </footer>
            </div>


    </div>
    
</body>
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
<script src="./script.js"></script>
</html>
    );
};
export default Home