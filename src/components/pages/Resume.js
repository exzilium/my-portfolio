import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";

export default function Resume() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <p>
        <a
          href="https://docs.google.com/document/d/1HQpajsHLQhUjmwB4S59B9apyft6TDmDm8kN4U5GwxOM/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          View and Download
        </a>
      </p>
      <h1>Skills</h1>
      <>
        <MDBBadge pill className="mx-2" color="info" light>
          MERN Stack
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          MongoDB
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          Express
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          React
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          Node
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          SQL
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          Sequelize
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          JQeury
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          HTML
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          CSS
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          Github
        </MDBBadge>
        <MDBBadge pill className="mx-2" color="info" light>
          Heroku
        </MDBBadge>
      </>
    </div>
  );
}
