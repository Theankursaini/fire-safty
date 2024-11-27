import React from 'react';
import './App.css';
import Home from './home';
import Banner from './Banner';
import Body from './body';



function App() {
 
  
  return (
    <div className="App">
      <Home />
      {/* <Banner /> */}
      <Body />
      
     
    </div>
  );
}

export default App;



//  {/* Top Header Section */}
//       <header className="header">
//           <div className="left-section">
//             <img src="/media/logo1.png" alt="Logo 1" className="logo" />
//             <img src="/media/logo2.png" alt="Logo 2" className="logo" />
//             <img src="/media/logo3.png" alt="Logo 3" className="logo" />
//           </div>
//           <div className="right-section">
           
//             <span className="contact">Email: example@example.com</span>
//             <span className="contact">Call: +91 8955776603</span>
//           </div>
//         </header>
  
//         {/* Moving Line Section */}
//         <div className="moving-line">
//           <marquee>
//             <p href="#link1">New Franchisee Offer Available Please <a href="https://jifsa.in/franchisee-facilities.aspx">Click here</a> to know more</p>
           
//           </marquee>
//         </div>
  
//         {/* Navigation Bar */}
//         <nav className="navbar">
//           <ul>
//             {navOptions.map((option, index) => (
//               <li key={index}>
//                 {Option}
//                 <ul className="dropdown">
//                   <li>Sub Option 1</li>
//                   <li>Sub Option 2</li>
//                   <li>Sub Option 3</li>
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </nav>