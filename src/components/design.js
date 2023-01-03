import React from 'react'
import './design.css'
import icon2 from '../../src/images/icon-2.png'
import icon3 from '../../src/images/icon-3.png'
import icon4 from '../../src/images/icon-4.png'
import about1 from '../../src/images/about-1.jpg'
import about2 from '../../src/images/about-2.jpg'


function design() {
  return (
    <div className="archi">
      <div className="design">
        <div className="first">
        <img src= {icon2} alt="none" width="" height=""  />
        <h1>Design Approach</h1>
        <p>Erat ipsum justo amet duo et elitr <br></br>dolor, est duo duo eos lorem sed <br></br>diam stet diam sed stet.</p>
        </div>

        <div className="second">
        <img src= {icon3} alt="none" width="" height=""/>
        <h1>Innovative Solutions</h1>
        <p>Erat ipsum justo amet duo et elitr <br></br>dolor, est duo duo eos lorem sed<br></br> diam stet diam sed stet.</p>
        </div>

        <div className="third">
        <img src= {icon4} alt="none" width="" height="" />
        <h1>Project Management</h1>
        <p>Erat ipsum justo amet duo et elitr<br></br> dolor, est duo duo eos lorem sed<br></br> diam stet diam sed stet.</p>
        </div>
      </div>
        <div className="about">
        <img src= {about1} alt="none" width="350px" height="" />
        <div className="about2">
        <img src= {about2} alt="none" width="350px" height="" />

         <div className="agency">
        <h1>ABOUT US</h1><br></br>
        <h2>A Creative Architecture Agency<br></br>For Your Dream Home</h2>
        <br></br><br></br>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam<br></br> amet diam et eos. Clita 
         erat ipsum et lorem et sit, sed stet lorem sit clita<br></br> duo justo magna dolore erat amet</p>
         <br></br>
         <p> <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam<br></br> amet diam et eos. 
          Clita erat ipsum et lorem et sit, sed stet lorem sit clita<br></br> duo justo magna dolore erat amet</p>
        </p>
        <br></br><br></br>
        <h3>25 YEARS<br></br><span>OF</span><br></br> EXPERIENCE</h3>
        <br></br>
        <button><a href="#">Read More</a></button>
        </div>


        </div>
        </div>

        
        
      
    </div>
  )
}

export default design
