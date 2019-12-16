import React from 'react';

import Landing from './Landing';
// Context Store
import { StoreProvider } from '../store';

// Global Styles
import GlobalStyles from '../styles/GlobalStyles';
import { AppWrapper } from '../styles/App';

const App = () => (
  <StoreProvider>
    <AppWrapper>
      <GlobalStyles />
      <Landing />
    </AppWrapper>
  </StoreProvider>
);

export default App;
