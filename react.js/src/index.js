import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import Calc from './pages/Calculation';
import Sign from './Components/Sign_component';

// function Navbar() {
//     return (
//         <nav> 
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/Calculation">Calculated at</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1>Can I Park Here?</h1>
        <App/>
    </div>
);