import React from 'react';

// Context Store
import { StoreProvider } from '../store';

// Main App Component
import App from './App';

// Top-level root component ************ //

const LearnAnyting = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);

export default LearnAnyting;
