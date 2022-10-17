import React from 'react'
import './issues-landing-page.css'
const IssuesLandingPageHeader = () => {
  return (
    <section className='issues-header-container'>
        <div className='issues-header-text'>
        <h2>Explore Past and Present Issues</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam incidunt inventore debitis, harum voluptas consequatur quos aut velit?</p>
       
        </div>
        <div className='issue-search-form'>
            <input type="search" name="" placeholder='Search for articles based on title' id="" />
            <iconify-icon class='iconify' icon="bx:search"></iconify-icon>
        </div>
       

    </section>
  )
}

export default IssuesLandingPageHeader