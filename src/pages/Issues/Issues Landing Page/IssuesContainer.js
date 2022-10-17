import React from 'react'
import './issues-container-main.css'
import AllIssues from './AllIssues'
const IssueContainerMain = () => {
  return (
    <section className='issues-container-main'>
        <header>
            <h4>All Issues (45)</h4>
            <button className='filter-btn'>Fillter</button>
        </header>

        <AllIssues />
    </section>
  )
}

export default IssueContainerMain;