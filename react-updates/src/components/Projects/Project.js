import React from 'react';


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