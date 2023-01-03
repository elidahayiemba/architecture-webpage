import React, {Component} from "react"
import "./header.css"
import icon from '../../src/images/icon-1.png'



export default class Header extends Component{
    render(){
        return(
            <div>
                <header>
                    <div className="logo">
                    <img src= {icon} alt="none" width="" height="" />
                    <h1><a href="#">Arkitektur</a></h1>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#pricing">SERVICES</a></li>
                            <li><a href="#beer">PAGES</a></li>
                            <li><a href="#bread">CONTACT</a></li>
                            <li><button><a href="#">Appointment</a></button></li>
                            

                        </ul>

                    </div>
                </header>
                
            </div>
        )
    }
} 