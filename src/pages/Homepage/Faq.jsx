import React from 'react'
import { useState } from 'react';
import './faq.css'
const Faq = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
      if (selected === i) {
        return setSelected(null);
      }
      setSelected(i);
    };
  
    const faqData = [
        {
            question:'Who Can Use The Law Journal?',
            answer: 'Rncus enim blandit et eget lorem.Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. '
        },
        {
            question:'How long does it take to get your issue published?',
            answer: 'Rncus enim blandit et eget lorem.Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. '
        },
        {
            question:'What type of article can I publish?',
            answer: 'Rncus enim blandit et eget lorem.Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. '
        },
        {
            question:'Is the Law journal free?',
            answer: 'Rncus enim blandit et eget lorem.Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. '
        },
        {
            question:'Who Can Use The Law Journal',
            answer: 'Rncus enim blandit et eget lorem.Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. '
        },
        {
            question:'Who Can Use The Law Journal',
            answer: 'Rncus enim blandit et eget lorem.Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. '
        },
    ] 
  return (
    <section className='faq-container'>
        <header>
            <p>You Have Some Questions?</p>
            <h4>Read Our Frequently Asked Questions</h4>
        </header>

        <main className='faqs'>
            {faqData.map((faq, i) => {
                return (
                    <div className='faq'>
                        <div className='faq-question' onClick={() => toggle(i)}>
                        <h5>{faq.question}</h5>
                        <button>
                        {selected === i ? (
                    <iconify-icon
                      style={{
                        color: '#F7C948',
                        transition: 'all 0.5s ease-in-out;',
                      }}
                      icon="fe:close"
                    ></iconify-icon>
                  ) : (
                    <iconify-icon
                      style={{ color: '#FFF' }}
                      className="open-icon"
                      icon="ant-design:plus-outlined"
                    ></iconify-icon>
                    )}
                        </button>
                        </div>
                        <div className={selected === i ? 'faq-answer shows' : 'faq-answer'}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                )
            })}
        </main>
    </section>
  )
}


export default Faq;