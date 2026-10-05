import PageBanner from '../components/PageBanner.jsx';
import LocationMap from '../components/LocationMap.jsx';
import { emailLink, phoneLink, siteInfo } from '../data/siteInfo.js';

export default function ContactPage() {
  return (
    <main className="about-content">
      <PageBanner title="Contact Us" />
      <section className="container py-4">
        <h1>Get In Touch</h1>
        <p>Contact the Voice of Ex-Servicemen Society for information about membership, welfare support, or legal assistance.</p>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card p-3 h-100">
              <form action={emailLink()} method="post" encType="text/plain">
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" className="form-control" autoComplete="name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" className="form-control" autoComplete="email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" className="form-control" rows="5" required></textarea>
                </div>
                <button className="btn btn-success" type="submit">Send Message</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card p-4 h-100">
              <h2 className="h4">Central Office</h2>
              <address>
                {siteInfo.addressLines[0]}<br />
                {siteInfo.addressLines[1]}
              </address>
              <p><strong>Phone:</strong> <a href={phoneLink}>{siteInfo.phone}</a></p>
              <p><strong>Email:</strong> <a href={emailLink()}>{siteInfo.email}</a></p>
              <LocationMap className="ratio ratio-16x9 rounded overflow-hidden shadow-sm mt-auto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
