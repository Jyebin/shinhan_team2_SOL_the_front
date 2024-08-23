import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { SavingsProvider } from './store/SavingsProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <SavingsProvider>
        <App />
    </SavingsProvider>,
);
