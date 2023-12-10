import React from "react";
import ProjectListItem from "./ProjectListItem";
import '../App.css';

function ProjectList({ projects }) {

  return (
    <div className="project-list">
      {projects.map((project) => {
        return <ProjectListItem key={project.id} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
