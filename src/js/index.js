//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let counter = 0;
let parar = false;
let reinicio = false;


const iniciarParada = () =>{
	parar = true;
}

const reanudar = () =>{
	parar = false;
}

const iniciarReinicio = () =>{
	reinicio = true;
}



setInterval(() => {
	const one = counter % 10;
	const two = Math.floor (counter/10) % 10;
	const three = Math.floor (counter/100) % 10;
	const four = Math.floor (counter/1000) % 10;
	const five = Math.floor (counter/10000) % 10;
	const six = Math.floor (counter/100000) % 10;
	

	if (parar == false){
		counter++;
	};

	if (reinicio == true){
		counter = -1;
		counter++;
		reinicio = false;
		
	};


    
	ReactDOM.render(<Home one={one} two={two} three={three} four={four} five={five} six={six} iniciarParada={iniciarParada} reanudar={reanudar} iniciarReinicio={iniciarReinicio} counter={counter} />, document.querySelector("#app"));
}, 1000);