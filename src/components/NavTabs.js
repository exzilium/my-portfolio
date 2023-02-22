import React from "react";

// props for currentPage state and change hanlder to update state
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          // update currentPage state to About
          onClick={() => handlePageChange("About")}
          // if current page is the current link, highlight as active
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          // update currentPage state to Portfolio
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          // update currentPage state to Contact form
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          // update currentPage state to Contact form
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
