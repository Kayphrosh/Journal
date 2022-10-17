import React from 'react';
import IssuesLandingPageHeader from './IssuesLandingPageHeader';
import IssueContainerMain from './IssuesContainer';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

import './issues-landing-page.css';
const IssuesLandingPage = () => {
  return (
    <body className='issues-page-container'>
      <Navbar />
      <IssuesLandingPageHeader />
    <IssueContainerMain />
      <Footer />
    </body>
  );
};

export default IssuesLandingPage;
