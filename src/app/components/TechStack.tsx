'use client'
import React from 'react'
import LanguageCard from './LanguageCard'
function TechStack() {
  return (
  <section className="tech-stack">
    <div className="container">
      <h2 className="section-h2">Leverage our software &amp; hardware expertise </h2>
      <p className="section-p">Use our services and tech expertise to create disruptive products &amp; solutions that can revolutionize your business and stay ahead with evolving technological advancements.</p>
      <div className="tech-tools">
        <LanguageCard/>
        <LanguageCard/>
        <LanguageCard/>
        <LanguageCard/>
        <LanguageCard/>
        <LanguageCard/>
      </div>
      </div>
      <div className="view-all-stack"><a className="all-stack btn" href="/tech-stack">Explore Our Entire Tech Stack</a></div>
       </section> 
        
  )
}

export default TechStack