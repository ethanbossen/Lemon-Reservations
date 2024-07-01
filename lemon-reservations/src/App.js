import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/Header';
import Home from "./components/Home";
import CustomersSay from "./components/CustomersSay";
import About from "./components/About";
import React from "react";


function App() {
  return (
    <div className="App">
        <Header/>
        <Nav/>
        <Main/>
        <Home />
        <CustomersSay />
        <About />
        <Footer/>
    </div>
  );
}

export default App;
