import React from 'react';

// Context Store
import { StoreProvider, StoreConsumer } from '../store';

// Main App Component
import App from './App';

// Top-level root component ************ //

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
