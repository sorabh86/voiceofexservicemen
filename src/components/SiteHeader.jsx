import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector.jsx';
import assetUrl from '../utils/assetUrl.js';

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/team', label: 'Our Team' },
  { to: '/news', label: 'News/Events' },
  { to: '/services', label: 'Court Case/Services' },
  { to: '/policy', label: 'Policy Document' },
  { to: '/blog', label: 'Blog/Legal HelpLine' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/downloads', label: 'Download' }
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar text-white">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="d-flex flex-wrap align-items-center gap-3 small">
            <span><i className="fa-brands fa-youtube me-2" aria-hidden="true"></i>YouTube</span>
            <a className="text-white text-decoration-none" href="tel:9897468767"><i className="fa-solid fa-phone me-2" aria-hidden="true"></i>9897468767</a>
            <span><i className="fa-solid fa-location-dot me-2" aria-hidden="true"></i>59, Vipin Garden Extension Dwarka, New Delhi-110059</span>
          </div>
          <div className="header-actions d-flex align-items-stretch">
            <Link to="/policy" className="donate-link"><i className="fa-regular fa-heart me-2" aria-hidden="true"></i>Donate</Link>
            <Link to="/about"><i className="fa-solid fa-user me-2" aria-hidden="true"></i>Become a Member</Link>
            <Link className="m-1" to="/policy" aria-label="Donation information"><img src={assetUrl('assets/upi-icon.png')} alt="UPI" /></Link>
          </div>
        </div>
      </div>

      <div className="identity-bar">
        <div className="container d-flex align-items-center justify-content-between gap-4">
          <Link className="brand-mark" to="/" aria-label="Voice of Ex-Servicemen Society home">
            <img src={assetUrl('assets/logo.png')} alt="Voice of Ex-Servicemen Society logo" width="192" height="188" />
          </Link>
          <div className="brand-copy text-center flex-grow-1">
            <div className="fw-bold">Voice of Ex-Servicemen Society (Regd.) India</div>
            <small className="text-success d-block">(Registration No. 2223/2014-15 under Society Act 1860)</small>
            <small className="d-block">(An All India Ex-Servicemen JCOs/NCOs/ORs Movement)</small>
          </div>
          <div className="visitor-panel d-flex flex-column align-items-center justify-content-center text-center">
            <div className="visitor-stat"><strong>Total Visitor - </strong><span>951,498</span></div>
            <div className="visitor-stat"><strong>Total Visit - </strong><span>10,418,763</span></div>
            <LanguageSelector />
            <div className="social-links mt-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Voice of Ex-Servicemen on Facebook">
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Voice of Ex-Servicemen on YouTube">
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg main-nav navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="site-navigation">
            <ul className="navbar-nav w-100 justify-content-between">
              {navigation.map(({ to, label, end }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    to={to}
                    end={end}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
