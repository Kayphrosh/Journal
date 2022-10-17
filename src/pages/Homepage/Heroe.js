import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './heroe.css';
const Heroe = () => {
  return (
    <section className="heroe-container">
      <Navbar />

      <main className="heroe-contents">
        <article>
          <h2>Achieve Anything You Put Your Mind To With The Law Journal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            enim blandit et eget lorem aliquam mattis nisi. 
          </p>
        </article>
        <div className="heroe-cta">
          <button>
            <iconify-icon class='iconify'
            icon="ant-design:plus-circle-filled"></iconify-icon>
            <p>Submit Article</p>
          </button>
          <button>Search Issues</button>
        </div>
      </main>
    </section>
  );
};

export default Heroe;
