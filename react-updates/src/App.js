import Footer from './components/Footer/Footer';
import projectData from './components/Projects/projectData';
import Project from './components/Projects/Project';
import './App.css';

function App() {
  const projectsCard = projectData.map(project=>{
    return <Project title={project.title} technologies={project.technologies}coverImg={project.coverImg}/> 
  })
  return (
    <div className="App">
      <header className="contacts">
      </header>
      <body>
        {projectsCard}
      </body>
      <Footer/>
    </div>
  );
}

export default App;
