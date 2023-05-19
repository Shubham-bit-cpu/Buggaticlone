import Burgericon from './../../assests/burgericon.png'
import facebookicon from '../../assests/fb.png'
import twittericon from '../../assests/twitter.png'
import Googleicon from '../../assests/Google.png'
import { Outlet, Link, redirect } from "react-router-dom";
import React, { useState } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [logintoggle, setLoginToggle] = useState(false);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [responsemessage, displaymessage] = useState("");
    const [errormessage, displayerrormessage] = useState("");
    const [usernamevalidation, setusernamevalidation] = useState(false);
    const [passwordvalidation, setpasswordvalidation] = useState(false);
    const [getresponsemessage, setresponsemessage] = useState(false);
    const [geterrormessage, seterroremessage] = useState(false);
    const [gettokencheckvalue, settokenvalue] = useState(false);
    const nav = useNavigate();
    // useEffect(() => {
    //     const items = localStorage.getItem('token');
    //     if (items != '') {
    //         nav("/");
    //     }

    // });
   
    
    const cxLogin = () => {
        setLoginToggle(true);

    }
    const loginboxclose = () => {
        setLoginToggle(false);
    }
    const setuname = (e) => {
        setusername(e.target.value)
        if (e.target.value != null)
            setusernamevalidation(false)
    }
    const setpword = (e) => {
        setpassword(e.target.value)
        if (e.target.value != null)
            setpasswordvalidation(false)
    }
    const Loginfetch = () => {

    }
    const login = () => {

        const regx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

        if (username == "") {
            setusernamevalidation(true);
        }
        if (regx.test(password) == false || password == "") {
            setpasswordvalidation(true)
        }
        const apilogin = 'https://api.reveo.io/api/auth/login';
        axios.post(apilogin, {
            password: password,
            email: username,

        }).then(function (response) {
            //  const {token} =response.data;

            displaymessage(response.data.message);
            if (responsemessage != null) {
                setresponsemessage(true);
                seterroremessage(false);


            }
            localStorage.setItem('token', response.data.token);
            nav("/");
            console.log(response);
            //console.log(response.data.token);
            // const items = localStorage.getItem('token');
            //      useEffect=()=>{
            //          if('token'==  )
            //            {
            //                settokenvalue(true);
            //                console.log(gettokencheckvalue);
            //         }
            //  }


        })
            .catch(function (error) {
                console.log(error.response.data.message);
                displayerrormessage(error.response.data.message);
                if (errormessage != null) {
                    seterroremessage(true)
                    setresponsemessage(false);
                }


            });



    }

    // console.log("get items"+ items);
    // const decoded = jwtDecode(items); 
    // console.log(decoded);
    return (
        <>

            <div class="logincanvas py-4 Justify-content-center">
                <div class="login ">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor"
                        class="bi bi-x-circle-fill loginclose" viewBox="0 0 16 16" onClick={loginboxclose}>

                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg> */}
                    <div class="row py-2 loginpopup">
                        <div class="loginheader py-4">
                            <h5 class="loginheading">Login</h5>
                        </div>
                        <div class="loginbody">
                            <div>
                                <label class="loginlabel">Username or Email:</label>
                                <input type="email" class="Loginfields" placeholder="Enter email"
                                    value={username}
                                    onChange={event => setuname(event)} />
                                {usernamevalidation ? <span className='signupnamevalidationame'>Please Enter correct Username*</span> : null}
                            </div>

                            <label class="loginlabel">Enter Password</label>
                            <input type="password" class="Loginfields" id="exampleInputPassword1" placeholder="Password"
                                value={password}
                                onChange={event => setpword(event)} />
                            {passwordvalidation ? <span className='signupnamevalidationame'>Please Enter correct password*</span> : null}
                            <div className="col-12 py-2 d-flex justify-content-end">
                                <a href="#" className="forgetpw">Forget password</a>





                            </div>
                            <button type="submit" class="loginButton" onClick={login}>Submit</button>

                            {getresponsemessage ? <span className='signupnamevalidationame'>Login was Successfull</span> : null}
                            {geterrormessage ? <span className='signupnamevalidationame'>{errormessage}</span> : null}
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


        </>
    )
}
export default Login;