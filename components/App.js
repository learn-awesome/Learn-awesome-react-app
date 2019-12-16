import React from 'react';

import Landing from './Landing';

// Global Styles
import GlobalStyles from '../styles/GlobalStyles';
import { AppWrapper } from '../styles/App';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyles />
        <Landing />
      </AppWrapper>
    );
  }
}

export default App;
