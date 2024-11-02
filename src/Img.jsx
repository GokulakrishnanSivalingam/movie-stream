import { useState } from 'react'
import {Link} from 'react-router-dom'
import Data from './Data.jsx'
import Data2 from './Data2.jsx'
import Data3 from './Data3.jsx'
import i1 from "../src/image/goat.png";
import i3 from "../src/image/salar.jpg"
import i2 from "../src/image/ba1.jpg"
import i4 from "../src/image/rrr.jpg"
import { GrNext } from "react-icons/gr";
import {Link} from "react-router-dom";

import './App.css'


function Img() {
  

  return (
  
      <div>
        <header>
        <div className="header">
         <h1> jetplex</h1>
        </div>
        </header>
<div className="slideshow-container">
<div class="slideshow-wrapper">
    <div className="slide">
        <img src={i1} alt="Movie 2"/>
    </div>
    <div className="slide">
        <img src={i2} alt="Movie 3"/>
    </div>
    <div className="slide">
        <img src={i3} alt="Movie 4"/>
    </div>
    <div className="slide">
        <img src={i4} alt="Movie 4"/>
    </div>
    </div>
</div>

     <div className="pick">  
        <h1>top movies</h1><Link to="/top"><GrNext/></Link></div> 
        <div class="container">
            <div class="wrapper"> 
            {Data.map((video) => (
        <Link key={video.id} to={`/video/${video.id}`}>
          <img src={video.imageUrl}/></Link>
            ))}
            </div>
            </div>
            <div className="pick">  
        
        <h1>marvel movies</h1><Link to="/mar"><GrNext/></Link></div> 
        <div class="container">
            <div class="wrapper"> 
            {Data2.map((video) => (
        <Link key={video.id} to={`/marvel/${video.id}`}>
          <img src={video.imageUrl}/></Link>
            ))}
            </div>
            </div>
            <div className="pick">  
        
        <h1>20s movies</h1><Link to="/twenty"><GrNext/></Link></div> 
        <div class="container">
            <div class="wrapper"> 
            {Data3.map((video) => (
        <Link key={video.id} to={`/20s/${video.id}`}>
          <img src={video.imageUrl}/></Link>
            ))}
            </div>
            </div>
            <footer>
  <div class="footer-container">
    <div class="footer-section logo">
      <h1>NETPLEX</h1>
      <p>Elegance meets excellence. Discover the difference with us.</p>
      <div class="socials">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    <div class="footer-section links">
      <h2>Explore</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section newsletter">
      <h2>Newsletter</h2>
      <p>Subscribe to our newsletter to stay updated on our latest news and offers.</p>
      <form action="#" method="post">
        <input type="email" name="email" placeholder="Enter your email" required/>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 NETPLEX. All rights reserved.</p>
  </div>
</footer>


       </div>
       
  )
}

export default Img
