import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import EditorHeader from './EditorHeader'
import Editors from './Editors'
import Footer from '../../components/Footer/Footer'
import ContactEditorial from './ContactEditorial'

const EditorialContainer = () => {
  return (
    <div className='editorial'>
      <Navbar />
      <EditorHeader />
      <Editors />
      <ContactEditorial />
      <Footer />
    </div>
  )
}

export default EditorialContainer;
