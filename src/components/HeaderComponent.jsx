import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Regist from './Regist';
import LoginComponent from './LoginComponent';
import '../CSS/HeaderCss.css';
class HeaderComponent extends Component {
   constructor(props){
    super(props)
    this.state={
    }
   }
    render() {
        return (
            <div className='back'>
               <header className='header'>
                    <nav className="navbar py-0 navbar-expand-md bg-light navbar-dark bg-dark headerr">
                    <div className="logo"><img src={logo}></img>
                    <h2>MovieTime.com</h2>
                    </div>
                    <ul className='nav_end'>
                    <CustomLink to="/Home" style={{textDecoration: 'none'}} ><h5>Home</h5></CustomLink>
                    <CustomLink to="/Movies" style={{textDecoration: 'none'}}><h5>Movies</h5></CustomLink>
                    <CustomLink to="/Regist" style={{textDecoration: 'none'}}><h5>Register</h5></CustomLink>
                    <CustomLink to="/LoginComponent" style={{textDecoration: 'none'}}><h5>Login</h5></CustomLink>
                    </ul>
                    </nav>
                </header>
                
            </div>

        );
    }
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default HeaderComponent;