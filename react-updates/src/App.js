import logo from './logo.svg';
import Footer from './components/Footer/Footer';
import projectData from './components/Projects/projectData';
import './App.css';

function App() {
  const projects = projectData.map(project=>{
    return 
    <Project 
    id={project.id}
    title={project.title}
    description={project.description}
    technologies={project.technologies}
    coverImg={project.coverImg}
    link={project.link}
    />

    
  })
  return (
    <div className="App">
      <header className="contacts">
        <h1>Cristiane Abreu</h1>
      </header>
      <body>
        {projects[0]}
      </body>
      <Footer/>
    </div>
  );
}

export default App;
