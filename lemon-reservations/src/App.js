import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/Header';
import HeroLanding from './components/HeroLanding';
import Home from './components/Home';
import CustomersSay from './components/CustomersSay';
import About from "./components/About";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <HeroLanding/>
        <Home/>
        <CustomersSay/>
        <About/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
