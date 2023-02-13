import React from "react";
import NavTabs from "./NavTabs";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <h1>Casey Dwyer</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
