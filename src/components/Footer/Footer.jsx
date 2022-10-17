import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <section className='footer-container'>
        <main>
        <div className='about-text'>
            <h4>The Law Journal</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus enim blandit et eget lorem aliquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam in. Volutpat quis lacus id enim, sagittis magna.</p>
        </div>
        <div className='footer-nav'>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
        </div>
        </main>
        <aside>
        &#169;The Law Journal | All Rights Reserved
        </aside>
    </section>
  )
}

export default Footer;