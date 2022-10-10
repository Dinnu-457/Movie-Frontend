import React, { Component } from "react";
import { Redirect,Link, Switch,Route} from 'react-router-dom';
import { connect } from "react-redux";
import '../CSS/register.css';
import cin from '../images/cinema.jpg';
// import ListMovieComponent from "./ListMovieComponent";
// import Movie from "../Movie";
class Profile extends Component {
  render() {
    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="card bg-light text-dark bground">
        <h3>Hey {currentUser.username}, Welcome to MovieTime.com</h3>
        <img src={cin}></img>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);