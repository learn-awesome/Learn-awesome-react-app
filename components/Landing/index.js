import React from 'react';

import Header from './Header';
import Topics from './Topics';
import Footer from './Footer';

import { LandingWrapper } from '../../styles/App';

const Landing = () => (
  <LandingWrapper>
    <div>
      <Header />
      <Topics />
    </div>
    <Footer />
  </LandingWrapper>
);

export default Landing;
