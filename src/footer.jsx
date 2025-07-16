import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col left">
          <span className="footer-title">Prompt Vault🔒</span>
        </div>
        <div className="footer-col center">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contacts">Prompts</a></li>
          </ul>
        </div>
        <div className="footer-col right">
          <h4>Features</h4>
          <ul>
            <li><a href="#copy">COPY/PASTE</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Prompt Vault🔒</span>
        <span>
          <a href="#">Terms and Conditions</a> • <a href="#">Privacy Policy</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
