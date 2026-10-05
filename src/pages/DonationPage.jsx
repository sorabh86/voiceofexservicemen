import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import assetUrl from '../utils/assetUrl.js';
import { emailLink, phoneLink, siteInfo } from '../data/siteInfo.js';

const payuInitiateUrl = import.meta.env.VITE_PAYU_INITIATE_URL?.trim();

const donationSteps = [
  {
    icon: 'fa-pen-to-square',
    title: 'Enter your donation details',
    text: 'Tell us your name, contact details, and the amount you would like to contribute.'
  },
  {
    icon: 'fa-lock',
    title: 'Continue to PayU',
    text: 'Your details will be sent securely to the Society’s payment service, which will prepare the PayU checkout.'
  },
  {
    icon: 'fa-receipt',
    title: 'Complete payment and save your receipt',
    text: 'PayU will show the available payment options. Keep the transaction reference after your payment.'
  }
];

export default function DonationPage() {
  const [paymentMessage, setPaymentMessage] = useState('');

  function handleDonationSubmit(event) {
    if (payuInitiateUrl) {
      return;
    }

    event.preventDefault();
    setPaymentMessage('Online donations are not enabled yet. The Society needs to configure its secure PayU payment endpoint before payments can be accepted.');
  }

  return (
    <main className="about-content donation-page">
      <PageBanner title="Support the Society" image="donate.jpg" />
      <section className="container donation-content">
        <div className="donation-intro">
          <p className="home-eyebrow">Every contribution supports our work</p>
          <h1>Help strengthen the voice of ex-servicemen</h1>
          <p>Your voluntary contribution can support the Society’s welfare initiatives, awareness programmes, advocacy, and other legitimate organisational activities.</p>
          <div className="donation-actions">
            <a className="btn btn-success btn-lg" href="#donation-form">
              <i className="fa-regular fa-heart me-2" aria-hidden="true"></i>
              Make a donation
            </a>
            <Link className="btn btn-outline-success btn-lg" to="/policy">Read donation policy</Link>
          </div>
        </div>

        <section className="donation-form-section" id="donation-form" aria-labelledby="donation-form-title">
          <div className="donation-form-heading">
            <p className="home-eyebrow">Secure checkout with PayU</p>
            <h2 id="donation-form-title">Donation details</h2>
            <p>Enter your details and preferred donation amount. You’ll continue to PayU to complete payment.</p>
          </div>
          {!payuInitiateUrl && (
            <p className="donation-setup-notice" role="status">
              <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
              Online payment setup is pending. You can prepare the form, but payments will not be submitted until the Society configures its secure PayU endpoint.
            </p>
          )}
          {paymentMessage && <p className="donation-setup-notice" role="alert">{paymentMessage}</p>}
          <form
            className="donation-form"
            action={payuInitiateUrl || undefined}
            method="post"
            onSubmit={handleDonationSubmit}
          >
            <div className="donation-form-grid">
              <div>
                <label className="form-label" htmlFor="donor-name">Full name</label>
                <input className="form-control" id="donor-name" name="firstname" autoComplete="name" maxLength="100" required />
              </div>
              <div>
                <label className="form-label" htmlFor="donor-email">Email address</label>
                <input className="form-control" id="donor-email" name="email" type="email" autoComplete="email" maxLength="254" required />
              </div>
              <div>
                <label className="form-label" htmlFor="donor-phone">Mobile number</label>
                <input className="form-control" id="donor-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" minLength="7" maxLength="20" aria-describedby="donor-phone-help" required />
                <small className="form-text" id="donor-phone-help">Enter a reachable phone number for payment updates.</small>
              </div>
              <div>
                <label className="form-label" htmlFor="donation-amount">Donation amount (INR)</label>
                <div className="input-group">
                  <span className="input-group-text" aria-hidden="true">₹</span>
                  <input className="form-control" id="donation-amount" name="amount" type="number" min="500" step="0.01" inputMode="decimal" defaultValue="500" required />
                </div>
              </div>
            </div>
            <div className="donation-form-footer">
              <p><i className="fa-solid fa-shield-halved me-2" aria-hidden="true"></i>Never enter or share a UPI PIN, card PIN, CVV, password, or OTP on this website.</p>
              <button className="btn btn-success btn-lg" type="submit">
                Continue to PayU
                <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </section>

        <div className="donation-information">
          <div className="donation-steps">
            <h2>How to contribute</h2>
            <div className="donation-step-list">
              {donationSteps.map((step, index) => (
                <article className="donation-step" key={step.title}>
                  <span className="donation-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span className="donation-step-icon" aria-hidden="true"><i className={`fa-solid ${step.icon}`}></i></span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="donation-safety">
            <div className="donation-safety-icon" aria-hidden="true">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h2>Donate safely</h2>
            <p>For your security, confirm payment details directly with the Society. Never share your UPI PIN, card security code, banking password, or one-time password with anyone.</p>
            <p>Donations are voluntary. Please review the <Link to="/policy">Donation and Refund Policies</Link> before contributing.</p>
            <a href={phoneLink} className="donation-phone">
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span>Call the Society</span>
              <strong>{siteInfo.phone}</strong>
            </a>
          </aside>
        </div>

        <div className="donation-contact-strip">
          <img src={assetUrl('assets/upi-icon.png')} alt="UPI payment options may be available; contact the Society for verified details" />
          <div>
            <h2>Need help with a contribution?</h2>
            <p>Ask the Society for verified instructions or assistance with a transaction.</p>
          </div>
          <a href={emailLink('Donation support')} className="btn btn-outline-success">Email the Society</a>
        </div>
      </section>
    </main>
  );
}
