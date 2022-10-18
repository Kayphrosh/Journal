import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './heroe.css';
import ContactUsModal from '../../components/Contact Modal/ContactUsModal';
import '../../components/Contact Modal/contact-modal.css';
const Heroe = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const contactmodal = () => {
    setModalOpen(true);
  };

  const navigate = useNavigate();

  const navigateToSubmission = () => {
    navigate('/submission');
  };
  return (
    <section className="heroe-container">
      <Navbar contactmodal={contactmodal} />

      <main className="heroe-contents">
        {modalOpen && <ContactUsModal setOpenModal={setModalOpen} />}
        <article>
          <h2>Achieve Anything You Put Your Mind To With The Law Journal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            enim blandit et eget lorem aliquam mattis nisi.
          </p>
        </article>
        <div className="heroe-cta">
          <button onClick={navigateToSubmission}>
            <iconify-icon
              class="iconify"
              icon="ant-design:plus-circle-filled"
            ></iconify-icon>
            <p>Submit Article</p>
          </button>
          <button>Search Issues</button>
        </div>
      </main>
    </section>
  );
};

export default Heroe;
