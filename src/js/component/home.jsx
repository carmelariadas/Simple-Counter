import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="text-center container mt-5">
			<div className="row d-flex  justify-content-center">
				
				<div className="col-2 reloj mx-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clock mt-4" viewBox="0 0 16 16">
					<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
					<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
					</svg>
				</div>
				<div className="digit col-1 mx-2"><p className="mt-4">{props.six}</p></div>
				<div className="digit col-1 mx-2"><p className="mt-4">{props.five}</p></div>
				<div className="digit col-1 mx-2"><p className="mt-4">{props.four}</p></div>
				<div className="digit col-1 mx-2"><p className="mt-4">{props.three}</p></div>
				<div className="digit col-1 mx-2"><p className="mt-4">{props.two}</p></div>
				<div className="digit col-1 mx-2"><p className="mt-4">{props.one}</p></div>
			</div>	
			<div className="container">
				<button type="button" className="btn btn-danger" onClick={props.iniciarParada}>Parar</button>
				<button type="button" className="btn btn-success" onClick={props.reanudar}>Reanudar</button>
				<button type="button" className="btn btn-primary" onClick={props.iniciarReinicio}>Reinicio</button>				
			</div>

		</div>
	);
};

export default Home;
