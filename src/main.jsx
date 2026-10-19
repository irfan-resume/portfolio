import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles first, so component styles can build on (and override) them.
import './assets/css/variables.css';
import './assets/css/global.css';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
