import reportWebVitals from './reportWebVitals';
import state, { addName, updateName } from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { subscribe } from './Redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          updateName={updateName}
          addName={addName}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
}


rerenderEntireTree(state);
subscribe(rerenderEntireTree(state));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
