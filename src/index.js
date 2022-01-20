import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Task() {
	return (
		<li className="tasks-item">{props.taskName}</li>
	);
}
function TasksList() {
	return (
		<ul>
			<Task taskName="Follow Edukasyo.ph om Facebook."/>
			<Task taskName="Follow ASW Siklab Pilipinas on Facebbok."/>
			<Task taskName="Follow Zuitt Free Coding Bootcamp on Facebook,"/>
		</ul>
	);
}

function App() {
	const paraStyle = {
		"marginBottom": "15px"
	};

	return (
		<div className="app">
			<header className="app-header">
				<h1>My Amazing ToDO-List App</h1>
				<p style={paraStyle}>The most simple and amazing todo-list React app.</p>
				<TasksList />
			</header>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));