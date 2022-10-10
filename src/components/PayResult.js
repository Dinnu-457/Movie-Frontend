import React, { Component } from 'react';
import logo from "../images/logo.png";
import cinema from "../images/cinema.jpg";
import '../CSS/pay.css';
import StripeCheckout from 'react-stripe-checkout';
// class PayResult extends Component {
//     render() {
//         return (
//             <div class="pay">
//                 <img src={cinema}></img>
//                 <h1 style={{color:"white"}}>Your movie ticket is booked,Enjoy your movie! </h1>
//             </div>
//         );
//     }
// }

// export default PayResult;




function PayResult(){
    const onToken = (token)=>{
        console.log(token);

    }
    return(

        <div className="pay">

            <StripeCheckout

            token={onToken}

            name="Card Payment"

            currency="Inr"

            stripeKey="pk_test_51LpQqaSEphoRBgPcga4DrtiflRYLQUtTMp6SneWRv0raDk6gfRJ0QcrgMVOjWSblGC3ZdrLqUg1YJsJIzYIBG6bh00EVEHL9p3"
          />   
          <div class="im"><img src={cinema}></img></div>

        </div>

    )



}

export default PayResult;