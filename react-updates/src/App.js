import {Routes, Route} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Project';
import Experience from './components/Section/Experience';
import Education from './components/Section/Education';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Section/Skills';
//import Nav from './components/Nav/Nav';
import './App.css';

function App() {
 
    return(
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="footer" element={<Footer/>}/>
            <Route path="education" element={<Experience/>}/>
            <Route path="about" element={<About/>} />
            <Route path="education" element={<Education/>}/>
            <Route path="skills" element={<Skills/>} />
            <Route path="contact" element={<Contact/>}/>
            <Route path="project" element={<Project/>}/>
       </Routes>
    );
}

export default App;
