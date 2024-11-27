import React from "react";
import "./App.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const navOptions = [
        "Home",
        "About Us",
        "Services",
        "Portfolio",
        "Blog",
        "Contact Us",
        "Careers",
        "FAQs",
        "Testimonials",
        "Support"
    ];
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    

    return (
        <div className="Home">
            {/* Top Header Section */}
            <div className="blank">

            </div>
            <header className="header">
                <div className="left-section">
                    <img id="logo1" src="/media/logo11.png" alt="Logo 1" className="logo" />
                    <img src="/media/logo2.png" alt="Logo 2" className="logo" />
                    <img src="/media/logo3.png" alt="Logo 3" className="logo" />
                </div>
                <div className="right-section">
                    <span className="contact">Call: +123 456 7890</span>
                    <span className="contact">Email: example@example.com</span>
                </div>
            </header>

            {/* Moving Line Section */}
            <div className="moving-line">
                <div className="marquee">
                    <p>New Franchisee Offer Available. Please <a href="https://jifsa.in/franchisee-facilities.aspx">Click here</a> to know more</p>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="navbar">
                <ul>
                    {navOptions.map((option, index) => (
                        <li key={index}>
                            {option}
                            <ul className="dropdown">
                                <li key={`${option}-1`}>{option} Sub Option 1</li>
                                <li key={`${option}-2`}>{option} Sub Option 2</li>
                                <li key={`${option}-3`}>{option} Sub Option 3</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* banner */}
            <div className="slider-banner">
         <Slider {...sliderSettings}>
          <div>
            <img src="/media/banner1.jpg" alt="Banner 1" className="banner-img" />
          </div>
          <div>
            <img src="/media/banner2.jpg" alt="Banner 2" className="banner-img" />
          </div>
          <div>
            <img src="/media/banner3.jpg" alt="Banner 3" className="banner-img" />
          </div>
         </Slider>
      </div>
        </div>
    );
}

export default Home;




// import React from "react";
// import "./App.css";

// const home = () => {
//     const navOptions = [
//         "Home",
//         "About Us",
//         "Services",
//         "Portfolio",
//         "Blog",
//         "Contact Us",
//         "Careers",
//         "FAQs",
//         "Testimonials",
//         "Support"
//       ];
//     return (  <div className="Home">
//         {/* Top Header Section */}
//         <header className="header">
//           <div className="left-section">
//             <img src="/media/logo1.png" alt="Logo 1" className="logo" />
//             <img src="/media/logo2.png" alt="Logo 2" className="logo" />
//             <img src="/media/logo3.png" alt="Logo 3" className="logo" />
//           </div>
//           <div className="right-section">
//             <span className="contact">Call: +123 456 7890</span>
//             <span className="contact">Email: example@example.com</span>
//           </div>
//         </header>
  
//         {/* Moving Line Section */}
//         <div className="moving-line">
//           <marquee>
//           <p href="#link1">New Franchisee Offer Available Please <a href="https://jifsa.in/franchisee-facilities.aspx">Click here</a> to know more</p>
//           </marquee>
//         </div>
  
//         {/* Navigation Bar */}
//         <nav className="navbar">
//           <ul>
//             {navOptions.map((option, index) => (
//               <li key={index}>
//                 {option}
//                 <ul className="dropdown">
//                   <li>{option} Sub Option 1</li>
//                   <li>{option} Sub Option 2</li>
//                   <li>{option} Sub Option 3</li>
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//     ); 
// }
 
// export default home ;