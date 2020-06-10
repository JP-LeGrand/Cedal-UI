import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root")); // It takes 2 parameters, firstly the jsx template secondly where would you like to render it in index.html

//Babel is a js compiler which basically takes our jsx and writes it in normal java scriipt es5 and this is what is returned in our index.html because that's what it knows old js
//So create react-app now does all this for us
//1. setups babel and installs react for us
