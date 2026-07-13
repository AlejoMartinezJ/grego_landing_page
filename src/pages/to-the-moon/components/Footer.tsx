import React from 'react';
import './Footer.css';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-contact">
            <h3>Conecta con Grego</h3>
            <p>Grego ya está disponible públicamente! Y es totalmente gratuito. Puedes probarla dando click al siguiente botón.</p>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <a href="https://app.grego.pe/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                PRUEBA GREGO AHORA
              </a>
            </form>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4>Prensa, Investigación y/o Desarrollo</h4>
              <p className="small-text">Si tienes algún requerimiento o deseas contactarnos para colaborar, escríbenos.</p>
              <a href="mailto:colabora@grego.app"><Mail size={16} /> colabora@grego.pe</a>
            </div>
            
            <div className="footer-links-col">
              <h4>Social</h4>
              <div className="social-links">
                <a href="https://www.tiktok.com/@grego_app" target="_blank" rel="noopener noreferrer">TikTok</a>
                <a href="https://www.instagram.com/grego_app/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/company/grego-app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="#">X / Twitter</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-brand">
            <img src="/grego_logo.svg" alt="Grego" className="footer-logo" />
            <p>Una capa viva sobre la ciudad.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Sobre el proyecto</a>
            <a href="#research">White Paper</a>
            <a href="#">Política de privacidad</a>
          </div>
          <div className="footer-copy">
            &copy; 2026 Grego — Red Hiperlocal. Lima, Perú.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
