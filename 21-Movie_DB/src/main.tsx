import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import { AppProvider } from './context/index.tsx';
import './index.css';


ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
    <React.StrictMode>
        <AppProvider>
            <Router>
                <App />
            </Router>
        </AppProvider>
    </React.StrictMode>,
);
