import React from "react";
import projectList from "../projectList";

export default function Portfolio() {
  return (
    <div>
      <h1>My projects</h1>
      <div className="container">
        <div className="row">
          {projectList.map((project)=> (
            <div key={project.id} className="col-4">
            <div className="card text-center">
              <div className="card-header">
                <h2>{project.title}</h2>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    alt={project.title}
                    className="img"
                    src={project.image}
                    style={{ margin: "0 auto" }}
                  />
                  <p>{project.description}</p>
                  <a href={project.link} className="btn btn-primary">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
