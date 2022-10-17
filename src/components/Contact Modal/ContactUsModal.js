import React from 'react';
import './contact-modal.css';
const ContactUsModal = ({ setOpenModal }) => {
  return (
    <section className="form-modal-container">
      <div className="form-modal">
        <header>
          <h4>Contact Us</h4>
          <p>Filling and submitting the following contact form</p>
        </header>

        <button
          className="close-modal-btn"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <iconify-icon icon="iconoir:cancel"></iconify-icon>
        </button>

        <form action="" className="contact-form">
          <div>
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="enter your full name" />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder="johndoe@gmail.com" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea type="text" rows="4" name="" id="" />
          </div>
          <div className="form-cta">
            {/* <button>Cancel</button> */}
            <button>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsModal;
