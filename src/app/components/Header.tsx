'use client'
import React from 'react'
import Image from 'next/image'

function Header() {
  function handleNavOpen() {
   const ham = document.getElementById("main-menu");
   if(ham?.classList[0]==="open") {
    ham?.classList.remove("open");
   }
   else
   {
    ham?.classList.add("open");
   }
  
   
   
  //  ham?.classList.add("open");
   console.log(ham?.classList[0],"ClassList")
  } 
  // $(function() {
  //   $(".menu-open").click(function() {
  //     $(".nav-menu").toggleClass("sidebar-open");
  //   });
  // });
  
  return (
    <>
    <div className='header-container'>
    <div className="header container">
      <a className='logo-n-title'>
        <div id="logo">
          <Image src="https://www.xzect.com/assets/images/xzect-logo.svg" alt='companyLogo' id='img' width={48} height={48}/>
        </div>
        <h1>Xzect</h1>
      </a>
      <span onClick={handleNavOpen} className='hamburger'></span>
    </div>
    <div className="gradient-color-1 gradient-color"></div>
    </div>
    <div className="header-fix"></div>
    </>
  )
}

export default Header