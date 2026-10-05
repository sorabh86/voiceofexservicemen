import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import { firebaseConfigured, submitMembershipApplication } from '../firebase.js';
import { emailLink, phoneLink, siteInfo } from '../data/siteInfo.js';

const membershipBenefits = [
  {
    icon: 'fa-people-group',
    title: 'A collective voice',
    text: 'Stand together with fellow ex-servicemen to raise awareness of shared concerns.'
  },
  {
    icon: 'fa-handshake-angle',
    title: 'A connected community',
    text: 'Stay connected with people who understand the transition and experiences of service.'
  },
  {
    icon: 'fa-bullhorn',
    title: 'Stay informed and involved',
    text: 'Hear about Society activities, welfare initiatives, and opportunities to contribute.'
  }
];

export default function MembershipPage() {
  const [submissionState, setSubmissionState] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleApplicationSubmit(event) {
    event.preventDefault();

    if (!firebaseConfigured) {
      setSubmissionState({
        type: 'error',
        message: 'Membership applications are not available yet. The Society needs to finish configuring Firebase.'
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const donationAmount = formData.get('donationAmount').trim();
    const application = {
      fullName: formData.get('fullName').trim(),
      email: formData.get('email').trim().toLowerCase(),
      phone: formData.get('phone').trim(),
      serviceDetails: formData.get('serviceDetails').trim(),
      consent: formData.get('consent') === 'on',
      termsAccepted: formData.get('termsAccepted') === 'on'
    };

    if (donationAmount) {
      application.donationAmount = Number(donationAmount);
    }

    setIsSubmitting(true);
    setSubmissionState({ type: 'idle', message: '' });

    try {
      await submitMembershipApplication(application);
      form.reset();
      setSubmissionState({
        type: 'success',
        message: 'Your membership enquiry was submitted. The Society will contact you using the details provided.'
      });
    } catch (error) {
      console.error('Membership application submission failed:', error);
      setSubmissionState({
        type: 'error',
        message: `We could not submit your application. Please try again later or email ${siteInfo.email}.`
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="about-content membership-page">
      <PageBanner title="Membership" />
      <section className="container membership-content">
        <div className="membership-intro">
          <p className="home-eyebrow">Together, we are stronger</p>
          <h1>Become part of the Society</h1>
          <p>Voice of Ex-Servicemen is a nationwide movement representing Junior Commissioned Officers, Non-Commissioned Officers, and Other Ranks of the Indian Armed Forces. Connect with the Society to learn about membership and how you can take part.</p>
          <a className="btn btn-success btn-lg" href="#membership-application">
            Apply for membership
            <i className="fa-solid fa-arrow-down ms-2" aria-hidden="true"></i>
          </a>
        </div>

        <section className="membership-application" id="membership-application" aria-labelledby="membership-application-title">
          <div className="membership-application-heading">
            <p className="home-eyebrow">Get started</p>
            <h2 id="membership-application-title">Membership application</h2>
            <p>Share your contact details and service background. The Society will follow up about the application process and any applicable requirements.</p>
          </div>

          {!firebaseConfigured && (
            <div className="membership-firebase-notice" role="status">
              <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
              <span>
                Applications are not being accepted online yet. Please <a href={emailLink('Membership enquiry')}>email the Society</a> while online applications are being set up.
              </span>
            </div>
          )}

          {submissionState.message && (
            <div className={`membership-submission-message ${submissionState.type}`} role={submissionState.type === 'error' ? 'alert' : 'status'}>
              {submissionState.message}
            </div>
          )}

          <form className="membership-application-form" onSubmit={handleApplicationSubmit}>
            <div className="membership-form-grid">
              <div>
                <label className="form-label" htmlFor="membership-full-name">Full name</label>
                <input className="form-control" id="membership-full-name" name="fullName" autoComplete="name" minLength="2" maxLength="100" required />
              </div>
              <div>
                <label className="form-label" htmlFor="membership-email">Email address</label>
                <input className="form-control" id="membership-email" name="email" type="email" autoComplete="email" maxLength="254" required />
              </div>
              <div>
                <label className="form-label" htmlFor="membership-phone">Mobile number</label>
                <input className="form-control" id="membership-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" minLength="7" maxLength="20" required />
              </div>
              <div>
                <label className="form-label" htmlFor="membership-donation-amount">Donation amount (optional)</label>
                <div className="input-group">
                  <span className="input-group-text" aria-hidden="true">₹</span>
                  <input className="form-control" id="membership-donation-amount" name="donationAmount" type="number" min="500" step="0.01" inputMode="decimal" defaultValue="500" aria-describedby="membership-donation-help" />
                </div>
                <small className="form-text" id="membership-donation-help">Leave blank if you do not wish to donate. Minimum: ₹500. This records your intended contribution; it does not take payment.</small>
              </div>
              <div className="membership-service-details">
                <label className="form-label" htmlFor="membership-service-details">Service background <span>(optional)</span></label>
                <textarea className="form-control" id="membership-service-details" name="serviceDetails" rows="3" maxLength="1000" placeholder="For example, service branch, rank, or any details you would like to share"></textarea>
              </div>
            </div>

            <div className="membership-form-footer">
              <div className="form-check">
                <input className="form-check-input" id="membership-terms-accepted" name="termsAccepted" type="checkbox" required />
                <label className="form-check-label" htmlFor="membership-terms-accepted">
                  I have read and agree to the <Link to="/policy#membership-terms">Membership Terms &amp; Conditions</Link>.
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="membership-consent" name="consent" type="checkbox" required />
                <label className="form-check-label" htmlFor="membership-consent">
                  I agree that the Society may use these details to respond to my membership enquiry. See the <Link to="/policy">Privacy Policy</Link>.
                </label>
              </div>
              <button className="btn btn-success" type="submit" disabled={!firebaseConfigured || isSubmitting}>
                {isSubmitting ? 'Submitting…' : 'Submit application'}
                {!isSubmitting && <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>}
              </button>
            </div>
          </form>
        </section>

        <section className="membership-benefits" aria-labelledby="membership-benefits-title">
          <div className="membership-section-heading">
            <p className="home-eyebrow">Why join</p>
            <h2 id="membership-benefits-title">Make your voice part of the movement</h2>
          </div>
          <div className="row g-4">
            {membershipBenefits.map((benefit) => (
              <div className="col-md-4" key={benefit.title}>
                <article className="membership-benefit-card">
                  <span className="membership-benefit-icon" aria-hidden="true">
                    <i className={`fa-solid ${benefit.icon}`}></i>
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="membership-next-steps">
          <div>
            <p className="home-eyebrow">Getting started</p>
            <h2>Ask us about the next steps</h2>
            <p>Contact the Society to discuss membership, the application process, and any applicable requirements. We’ll help direct your enquiry to the right place.</p>
          </div>
          <div className="membership-contact-actions">
            <a href={emailLink('Membership enquiry')} className="btn btn-light">Email the Society</a>
            <a href={phoneLink} className="btn btn-outline-light">
              <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
              {siteInfo.phone}
            </a>
          </div>
        </section>

        <p className="membership-about-link">Learn more about our work on the <Link to="/about">About Us page</Link>, or <Link to="/contact">contact the Society</Link> with any questions.</p>
      </section>
    </main>
  );
}
