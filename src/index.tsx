import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { LocalizationProvider } from './contexts/localizationContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <LocalizationProvider>
    <App />
  </LocalizationProvider>,
);
