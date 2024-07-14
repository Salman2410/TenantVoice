import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 


// Set the app element for react-modal to handle accessibility issues
Modal.setAppElement('#root');

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
