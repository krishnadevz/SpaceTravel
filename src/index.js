import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Space from "./components/Space";
import Globe from "./components/Globe";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Switch>
    <Route exact path="/" component={Globe}/>
    <Route path="/Space" exact component={Space} />
    </Switch>
  </React.StrictMode>
  </BrowserRouter>
 ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
