import React from 'react'

export default function project(props){
    return(
        <div>
             <img src={props.coverImage} alt="cover_image"className="project-image" />
                <h3>{props.title}</h3>
                <h2>{props.technologies}</h2>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
        </div>
    )
};