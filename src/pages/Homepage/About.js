import React from 'react';
import aboutImg from '../../Images/bg.jpg';
import './about.css';
const About = () => {
  return (
    <section className="about-container">
      <div className='about-img'>
        <img src={aboutImg} alt="" />
      </div>

      <main className='about-content'>
        <header>
          <p>About The Law Journals</p>
          <h3>
            Our aim is to grow a space for the law profession to publish
            articles easily.
          </h3>
        </header>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            enim blandit et eget lorem aliquam mattis nisi. Volutpat quis lacus
            id enim, sagittis magna tortor. In diam integer. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Rhoncus enim blandit et eget
            lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis
            magna tortor. In diam integer. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Rncus enim blandit et eget lorem
            aliquam mattis nisi.
          </p>
          <p>
            Volutpat quis lacus id enim, sagittis magna tortor. In diam integer.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            enim blandit et eget lorem aliquam mattis nisi. Volutpat quis lacus
            id enim, sagittis magna tortor. In diam integer. Lorem ipsum dolor
            sit amet,{' '}
          </p>
        </article>
        <button>;</button>
      </main>
    </section>
  );
};

export default About;
