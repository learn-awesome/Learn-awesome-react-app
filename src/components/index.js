import React from 'react';

import { StoreProvider, StoreConsumer } from '../store';
import App from './App';

const LearnAnyting = () => (
  <StoreProvider>
    <StoreConsumer>
      {({ retrieveFromLocalStorage, isDarkThemeActive }) => (
        <App
          retrieveFromLocalStorage={retrieveFromLocalStorage}
          isDarkThemeActive={isDarkThemeActive}
        />
      )}
    </StoreConsumer>
  </StoreProvider>
);

export default LearnAnyting;
