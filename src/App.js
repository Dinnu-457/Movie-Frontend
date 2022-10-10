import logo from './images/logo.png';
import './App.css';
import FooterComponent from './components/FooterComponent';
import BodyComponent from './components/BodyComponent';
import { Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import EventBus from "./common/EventBus";
import React, { Component } from "react";
import { connect } from "react-redux";
import Movies from './components/Movies';
import BComponent from './components/Bcomponent';
import Payment from './components/Payment';
import PayResult from './components/PayResult';
import Paytm from './components/Paytm';
import Display from './components/Display';
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); 
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser} = this.state;

    return (
      
      <Router history={history}>
        <div>
       
          <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="logo"><img src={logo}></img>
                    <h2>MovieTime.com</h2>
                    </div>
            <div className="navbar-nav mr-auto">
              
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/movielist"} className="nav-link">
                    Movies
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
                {currentUser && (
                <li className="nav-item">
                  <Link to={"/booking"} className="nav-link">
                    Book
                  </Link>
                </li>
              )}
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
        
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
          <div className="container mt-3">
          
            <Switch>
            
            <Route exact path={["/", "/home"]} component={BodyComponent}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/movielist" component={Movies}/>
              <Route exact path="/booking" component={BComponent}></Route>
              <Route exact path="/payment" component={Payment}></Route>
              <Route exact path="/payResult" component={PayResult}></Route>
              <Route exact path="/paytm" component={Paytm}/>
              <Route exact path="/display" component={Display}></Route>
            </Switch>
          </div>
          <FooterComponent></FooterComponent>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);


















// function App() {
//   return (
//     <BrowserRouter>
//     <div>
//       <HeaderComponent></HeaderComponent>
//     <div className="container">
//     <Routes>
//       <Route index element={<BodyComponent/>}/>
//        <Route path="/home" element={<BodyComponent />} />
//        <Route path="/Regist" element={<Regist/>}/>
//        <Route path="/LoginComponent" element={<LoginComponent/>}/>
//        </Routes>
//     </div>
//     <FooterComponent></FooterComponent>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
