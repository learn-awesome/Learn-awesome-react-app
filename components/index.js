import React from 'react';

// Context Store
import { StoreProvider, StoreConsumer } from '../store';

// Main App Component
import App from './App';

// Top-level root component ************ //

const LearnAnyting = () => (
  <StoreProvider>
    <StoreConsumer>
      {({ retrieveFromLocalStorage }) => (
        <App retrieveFromLocalStorage={retrieveFromLocalStorage} />
      )}
    </StoreConsumer>
  </StoreProvider>
);

export default LearnAnyting;
