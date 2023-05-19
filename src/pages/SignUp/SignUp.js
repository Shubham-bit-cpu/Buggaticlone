import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import '../../App.css';
import Header from "../../Component/Header/Header";
import buggatibg from "../../assests/signupbg.jpeg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import { Outlet, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import userEvent from '@testing-library/user-event';
import { event } from 'jquery';
import Login from '../../Component/Login/Login';
import axios, { isCancel, AxiosError } from 'axios';
var d = new Date();
d.setFullYear(d.getFullYear() - 8);
var min = new Date();
min.setFullYear(min.getFullYear() - 60);

const apiRegister = 'https://api.reveo.io/api/auth/register';

const SignUp = () => {
    const [value, setdob] = useState(new Date());
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [phonevalue, setValue] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const [firstnamevalidation, setfirstNamevalidationerror] = useState(false);
    const [lastnamevalidation, setlastNamevalidationerror] = useState(false);
    const [dobvalidation, setDObvalidationerror] = useState(false);
    const [unamevalidation, setunamevalidationerror] = useState(false);
    const [passwordvalidation, setpwvalidationerror] = useState(false);
    const setFName = (e) => {
        setFirstName(e.target.value);

        if (e.target.value != "") {
            setfirstNamevalidationerror(false);
        }

    }
    const setlName = (e) => {

        setlastName(e.target.value)

        if (e.target.value != "")
            setlastNamevalidationerror(false);
    }
    const setDob = (e) => {

        setdob(e)
    }
    const setusername = (e) => {
        setUserName(e.target.value);

        if (e.target.value == "")
            setunamevalidationerror(false)
    }
    const setpw = (e) => {
        setpassword(e.target.value);

        if (e.target.value == "")
            setpwvalidationerror(false);
    }



    const handlesignup = () => {
        if (firstName == '') {
            setfirstNamevalidationerror(true);
            return false;
        }
        console.log(firstName);
        if (lastName == "") {
            setlastNamevalidationerror(true);
            return false;
        }
        console.log(lastName);
        console.log(country);
        console.log(region);
        if (value == "") {
            setDObvalidationerror(true);
            return false;
        }
        console.log(value);
        if (username == "" || username.length == 6) {
            setunamevalidationerror(true)
            return false;
        }
        console.log(username);
        const regx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
        if (regx.test(password) == false) {
            setpwvalidationerror(true)
        }
        console.log(password);
        console.log(phonevalue);
        submitData();

    }

    const submitData = () => {
        axios.post(apiRegister, {
            firstName: firstName + '' + lastName,
            password: password,
            confirmPassword: password,
            email: username,
            phonenumber: phonevalue

        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <section className='signupsection'>
                <div className='container'>
                    <div className='row py-4 justify-content-center'>
                        <div className='signupintroduction'>
                            <div className='welcome'>
                                <h2 className='welcomemnote'>Welcome to Buggati</h2>
                                <p className='welcomemnote'>Welcome to 1000+ HP beast</p>
                                <p className='welcomemnote'>Start your journey Today</p>
                                <p>Already have and account? <Link to="/Login ">Login </Link></p>
                            </div>
                        </div>
                        <div className='signup'>
                            <div className='signupcontainer'>
                                {/* <label className='signupfieds'>First Name</label>
 */}
                                <input type="text" className='signupfieds' placeholder='First Name'
                                    value={firstName}
                                    onChange={event => setFName(event)} />
                                {firstnamevalidation ? <span className='signupnamevalidationame'>Please Enter First name*</span> : null}
                                {/* <label className='signupfieds'>Last Name</label> */}
                                <input type="text" className='signupfieds ' placeholder='Last Name'
                                    value={lastName}
                                    onChange={event => setlName(event)} />
                                {lastnamevalidation ? <span className='signupnamevalidationame'>Please Enter Last name*</span> : null}
                                {/* <label className='signupfieds'>Date of Birth</label> */}
                                <DatePicker
                                    onChange={event => setDob(event)}
                                    value={value}
                                    className="signupfieds "
                                    maxDate={d}
                                    minDate={min}
                                    dayPlaceholder='dd'
                                    monthPlaceholder="mm"
                                    yearPlaceholder="yyyy"
                                />
                                {dobvalidation ? <span className='signupnamevalidationame'>Please Select DOB*</span> : null}
                                {/* <label className='signupfieds'>Select Country</label> */}
                                <div >
                                    <CountryDropdown className='signupfieds'
                                        value={country}
                                        onChange={(val) => setCountry(val)} />
                                    <RegionDropdown className='signupfieds'
                                        country={country}
                                        value={region}
                                        onChange={(val) => setRegion(val)} />
                                </div>
                                {/* <label className='signupfieds'>User Name</label> */}
                                <input type="email" className='signupfieds ' placeholder='Email Address' onChange={event => setusername(event)} />
                                {/* <label className='signupfieds'>Password</label> */}
                                {unamevalidation ? <span className='signupnamevalidationame'>Please enter correct email Address*</span> : null}
                                <input type="password" className='signupfieds ' placeholder='password' onChange={event => setpw(event)} />
                                {passwordvalidation ? <span className='signupnamevalidationame'>Please enter correct password*</span> : null}
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    className='signupfieds'
                                    value={phonevalue}
                                    onChange={setValue} />
                                <div className='d-flex justify-content-end'>
                                    <button type="button" class="btn btn-dark " onClick={handlesignup}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default SignUp;