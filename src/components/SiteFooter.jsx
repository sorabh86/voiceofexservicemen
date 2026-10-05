import { Link } from 'react-router-dom';
import assetUrl from '../utils/assetUrl.js';

const links = [
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
    <footer className="site-footer text-white mt-5">
      <div className="container footer-main py-5">
        <div className="row g-4">
          <div className="col-lg-4 footer-column">
            <h2>Central Office</h2>
            <p className="footer-address">59, Vipin Garden Extension Dwarka, New Delhi-110059</p>
            <dl className="footer-contact">
              <div><dt>Phone:</dt><dd><a href="tel:9897468767">9897468767</a></dd></div>
              <div><dt>E-mail:</dt><dd><a href="mailto:info@voiceofexservicemen.in">info@voiceofexservicemen.in</a></dd></div>
              <div><dt>Website:</dt><dd><a href="https://www.voiceofexservicemen.in/">voiceofexservicemen.in</a></dd></div>
            </dl>
          </div>
          <div className="col-lg-4 footer-column">
            <h2>Quick Links</h2>
            <div className="row">
              {[links.slice(0, 7), links.slice(7)].map((column, index) => (
                <ul className="col-sm-6 footer-links" key={index}>
                  {column.map(({ label, to }) => (
                    <li key={label}><Link to={to}>{label}</Link></li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="col-lg-4 footer-column">
            <h2>Newsletter Signup</h2>
            <form className="newsletter-form d-flex" action="mailto:info@voiceofexservicemen.in" method="post" encType="text/plain">
              <label className="visually-hidden" htmlFor="newsletter-email">Email Address</label>
              <input id="newsletter-email" name="email" type="email" placeholder="Email Address" required />
              <button type="submit">Submit</button>
            </form>
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a href="https://www.facebook.com/" aria-label="Facebook"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
              <a href="https://www.youtube.com/" aria-label="YouTube"><i className="fa-brands fa-youtube" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container small d-flex flex-row justify-content-between">
          <p>Copyright © 2026 Voice of Ex-Servicemen Society (Regd.) India. All Rights Reserved</p>
          <div>developed by <img height="30" alt="Sorabh86 Logo" src={assetUrl('assets/sorabh86v0407wtc.png')} /></div>
        </div>
      </div>
    </footer>
  );
}
