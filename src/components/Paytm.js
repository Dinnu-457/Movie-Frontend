import React, { Component } from "react";

import axios from "axios";

import paytmlogo from "../images/paytm_logo.png";

//import image

import { TOTAL } from "./Payment";
import "../CSS/paytm.css";


class Paytm extends Component {

  constructor(props) {

    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      mobileno: "",

      fourdigitpin: "",

      amount: "",

      total: ""

    };

  }

  componentDidMount() {

    this.setState({

      total: sessionStorage.getItem(TOTAL)

    });

  }

  onSubmit(e) {

    e.preventDefault();

    this.setState({

      mobileno: e.target.value,

      fourdigitpin: e.target.value,

      amount: e.target.value

    });

    const { mobileno, fourdigitpin, amount } = this.state;



    //     //Validating the input fields

    //     if (mobileno === "") {

    //       alert("Mobile Number cannot be empty");

    //     }

    //     if (fourdigitpin === "") {

    //       alert("PIN cannot be empty");

    //     }

    // else if{}

    const addPayment = {

      mobileno: this.state.mobileno,

      fourdigitpin: this.state.fourdigitpin,

      amount: this.state.amount

    };
    this.props.history.push(`/Display`);

  }
  render() {

    return (

      <div className="dd">

        <div className="container" style={{ marginTop: 0 }}>

          <center>

            <div className="card" style={{ width: 500 }}>

              <h5

                className="card-header info-color white-text text-center py-2"

                style={{ backgroundColor: " #45cbbe " }}

              >

                <strong style={{ color: "black" }}>

                  {" "}

                  <h2> Your Bill : {this.state.total} </h2>

                </strong>         

    </h5>

              <div className="logo1">

                <img src={paytmlogo} id="img" alt="" />

              </div>
              <h2 style={{color:"black"}}> Paytm Payment Gateway </h2>

              <div className="card-body ">

                <form

                  className="text-center"

                  style={{ color: "#757575" }}

                  onSubmit={this.onSubmit}

                >

                  <label> Mobile Number : </label>

                  <input

                    type="text"

                    placeholder="Mobile Number"

                    className="form-control mb-4"

                    name="mobileno"

                  />

                  <label> Four Digit PIN Number : </label>

                  <input

                    type="text"

                    placeholder="Four Digit PIN Number"

                    className="form-control mb-4"

                    name="fourdigitpin"

                  />           
                   <label> Amount : </label>

<input

  type="text"

  placeholder=""

  className="form-control mb-4"

  name="amount"

  value={this.state.total}

  readOnly

/>

<button
  className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect btn1"
  type="submit"
>
  Proceed

</button>

</form>

</div>

</div>

</center>

</div>

</div>

);

}

}



export default Paytm;