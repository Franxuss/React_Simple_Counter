//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

import { SecondCounter } from "./component/SecondCounter.js";

//render your react application
ReactDOM.render(
	<SecondCounter
		seconds={1000} //={parseInt(prompt("Ingrese el número máximo de segundos: "))}
	/>,
	document.querySelector("#app")
);
