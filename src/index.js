import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Space from "./components/Space";
import Globe from "./components/Globe";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
// do not delete this
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <Switch>
        <Route exact path="/" component={Globe} />
        <Route  path="/space" component={Space} />
        <Route  path="/search" component={Search} />
        <Route path="*" component={NotFound}/>
      </Switch>
    {/* </React.StrictMode> */}
    <Footer/>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
