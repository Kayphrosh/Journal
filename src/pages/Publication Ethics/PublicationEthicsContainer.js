import React from 'react'
import './publication-ethics.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PublicationEthics from './PublicationEthics'
const PublicationEthicsContainer = () => {
  return (
    <body className='publication-ethics-container'>
        <Navbar />
            <header>
                <h3>Publication Ethics</h3>
            </header>
            <PublicationEthics />
        <Footer />
    </body>
  )
}

export default PublicationEthicsContainer