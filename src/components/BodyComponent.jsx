import React, { Component } from 'react';
import bg from '../images/cinema1.jpg';
import FooterComponent from './FooterComponent';
class BodyComponent extends Component {
   constructor(props){
    super(props)
    this.state={
    }
   }
   
    render() {
        return (
            <div className='mainImg'>
               <img src={bg}></img>
            </div>
        );
    }
}

export default BodyComponent;