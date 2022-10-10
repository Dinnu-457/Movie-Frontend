import React, { Component } from 'react';
import "../CSS/pay.css";
import cinema from "../images/cinema.jpg";
class Display extends Component {
    render() {
        return (
            <div class="pay">
                <img src={cinema}></img>
                <h1 style={{color:"white"}}>Your movie ticket is booked,Enjoy your movie! </h1>
            </div>
        );
    }
}

export default Display;