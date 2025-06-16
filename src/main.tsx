import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';  // 👈 Import HashRouter

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>  {/* 👈 Use HashRouter instead of BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
