import React from 'react'
import "./services.css"
import icon from '../../src/images/icon-5.png'

function services() {
  return (
    <div className="services">
        <h2>Our Services</h2>
        <h1>We Focused On Modern <br></br>Architecture And Interior Design</h1>
        <div className="table">
            <table>
                <tr>
                    <td><img src= {icon} alt="none" width="" height=""/></td>
                    <h3>Architecture</h3>
                    <p>Erat ipsum justo amet duo et elitr <br></br>dolor, est duo duo
                     eos lorem sed<br></br> diam stet diam sed stet.</p>
                     <button>Read More</button>

                    <td><img src= {icon} alt="none" width="" height=""/></td>
                    <h3>3D Animation</h3>
                    <p>Erat ipsum justo amet duo et elitr <br></br>dolor, est duo duo
                     eos lorem sed<br></br> diam stet diam sed stet.</p>
                     <button>Read More</button>

                     
                    <td><img src= {icon} alt="none" width="" height=""/></td>
                    <h3>House Planning</h3>
                    <p>Erat ipsum justo amet duo et elitr <br></br>dolor, est duo duo
                     eos lorem sed<br></br> diam stet diam sed stet.</p>
                     <button>Read More</button>
                     
                
                </tr>
                
                <tr>
                    <td><img src= {icon} alt="none" width="" height=""/></td>
                    <h3>Interor Design</h3>
                    <p>Erat ipsum justo amet duo et elitr <br></br>dolor, est duo duo
                     eos lorem sed<br></br> diam stet diam sed stet.</p>
                     <button>Read More</button>

                     <td><img src= {icon} alt="none" width="" height=""/></td>
                    <h3>Renovation</h3>
                    <p>Erat ipsum justo amet duo et elitr <br></br>dolor, est duo duo
                     eos lorem sed<br></br> diam stet diam sed stet.</p>
                     <button>Read More</button>

                     <td><img src= {icon} alt="none" width="" height=""/></td>
                    <h3>Construction</h3>
                    <p>Erat ipsum justo amet duo et elitr <br></br>dolor, est duo duo
                     eos lorem sed<br></br> diam stet diam sed stet.</p>
                     <button>Read More</button>
                </tr>
                            

            </table> 

        </div>
      
    </div>
  )
}

export default services
