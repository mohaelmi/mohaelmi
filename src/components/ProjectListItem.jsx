// import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";
import "../App.css";

function ProjectListItem({ project }) {
  return (

    <section className='project-item'>
    <div class="card" >
    <div class="card-inner">
      <div class="card-front">
        {/* <p>{project.name}</p> */}
        <img src={project.photo_URL} alt="poject" width="280" height="200" />
      </div>
      <div class="card-back">
        <p>Click to learn more</p>
      </div>
    </div>
  </div>
  <hr></hr>
    <div className='project_footer'>
    <p>{project.name}</p>
    <GitHubIcon className="github_icon" fontSize='medium' />
    </div>
    </section>
  );
}

export default ProjectListItem;
