import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import StockPrediction from './StockPrediction'; // Import your new component

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <Authenticator>
          {({ signOut }) => (
            <div className="auth-container">
              <header className="App-header">
                <h1>Stock Prediction and Visualization</h1>
              </header>
              <main>
                {/* <p>You are logged in!</p> */}
                <button onClick={signOut} className="sign-out-button">
                  Log Out
                </button>

                {/* Render StockPrediction Component */}
                <StockPrediction />
              </main>
            </div>
          )}
        </Authenticator>
      </div>
    </div>
  );
}

export default App;
