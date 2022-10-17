import React, { useState } from 'react';
import './submission.css';
import SubmissionGuideline from './SubmissionGuideline';
import SubmissionOpenAccess from './SubmissionOpenAccess';
import SubmissionForm from './SubmissionForm';
import SubmissionReview from './SubmissionReview';

const SubmissionMain = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const activeStep = () => {
    setStep(step);
  };

  // Handle fields change
  // const handleChange = (e) => {
  //   setHousesData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }))
  //   console.log(e.target.value)
  // };

  // <section className="submission-main-container">
  //   <nav className="submission-tab">
  //     <li className="active-tab">Submission Guidlines</li>
  //     <li>Applicable Open Access Licenses</li>
  //     <li>Submit An Article</li>
  //     <li>Review Guidelines</li>
  //   </nav>

  //   <main className="submission-container">

  switch (step) {
    case 1:
      return (
        <SubmissionGuideline
          nextStep={nextStep}
          prevStep={prevStep}
          activeStep={activeStep}
          // handleChange={handleChange}
        />
      );
    case 2:
      return (
        <SubmissionOpenAccess
          nextStep={nextStep}
          prevStep={prevStep}
          activeStep={activeStep}
          // handleChange={handleChange}
        />
      );
    case 3:
      return (
        <SubmissionForm
          nextStep={nextStep}
          prevStep={prevStep}
          activeStep={activeStep}
          // handleChange={handleChange}
        />
      );

    case 4:
      return (
        <SubmissionReview
          nextStep={nextStep}
          prevStep={prevStep}
          activeStep={activeStep}
          // handleChange={handleChange}
        />
      );
    default:
      console.log('This is a multi-step form built with React.');
  }

  {
  }

};

export default SubmissionMain;
