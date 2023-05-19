import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";
import '../../App.css';
import React, { useState } from 'react';
import Buggatilogo from '../../assests/FABP.jpg';
import checkmark from '../../assests/checkmmark.png'
import { event } from 'jquery';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Contactform = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [gender, setRadio] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [LastNameError, setLastNameError] = useState(false);
    const [EmailBlankError, setEmailBlankError] = useState(false);
    const [Emailvalidation, setEmailvalidationError] = useState(false);
    const [SelectboxError, setselectboxBlankError] = useState(false);
    const [messagevalidation, setmessageboxvalidation] = useState(false);
    const [toggle, setToggle] = useState(false);
    
    const nav =useNavigate();
    useEffect(() => {
        const items = localStorage.getItem('token');
        if (items != '') {
            nav("/contactus");
           
        }

    },[]);
    
    const setFName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value != "")
            setFirstNameError(false);
    }
    const setMail = (e) => {
        setEmail(e.target.value);
        if (e.target.value != "")
            setEmailvalidationError(false)
        setEmailBlankError(false)
    }

    const lname = (e) => {
        setLastName(e.target.value);
        if (e.target.value != "")
            setLastNameError(false)
    }
    const cxmessage = (e) => {
        setMessage(e.target.value);
        if (e.target.value != "")
            setmessageboxvalidation(false)
    }
    const csubject = (e) => {
        setSubject(e.target.value);

    }
    const setRdio = (e) => {

        setRadio(e);
    }
    const handleChange = (e) => {
        console.log(gender)
        console.log(firstName);
        console.log(lastName);
        console.log(subject)
        console.log(email);
        console.log(message);
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (firstName == '') {
            setFirstNameError(true);
            return false;
        }
        if (lastName == '') {
            setLastNameError(true);
            return false;
        }
        if (email == '') {
            setEmailBlankError(true)
            return false;


        }
        if (regex.test(email) == false) {

            setEmailvalidationError(true)

            return false;
        }

        if (message == '') {
            setmessageboxvalidation(true)
            return false;
        }
        if (subject == "") {
            setselectboxBlankError(true)
            return false;
        }
        setToggle(true);

    }
    // const finalsubmit = () => {
    //     setToggle(true);



    // }
    return (
        <section className='contact'>
            <div className='container d-flex justify-content-center'>
               
                    <div className='row py-4'>
                        <div className='col-6 d-flex py-4 '>

                            <div className="form-group " style={{ width: '100%' }}>
                                <div className='col-12 d-flex justify-space-between' >
                                    <label for="Salutation" className="salutation">Salutation*</label>
                                    <div className="form-check">

                                        <label className="form-check-label" for="exampleRadios1">
                                            Mr.
                                        </label>
                                        <input className="form-check-input" type="radio" name="gender" id="exampleRadios1"
                                            value="Mr."
                                            onClick={() => setRdio('Mr')} checked
                                        />
                                    </div>
                                    <div className="form-check">

                                        <label className="form-check-label" for="exampleRadios2">
                                            Mrs.
                                        </label>
                                        <input className="form-check-input" type="radio" name="gender" id="exampleRadios2"
                                            value={gender}
                                            onClick={() => setRdio('Mrs')
                                            } />
                                    </div>
                                </div>
                                <div className="inputfield">
                                    <input type="text" name='firtname' className="form-fields" id="exampleInputEmail1"
                                        placeholder="firstname"
                                        value={firstName}
                                        onChange={event => setFName(event)}
                                    />
                                    {firstNameError ? <span className='namevalidationame'>Please Enter First name*</span> : null}
                                </div>
                                <div className="inputfield2 inputfield">
                                    <input type="E-mail" name="email" className="form-fields" id="exampleInputEmail1" aria-describedby="email help"
                                        placeholder="E-mail*"
                                        value={email}
                                        onChange={event => setMail(event)}

                                    />
                                    {
                                        EmailBlankError ? <span className='namevalidationame'>Please Enter Email*</span> : null
                                    }
                                    {
                                        Emailvalidation ? <span className='namevalidationame'>Please Enter correct Email*</span> : null
                                    }
                                </div>

                            </div>
                            {/* <button type="submit" class="btn btn-primary">Submit</button> */}

                        </div>
                        <div className='col-6  py-4 justify-content-center'>

                            <div className="inputfield1 inputfield ">
                                <input type="LastName" name="lastname" className="form-fields" id="exampleInputEmail1" aria-describedby="LastName"
                                    placeholder="LastName*"
                                    value={lastName}
                                    onChange={event => lname(event)}
                                />
                                {
                                    LastNameError ? <span className='namevalidationame'>Please Enter Last name*</span> : null
                                }
                            </div>

                            <div className="inputfield4">
                                <div className="form-group">

                                    <select id="inputState" className="form-fields" placeholder='subject'
                                        value={subject}
                                        onChange={event => csubject(event)} >
                                        <option name='subject' defaultValue>Subject</option>
                                        <option name='subject'>Historical Models</option>
                                        <option name='subject'>License Inquirises </option>
                                        <option name='subject'>Lifestyle Inquirises </option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div className='col-12 justify-content-center'>
                            <div className="inputfield3">

                                <textarea className=" form-fields" name="message" id="exampleFormControlTextarea1" rows="7"
                                    placeholder='Message'
                                    value={message}
                                    onChange={event => cxmessage(event)}>

                                </textarea>
                                {messagevalidation ? <span className='messagevalidation'>Please Enter Message*</span> : null}
                            </div>

                        </div>
                        <div className='submitbuttoncontainer'>
                            <button type="submit" className="submitbutton" onClick={handleChange}>SUBMIT</button>
                            {/* <button type="submit" class="finalsubmit active" onClick={finalsubmit}>FINAL SUBMIT</button> */}

                        </div>

                   
                </div>


            </div>
            <div className={toggle ? "finalsubmitcontainer active" : "finalsubmitcontainer"}>
                <div className='maincanvas py-4 justify-content-center '>
                    <div className='d-flex py-4 popup'>
                        <div className='image'>
                            <img src={Buggatilogo} className="contactuslogo"></img>
                        </div>
                        <div className='confirmation'>
                            <img src={checkmark} className="check"></img>
                            <header className='popheader'>Thank you for submitting the details</header>
                            <p className='popdetails'>We have collected your details.We will reach out in 24H.</p>
                            <li className='returnhome'><Link to="/">Go Home</Link></li>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
};
export default Contactform;