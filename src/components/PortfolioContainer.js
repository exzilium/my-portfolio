import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import Header from "./Header";

// Default to About page
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Header receives currentPage state and handlePageChange function to update page state within Navtabs */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Body */}
      {renderPage()}
      {/* Footer */}
      <Footer />
    </div>
  );
}
