import logo from './logo.svg';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact
 from './components/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cristiane Abreu</h1>
        < Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
        <Home/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
