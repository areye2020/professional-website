import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="social-icons">
            <a href="#your-social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#your-social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#your-social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#your-social-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
