import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
// import HelloWorld  from "./components/HelloWorld";
import Scroll from "./components/Scroll";
import NavBar from "./components/Navbar";
import UserForm from "./components/UserForm";

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Scroll} />
				<Route exact path="/signup" component={UserForm} />
			</Switch>
		</Router>
		
	);
};

export default App;
