// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './context/AuthContext'; // Import AuthProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN", // Replace with your actual Sentry DSN
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0, // Capture 100% of transactions for performance monitoring
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
