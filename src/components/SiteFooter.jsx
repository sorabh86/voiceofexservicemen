import { Link } from 'react-router-dom';
import assetUrl from '../utils/assetUrl.js';

const links = [
  { label: 'Donate', to: '/donate' },
  { label: 'Membership', to: '/membership' },
  { label: 'Army Veterans Portal', to: '/services' },
  { label: 'Air Force Pensioner', to: '/services' },
  { label: 'DESA', to: '/services' },
  { label: 'Ministry Of Defence', to: '/services' },
  { label: 'DGR', to: '/services' },
  { label: 'Pension Regulation', to: '/services' },
  { label: 'ECHS', to: '/services' },
  { label: 'CSD', to: '/services' },
  { label: 'Kendriya Sainik Board', to: '/services' },
  { label: 'Financial Assistance', to: '/services' },
  { label: 'Know Your Pension', to: '/services' },
  { label: 'Policy Documents', to: '/policy' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Legal HelpLine', to: '/blog' },
  { label: 'Contact Us', to: '/contact' }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer text-white">
      <div className="container footer-main">
        <div className="footer-grid">
          <section className="footer-column footer-office">
            <h2>Central Office</h2>
            <p className="footer-address">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span>59, Vipin Garden Extension Dwarka, New Delhi-110059</span>
            </p>
            <dl className="footer-contact">
              <div>
                <dt><i className="fa-solid fa-phone" aria-hidden="true"></i><span>Phone</span></dt>
                <dd><a href="tel:9897468767">9897468767</a></dd>
              </div>
              <div>
                <dt><i className="fa-regular fa-envelope" aria-hidden="true"></i><span>Email</span></dt>
                <dd><a href="mailto:info@voiceofexservicemen.in">info@voiceofexservicemen.in</a></dd>
              </div>
            </dl>
          </section>
          <nav className="footer-column footer-quick-links" aria-label="Footer quick links">
            <h2>Quick Links</h2>
            <ul className="footer-links">
              {links.map(({ label, to }) => (
                <li key={label}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </nav>
          <section className="footer-column footer-connect">
            <h2>Newsletter Signup</h2>
            <p className="footer-newsletter-copy">Stay connected with society updates and useful information for veterans.</p>
            <form className="newsletter-form d-flex" action="mailto:info@voiceofexservicemen.in" method="post" encType="text/plain">
              <label className="visually-hidden" htmlFor="newsletter-email">Email Address</label>
              <input id="newsletter-email" name="email" type="email" placeholder="Your email address" required />
              <button type="submit" aria-label="Submit newsletter signup"><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
            </form>
            <h3>Follow the Society</h3>
            <div className="footer-social">
              <a href="https://www.facebook.com/" aria-label="Facebook"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
              <a href="https://www.youtube.com/" aria-label="YouTube"><i className="fa-brands fa-youtube" aria-hidden="true"></i></a>
            </div>
          </section>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Voice of Ex-Servicemen Society (Regd.) India. All rights reserved.</p>
          <div className="footer-credit">Website by <img height="30" alt="Sorabh86 Logo" src={assetUrl('assets/sorabh86v0407wtc.png')} /></div>
        </div>
      </div>
    </footer>
  );
}
