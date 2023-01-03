import React, {Component} from "react"
import "./caurosel.css"
import caro1 from '../../src/images/carousel-1.jpg'

export default class Caurosel extends Component{


    render(){
        return(
            <div className="caurosel">
                <img src= {caro1} alt="none" width="1300px" height="600px" />
                <h1>Best Architecture and <br></br>Interior Design Services</h1>
                <p>Get great decor and design ideas, shop online to create the home you’ve been dreaming<br></br> of, or even find professionals.</p>
                <button><a href="#">Read More</a></button>
                

                
                
                
            </div>
        )
    }
} 