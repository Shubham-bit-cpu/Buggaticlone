import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logo from './../../assests/Logo.gif';
import Burgericon from './../../assests/burgericon.png'
import facebookicon from '../../assests/fb.png'
import twittericon from '../../assests/twitter.png'
import Googleicon from '../../assests/Google.png'
import $ from 'jquery';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Header = (props) => {
    // const [toggle, setToggle] = useState(false);
    // const clickButton = () => {
    //     setToggle(!toggle);
    // }
    const [toggle, setToggle] = useState(false);
    const [logintoggle, setLoginToggle] = useState(false);
    const [loginbuttontoggle, setloginbuttontoggle] = useState(true);
    const [checklogintoken, setlogintoken] = useState(false);
    const nav =useNavigate();
    useEffect(() => {
        const items = localStorage.getItem('token');
        if (items != '') {
            nav("/");
            setlogintoken(true);
            setloginbuttontoggle(false)
            nav("/");
        }

    },[]);
    const clickButtonOpen = () => {
        console.log('true');
        setToggle(true);
    }
    const clickButtonClose = () => {
        console.log('false');

        setToggle(false);
    }
    const cxLogin = () => {
        setLoginToggle(true);
        setToggle(false);
    }
    const loginboxclose =()=>{
        
        setLoginToggle(false);
    }
    const cxLogout =()=>{

      localStorage.setItem('token','');
      console.log("logged out ");
      setlogintoken(false)
      setloginbuttontoggle(true)
    }
   
    return (
        <section className="headersection">
            <div className="container-fluid">

                <div className=" d-flex align-items-center ">
                    <div className="col-4 py-2 d-flex align-items-center">
                        <img src={Burgericon} className="burgericon active"
                            onClick={clickButtonOpen}
                        ></img>

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi close bi-x-lg" onClick={clickButtonClose} viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </div>
                    <div className="col-4 py-2 d-flex justify-content-center">
                        <img src={logo} className="companylogo"></img>
                    </div>
                    <div className="col-4 py-2 d-flex justify-content-end align-items-center ">
                        <ul className="findbuggati">
                            <li
                                onClick={props.clickbutton}
                                className={props.nav == "home" ? "active" : null}>
                                FIND A BUGGATI PARTNER
                            </li>

                            <li ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg></li>
                        </ul>
                    </div>
                </div>
                <div className={toggle ? "Navigationmenu active" : "Navigationmenu"}>
                    <div className="container">
                        <div className="row" >
                            <div className="col-6">
                                <ul className="py-4">
                                    <li className="menu">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="menu">
                                        <Link to="/ContactUs">ContactUs</Link>
                                    </li>
                                    <li className="menu">
                                        <Link to="/Lifestyle">Lifestyle</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <div className=" py-4  d-flex justify-content-end">
                                    <div class="signin">
                                      { loginbuttontoggle ?  <a class="Loginbuttons" onClick={cxLogin}>Login</a> :null}
                                    {checklogintoken? <a class="Loginoutbutton" onClick={cxLogout}>Logout</a> :null} 

                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="close  bi-x-circle-fill" onClick={clickButtonClose} viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class={logintoggle ? "Loginform active" : "Loginform"}>
                    <div class="logincanvas py-4 Justify-content-center">
                        
                        <div class="login ">
                            
                            <div class="row py-2 loginpopup">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" 
                            class="bi bi-x-circle-fill loginclose" viewBox="0 0 16 16" onClick={loginboxclose}>

                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg>
                                <div class="loginheader py-4">
                                    <h5 class="loginheading">Login</h5>
                                </div>
                                <div class="loginbody">
                                    <label class="loginlabel">Username or Email:</label>
                                    <input type="email" class="Loginfields" placeholder="Enter email" />
                                    <label class="loginlabel">Enter Password</label>
                                    <input type="password" class="Loginfields" id="exampleInputPassword1" placeholder="Password" />
                                    <div className="col-12 py-2 d-flex justify-content-end">
                                        <a href="#" className="forgetpw">Forget password</a>

                                    </div>
                                    <button type="submit" class="loginButton">Submit</button>
                                </div>
                                <div className="signupusing">
                                    <p>Or sign up Using</p>
                                    <div class="row d-flex justify-content-center">
                                        <img src={facebookicon} class="socialmedialoginicon" />
                                        <img src={twittericon} class="socialmedialoginicon" />
                                        <img src={Googleicon} class="socialmedialoginicon" />
                                    </div>
                                </div>
                                <div class="secondarySignupoption">
                                    <p>Or sign up Using</p>
                                    <a class="defaultsignup"><Link to="/SignUp">Sign UP</Link></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>





    )
   
};
export default Header;