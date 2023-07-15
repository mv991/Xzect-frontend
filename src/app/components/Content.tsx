import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <section className="company-intro">
        <div className="pattern-1"></div>
        <div className="container">
                <div className="dancing-box-wrap">
                    <div className="dancing-box">
                        <div className="box-cube">
                            <div className="box-faces box-front"></div>
                            <div className="box-faces box-back"></div>
                            <div className="box-faces box-top"></div>
                            <div className="box-faces box-bottom"></div>
                            <div className="box-faces box-left"></div>
                            <div className="box-faces box-right"></div>
                        </div></div></div>
                        <div className="brand-n-btn">
                            <h2 className="brand-tagline">
                            <span style={{color:"brown"}}>Build,</span> 
                <span style={{color:"#545ffd"}}>test,</span> 
                <span style={{color:"grey"}}>and</span> 
                <span style={{color:"green"}}> execute your ideas </span>
                <span style={{color:"grey"}}>with our </span>
                <span style={{color:"#f1ae50"}}>innovative solutions.</span>
                            </h2><div className="cta-btn-group">
                                <a href="https://wa.me/919818806393?text=Hi, I am interested in the services provided by Xzect Labs Private Limited and would like to schedule a time to discuss them with you." className="btn cta-btn cta-1">
                                     <span className="cta-txt">Chat now on Whatsapp</span>
                                </a>
                                <a className="btn cta-btn cta-2" href="/services">
                                    <span className="cta-icon"></span><span className="cta-txt">Explore Our Services</span>
                                </a>
                            </div>
                        </div>
                        </div>
                    </section>
  )
}

export default Header