//Project
/*import React from 'react';


export default function Project(props){
    return(
        <div className="project-card">
                <img src={`../images/${props.coverImg}`} className="project-image" />
                <h3 className="project-title">{props.title}</h3>
                <div className="info-group">
                    <h2>{props.technologies}</h2>  
                </div>    
                <div className="info-group">
                    <a href="" className="btn btn-dark btn-sm my-1">More</a>
                </div>
        </div>
    )
};
//Aps
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

export default App;*/