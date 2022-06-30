import React from 'react';
import "./Banner.css";
import BanHeader from './BanHeader';

function Banner() {
 function showBanHeader (){
return(
<BanHeader/>
)
    }
  return (
    <div className='banner'>
       <header>
           
           <div className="headers ">
           
               <div className="logo">
               <h1>Logo</h1>
               </div>
               <div className="nav">
                   <ul>
                       <li>Home</li>
                       <li>About Us <svg xmlns="http://www.w3.org/2000/svg" width="6.191" height="10.828" viewBox="0 0 6.191 10.828">
  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.571,11.608l-4.1-4.094a.771.771,0,0,1,0-1.093.78.78,0,0,1,1.1,0l4.642,4.639a.772.772,0,0,1,.023,1.067L12.573,16.8a.774.774,0,1,1-1.1-1.093Z" transform="translate(-11.246 -6.196)" fill="#ffffff"/>
</svg></li>
                       <li>Projects <svg xmlns="http://www.w3.org/2000/svg" width="6.191" height="10.828" viewBox="0 0 6.191 10.828">
  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M15.571,11.608l-4.1-4.094a.771.771,0,0,1,0-1.093.78.78,0,0,1,1.1,0l4.642,4.639a.772.772,0,0,1,.023,1.067L12.573,16.8a.774.774,0,1,1-1.1-1.093Z" transform="translate(-11.246 -6.196)" fill="#ffffff"/>
</svg></li>
                       <li>Financial Statements</li>
                       <li>Contact Us</li>
                   </ul>
               </div></div>
                </header>
                <div className='aside'>
                    <h1 onClick={showBanHeader}>01</h1>
                    <h1>02</h1>
                    <h1>03</h1>
                    <h1>04</h1>
                </div>
                <div className='sectionImg'>
                    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
       
                </div>
    </div>
  )
}

export default Banner