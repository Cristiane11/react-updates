import Footer from './components/Footer/Footer';
import projectData from './projectData';
import Project from './components/Projects/Project';
//import Nav from './components/Nav/Nav';
import './App.css';

function App() {
  const projectsCard = projectData.map(project=>{
    return <Project 
        {...project}
    /> 
  })
  return (
    <div className="App">
     
      <section className="projects-list">
        {projectsCard}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
