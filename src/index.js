import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root")); // It takes 2 parameters, firstly the jsx template secondly where would you like to render it in index.html

//Babel is a js compiler which basically takes our jsx and writes it in normal java script es5 and this is what is returned in our index.html because that's what it knows old js
//So create react-app now does all this for us
//1. setups babel and installs react for us

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
