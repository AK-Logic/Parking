import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Components/header'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header/>
        <App/>
    </div>
);