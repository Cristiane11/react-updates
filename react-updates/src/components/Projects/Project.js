import React from 'react';
import './Project.css'

export default function Project(props){
    return(
        <div className="contact-card">
                <img src={`../images/${props.coverImage}`} alt="cover_image"className="project-image" />
                <h3>{props.title}</h3>
                <div className="info-group">
                    <h2>{props.technologies}</h2>  
                </div>    
                <div className="info-group">
                    <a href="" className="btn btn-dark btn-sm my-1">More</a>
                </div>
        </div>
    )
};