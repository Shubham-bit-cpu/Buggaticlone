import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from './../assests/Logo.gif';
import Burgericon from './../assests/burgericon.png'
import $ from 'jquery';
import Header from "../Component/Header/Header"


const Layout = () => {
    return (
        <>
        
        {/* <Header></Header> */}
            {/* <div className="headerbox">
                <div className="col-12 d-flex align-ite ">

                    <div className="col-4 py-2 d-flex ">
                        <img src={Burgericon} className="burgericon active"></img>
                        <nav className="Navigationmenu active">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/Company">Company</Link>
                                </li>
                                <li>
                                    <Link to="/Lifestyle">Lifestyle</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-4 py-2 d-flex justify-content-center">
                        <img src={logo} className="companylogo"></img>
                    </div>
                    <div className="col-4 py-2 d-flex justify-content-end align-items-center ">
                        <ul className="findbuggati">
                            <li>Find a Buggati Partner</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg></li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* upperbody */}
            <div className="intoduction"></div>
            {/* <script>
            $(document).ready(function () {
                    $(".burgericon").trigger(function () {
                        $(".mobilemenu").toggleClass('active');
                    })
                    (".close").click(function () {
                        $(".mobilemenu").toggleClass('active');
                    })
                });
            </script> */}
            <Outlet />
        
        </>

    )
};

export default Layout;