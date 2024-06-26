import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/Header';
import HeroLanding from './components/HeroLanding';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <HeroLanding/>
        <Home/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
