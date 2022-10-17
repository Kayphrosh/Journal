import React from 'react'
import './how-it-works.css'
import noteIcon from '../../Images/note-favorite.svg'

const HowItWorks = () => {

   const data = [
    {
        icon: noteIcon,
        title: 'Articulate your thoughts',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Rhoncus enim blandit et eget lorem aliquam mattis nisi Volutpat quis lacus id enim, sagittis magna tortor. In diam integer.',
    },
    {
        icon: noteIcon,
        title: 'Articulate your thoughts',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Rhoncus enim blandit et eget lorem aliquam mattis nisi Volutpat quis lacus id enim, sagittis magna tortor. In diam integer.',
    },
    {
        icon: noteIcon,
        title: 'Articulate your thoughts',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Rhoncus enim blandit et eget lorem aliquam mattis nisi Volutpat quis lacus id enim, sagittis magna tortor. In diam integer.',
    }
   ] 


  return (
    <div className='how-it-works-container'>
      <header>
        <p>How the Journal works</p>
        <h3>Put Your Thoughts Or Publications Together And Get Them Published And Read Online.</h3>
      </header>

      <main className='how-it-works'>
        {data.map((details, idx) => {
        return (

            <div className='how-it-work'>
                <img src={details.icon} alt="" />
                <h6>{details.title}</h6>
                <p>{details.paragraph}</p>
            </div>
        )   

        })}
        <div>
        </div>
      </main>
    </div>
  )
}

export default HowItWorks
