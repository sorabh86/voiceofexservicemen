import PageBanner from '../components/PageBanner.jsx';
import LocationMap from '../components/LocationMap.jsx';
import { emailLink, officeAddress, phoneLink, siteInfo } from '../data/siteInfo.js';

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

export default function ContactPage() {
  return (
    <main className="about-content contact-page">
      <PageBanner title="Contact Us" />
      <section className="container contact-content" aria-labelledby="contact-page-title">
        <header className="contact-intro">
          <p className="home-eyebrow">We’re here to help</p>
          <h1 id="contact-page-title">Get in touch with the Society</h1>
          <p>Contact us about membership, veteran welfare, or general enquiries. We’ll help direct your question to the right place.</p>
        </header>

        <div className="contact-options" aria-label="Ways to contact the Society">
          <a className="contact-option" href={phoneLink}>
            <span className="contact-option-icon" aria-hidden="true">
              <i className="fa-solid fa-phone"></i>
            </span>
            <span className="contact-option-copy">
              <span className="contact-option-label">Call the Society</span>
              <strong>{siteInfo.phone}</strong>
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square contact-option-arrow" aria-hidden="true"></i>
          </a>
          <a className="contact-option" href={emailLink()}>
            <span className="contact-option-icon" aria-hidden="true">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <span className="contact-option-copy">
              <span className="contact-option-label">Email the Society</span>
              <strong>{siteInfo.email}</strong>
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square contact-option-arrow" aria-hidden="true"></i>
          </a>
          <a className="contact-option" href={directionsUrl} target="_blank" rel="noopener noreferrer">
            <span className="contact-option-icon" aria-hidden="true">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span className="contact-option-copy">
              <span className="contact-option-label">Central office</span>
              <strong>{officeAddress}</strong>
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square contact-option-arrow" aria-hidden="true"></i>
          </a>
        </div>

        <div className="contact-main-grid">
          <section className="contact-form-card" aria-labelledby="contact-form-title">
            <div className="contact-card-heading">
              <span className="contact-card-icon" aria-hidden="true">
                <i className="fa-regular fa-paper-plane"></i>
              </span>
              <div>
                <h2 id="contact-form-title">Send us a message</h2>
                <p>Fill in the details below to prepare an email to the Society.</p>
              </div>
            </div>
            <form action={emailLink('Website contact enquiry')} method="post" encType="text/plain">
              <div className="contact-form-fields">
                <div>
                  <label className="form-label" htmlFor="contact-name">Your name</label>
                  <input id="contact-name" name="Name" className="form-control" autoComplete="name" maxLength="100" required />
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-email">Your email address</label>
                  <input id="contact-email" name="Reply email" type="email" className="form-control" autoComplete="email" maxLength="254" required />
                </div>
                <div className="contact-message-field">
                  <label className="form-label" htmlFor="contact-message">How can we help?</label>
                  <textarea id="contact-message" name="Message" className="form-control" rows="5" maxLength="3000" required></textarea>
                </div>
              </div>
              <p className="contact-form-note">
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                Selecting the button opens your email application. Your message is sent only after you review and send the email there.
              </p>
              <button className="btn btn-success" type="submit">
                Prepare email
                <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
              </button>
            </form>
          </section>

          <section className="contact-location-card" aria-labelledby="contact-location-title">
            <div className="contact-card-heading">
              <span className="contact-card-icon" aria-hidden="true">
                <i className="fa-solid fa-map-location-dot"></i>
              </span>
              <div>
                <h2 id="contact-location-title">Visit our office</h2>
                <p>{siteInfo.addressLines[0]}<br />{siteInfo.addressLines[1]}</p>
              </div>
            </div>
            <LocationMap className="contact-location-map" />
            <a className="contact-directions-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">
              Open directions in Google Maps
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
