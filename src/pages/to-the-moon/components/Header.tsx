import React from 'react';
import './Header.css'; // Optional for specific styles

const Header: React.FC = () => {
  return (
    <header className="header glass-panel">
      <div className="container header-content">
        <a href="#" className="logo">
          <img src="/grego_name_logo.svg" alt="Grego Logo" />
        </a>
        <nav className="nav-links">
          <a href="#about">Qué es</a>
          <a href="#features">Qué soluciona</a>
          <a href="#impact">Qué misión tiene</a>
        </nav>
        <div className="header-actions">
          <a href="https://app.grego.pe/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            PRUÉBALO AHORA
          </a>
          <a href="#contact" className="btn btn-secondary">Contáctanos</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
