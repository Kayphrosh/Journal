import React from 'react';

const SubmissionReview = ({prevStep, nextStep}) => {

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
          The peer reviewer is responsible for critically reading and evaluating
          a manuscript in their specialty field, and then providing respectful,
          constructive, and honest feedback to authors about their submission.
          It is appropriate for the Peer Reviewer to discuss the strengths and
          weaknesses of the article, ways to improve the strength and quality of
          the work, and evaluate the relevance and originality of the
          manuscript.
        </p>
      </article>

      <div className="submission-cta">
      <button  onClick={back}>Previous</button>
      <button onClick={continu}>Next</button>
      </div>
    </div>
  );
};

export default SubmissionReview;
