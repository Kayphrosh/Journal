import React, { useState } from 'react';
import ContactUsModal from '../../components/Contact Modal/ContactUsModal';

const ContactEditorial = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="contact-editorial">
      <h4>You Have Questions?</h4>
      <p>
        ​For any issues regarding article publication service please contact us
        through filling and submitting the following contact form. A managing
        editor will reply within five business days. Any feedback welcome and we
        look forward to hearing from you.
      </p>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Contact Us
      </button>
      {modalOpen && <ContactUsModal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default ContactEditorial;
