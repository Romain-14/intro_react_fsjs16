import React from "react"; // facultatif
import {Routes, Route} from 'react-router-dom'; // pre-v6, Routes valait Switch
// import de nos composants pour les utilise dans ce fichier
import Header from "./Components/Containers/Header";
import Footer from "./Components/Containers/Footer";
import Home from "./Components/Containers/Home";
import Blog from "./Components/Containers/Blog";
import Contact from "./Components/Containers/Contact";

// au départ, nous avions les composants fonctionnelles (function)
// avec l'ES6 en 2015 nous sommes pas sur les composant de classe (class)

// function App(){	

// 	return (
// 		<h1>With a function</h1>
// 	)

// }

// class App extends React.Component{

// 	constructor(){
// 		super();
// 		this.state = {
// 			alias : "ro",
// 		}
// 		console.log("constructor")
// 	}

// 	// lifecycle(cycle de vie de react uniquement en class component)
// 	componentDidMount(){
// 		console.log("je componentDidMount");
// 	}
	
// 	render(){
// 		console.log("je render")
// 		return (
// 			<h1>With a class my name is {this.state.alias}</h1>
// 		)
// 	}

// }

// HOOKS 


// function App (props){
function App ({alias, text}){ // --> destructuring
	// console.log("body App");
	// // console.log(props);
	
	// // useEffect -> on peut y trouver une similarité avec les "lifecycle" de class
	// useEffect(() => {
	// 	console.log("useEffect");
	// }, []);

	// <React.Fragment>...</React.Fragment> ou <>...</>permets d'éviter de créer un élément supplémentaire car le return doit renvoyer un parent 
	return (
		<React.Fragment>
			{/* {console.log("return")} */}
			<Header />

			<Routes>
				
				<Route path="/" element={<Home alias={alias}/>}/>	
				<Route path="/blog" element={<Blog />}/>	
				<Route path="/contact" element={<Contact />}/>				
			
			</Routes>	
			<Footer/>			
		</React.Fragment>
	
	)
}


export default App;
