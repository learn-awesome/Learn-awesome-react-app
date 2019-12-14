import React from 'react';

import Landing from './Landing';

// Global Styles
import GlobalStyles from '../styles/GlobalStyles';
import { AppWrapper } from '../styles/App';

const App = () => (
  <AppWrapper>
    <GlobalStyles />
    <Landing />
  </AppWrapper>
);

export default App;
