import React from 'react'
import './newsletter.css'
const Newsletter = () => {
  return (
    <section className='newsletter-container'>
        <header>
            <h4>Subscribe To Our Newsletter</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus enim blandit et eget lorem aliquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam in. </p>
        </header>

        <div className='newsletter-form'>
            <input type="email" placeholder='johndoe@mail.com' />
            <button>+</button>
        </div>
    </section>
  )
}

export default Newsletter;
