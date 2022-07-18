import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologyItem = technologies.map((techology) =>(
    <span key={techology}>{techology}</span>
  ));


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyItem}
      </div>
    </div>
  );
}

export default ProjectItem;
