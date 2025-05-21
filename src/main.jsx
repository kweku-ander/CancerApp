import React from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './index.css';

import {PrivyProvider} from '@privy-io/react-auth';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <PrivyProvider
      appId="cmarsg5wx0074le0lbe3jc3m4"
      clientId="client-WY6LKCdgqDDCFUwCpe7teoNZdw3cLJTAUeUYCLUQgBE4N"
      config={{
        // Create embedded wallets for users who don't have a wallet
       
      }}
    >
    
    <Router>
      <App />
    </Router>
    
    </PrivyProvider>
)