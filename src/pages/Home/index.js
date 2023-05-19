import Header from "../../Component/Header/Header";
import BannerSection from "./BannerSection";
import Models from "../../Component/model/Model";
import Modelsub from "../../Component/model/modelsub";
import Footer from "../../Component/footer/footer";
import BuggatiUniverse from "./BuggatiUniverse";
import News from "../../Component/News/news";
import NewssSub from "../../Component/News/newssub";
import Login from "../../Component/Login/Login";
//import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
const Home = () => {
  const [checktoken, setChecktoken] = useState(false);
  const link = "xyz.com";
  //const clickButton = () => {
  //console.log('here');
  //setToggle(!toggle)
  //}
  const [toggle, setToggle] = useState(false);
  const clickButton = () => {
    setToggle(!toggle)
  }
  // useEffect(() => {
  //   const items = localStorage.getItem('token');
  //   if(items!=''){
  //     setChecktoken(true)
  //   }
  //   console.log(items)

  // },[]);
  return (
    <>
      {/* <Header nav="home" link1={link} clickbutton={clickButton} />
      {toggle ?
        <BannerSection />
        : null} */}
      <Header nav="home" link1={link} clickButton={clickButton}></Header>
      <BannerSection />

      <Models />
      <Modelsub />
      <BuggatiUniverse />
      <News />
      <NewssSub />
      <Footer />


    </>
  )
};

export default Home;