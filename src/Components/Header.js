import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const closeMobileMenu = () => {
    setMobile(false);
  };

  return (
    <header className={`header ${mobile ? 'active' : ''}`}>
      <div className="container d_flex">
        <div className="navlink">
          <ul className={mobile ? 'nav-links-mobile' : 'link f_flex uppercase'}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <button className="toggle" onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
