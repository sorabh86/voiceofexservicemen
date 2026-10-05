import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector.jsx';
import { officeAddress, phoneLink, siteInfo } from '../data/siteInfo.js';
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

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="utility-bar text-white">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="d-flex flex-wrap align-items-center gap-3 small">
            <span><i className="fa-brands fa-youtube me-2" aria-hidden="true"></i>YouTube</span>
            <a className="text-white text-decoration-none" href={phoneLink}><i className="fa-solid fa-phone me-2" aria-hidden="true"></i>{siteInfo.phone}</a>
            <span><i className="fa-solid fa-location-dot me-2" aria-hidden="true"></i>{officeAddress}</span>
          </div>
          <div className="header-actions d-flex align-items-stretch">
            <Link to="/donate" className="donate-link"><i className="fa-regular fa-heart me-2" aria-hidden="true"></i>Donate</Link>
            <Link to="/membership"><i className="fa-solid fa-user me-2" aria-hidden="true"></i>Become a Member</Link>
            <Link className="m-1" to="/donate" aria-label="Donation information"><img src={assetUrl('assets/upi-icon.png')} alt="UPI" /></Link>
          </div>
        </div>
      </div>

      <div className="identity-bar">
        <div className="container d-flex align-items-center justify-content-between gap-4">
          <Link className="brand-mark" to="/" aria-label={`${siteInfo.name} home`}>
            <img src={assetUrl('assets/logo.png')} alt={`${siteInfo.name} logo`} width="192" height="188" />
          </Link>
          <div className="brand-copy text-center flex-grow-1">
            <div className="fw-bold">{siteInfo.legalName}</div>
            <small className="text-success d-block">(Registration No. 2223/2014-15 under Society Act 1860)</small>
            <small className="d-block">(An All India Ex-Servicemen JCOs/NCOs/ORs Movement)</small>
          </div>
          <aside className="visitor-panel" aria-label="Website statistics and language options">
            <div className="visitor-heading">
              <span className="visitor-heading-icon" aria-hidden="true">
                <i className="fa-solid fa-chart-line"></i>
              </span>
              <span>VISITOR STATISTICS</span>
            </div>
            <dl className="visitor-stats">
              <div className="visitor-stat">
                <dt>Total Visitors</dt>
                <dd>951,498</dd>
              </div>
              <div className="visitor-stat">
                <dt>Total Visits</dt>
                <dd>10,418,763</dd>
              </div>
            </dl>
            <LanguageSelector />
            <div className="social-links">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Voice of Ex-Servicemen on Facebook">
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Voice of Ex-Servicemen on YouTube">
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </aside>
        </div>
      </div>

      <nav className="navbar navbar-expand-xl main-nav navbar-dark" aria-label="Main navigation">
        <div className="container">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="site-navigation">
            <ul className="navbar-nav w-100 justify-content-between">
              {navigation.map(({ to, label, end }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}${to === '/contact' ? ' nav-contact' : ''}`}
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
