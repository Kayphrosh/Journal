import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SubmissionHeader from './SubmissionHeader';
import SubmissionMain from './SubmissionMain';
import Footer from '../../components/Footer/Footer';
import './submission.css';

const SubmissionContainer = ({ activeStep }) => {
  // let index = 0;
  // const tab = (e) => {
  //   activeStep(index);
  // };
  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  return (
    <section className="submission">
      <Navbar />
      <SubmissionHeader />

      <div>
        <section className="submission-main-container">
          <nav className="submission-tab">
            <li
            className='active-tab'
            >
              Submission Guidlines
            </li>
            <li
              // className={
              //   toggleState === 2
              //     ? 'submission-tab active-tab'
              //     : 'submission-tabs'
              // }
              // onClick={() => toggleTab(2)}
            >
              Applicable Open Access Licenses
            </li>
            <li
              // className={
              //   toggleState === 3
              //     ? 'submission-tab active-tab'
              //     : 'submission-tabs'
              // }
              // onClick={() => toggleTab(3)}
            >
              Submit An Article
            </li>
            <li
              // className={
              //   toggleState === 4
              //     ? 'submission-tab active-tab'
              //     : 'submission-tabs'
              // }
              // onClick={() => toggleTab(4)}
            >
              Review Guidelines
            </li>
          </nav>

          <main className="submission-container">
            <SubmissionMain />
          </main>
        </section>
      </div>

      <Footer />
    </section>
  );
};

export default SubmissionContainer;
