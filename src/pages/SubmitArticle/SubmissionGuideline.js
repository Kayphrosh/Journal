import React from 'react'

const SubmissionGuideline = ({nextStep, prevStep}) => {
   const  continu = e => {
        // e.preventDefault();
        nextStep();
      };
    
      const back = e => {
        // e.preventDefault();
        prevStep();
      };
    
  return (
    <div className="submission-guidelines-container">
    <article>
      <p>
        The editors welcome submissions of high quality articles covering
        issues of intellectual property, information technology and
        E-commerce law. Papers may focus on European Union law, the law of
        EU Member States, other European jurisdictions or on international
        law issues in the field. Articles in English and in other European
        languages, especially German and French, are equally welcome.
        Articles not written in English must provide an English abstract.
        All articles will be double-blind peer reviewed. If you like to
        write a book review please contact the editors, they will send you
        copy of the book. Articles may be submitted to the editors at
        contact(at)jipitec.eu a
      </p>
    </article>
    <div className="submission-deadline">
      <h6>Submission deadlines for the coming issues:</h6>
      <ul>
        <li>15 May 2022 for the autumn issue 13 (3)</li>
        <li>15 September 2022 for the winter issue 13 (4)</li>
      </ul>
    </div>

    <div className="submission-cta">
      <button  onClick={back}>Previous</button>
      <button onClick={continu}>Next</button>
    </div>
  </div>
  )
}

export default SubmissionGuideline;