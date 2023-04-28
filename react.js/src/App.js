import styles from "./style.css"
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Calculation from "./pages/Calculation"
import Home_Page from "./pages/Home";




export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component = {Home_Page}/>
        <Route exact path="/calculate" component = {Calculation} />
        </Switch>
    </Router>
  )
};
