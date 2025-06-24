import React from 'react';
import projectData from './projectData';


export default function Project(){
    return(
        <div>
            <section>
                {projectData.map(item=>(
                <p key={item.id}>
                {item.title} 
                </p>  
            ))};
            </section> 
        </div>   
    );
};