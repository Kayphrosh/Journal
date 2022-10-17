import React from 'react';

const SubmissionOpenAccess = ({nextStep, prevStep}) => {

    const  continu = e => {
        nextStep();
      };
    
      const back = e => {
        prevStep();
      };
    
  return (
    <div className="submission-guidelines-container">
      <article>
        <p>
          Most Open Access publications apply a Creative Commons license to
          specify rights and permissions associated with the article, building
          on copyright. Most Karger Open Access articles are distributed under
          the default license, Creative Commons Attribution-NonCommercial 4.0
          International License (CC BY-NC 4.0). Creative Commons Attribution 4.0
          International License (CC BY 4.0) is applied when mandated by research
          funders, such as those who have signed onto Plan S. Open Access
          articles in Karger Transformative Journals are published under the
          Creative Commons Attribution 4.0 (CC BY) license.
        </p>
      </article>

      <div className="submission-cta">
      <button  onClick={back}>Previous</button>
      <button onClick={continu}>Next</button>
      </div>
    </div>
  );
};

export default SubmissionOpenAccess;
