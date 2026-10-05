import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import { emailLink } from '../data/siteInfo.js';
import assetUrl from '../utils/assetUrl.js';

const teamMembers = [
  { name: 'Birbahadur Singh, Founder Voice', role: 'General Secretary & National Coordinator', image: 'BirbahadurSingh.jpg' },
  { name: 'B.K. Jha', role: 'Senior Vice President', image: 'BKJha.jpg' },
  { name: 'Abhinash Kumar', role: 'Co-Founder Voice & Vice President', image: 'AbhinashKumar.jpg' },
  { name: 'Rajeev Behal', role: 'Vice President and Legal Head', image: 'rajeevBehal.jpg' },
  { name: 'Ram Singh', role: 'Vice President and Coordinator Rajasthan', image: 'ramSingh.jpg' },
  { name: 'Shambhu Kumar', role: 'Treasurer and Coordinator', image: 'ShambhuKumar.jpg' },
  { name: 'Chitranjan Singh', role: 'Secretary and Coordinator', image: 'ChitranjanSingh.jpg' },
  { name: 'Kishor Balla', role: 'President Telangana', image: 'KishorBalla.jpg' },
  { name: 'J.S. Patial', role: 'President Himachal Pradesh', image: 'jsPatial.jpg' }
];

export default function TeamPage() {
  return (
    <main className="about-content team-page">
      <PageBanner title="Our Team" />
      <section className="container team-content">
        <header className="team-intro">
          <p className="home-eyebrow">Working together for ex-servicemen</p>
          <h1>Meet the people behind the Society</h1>
          <p>
            Our team brings together leaders and coordinators committed to representing
            ex-servicemen and supporting the veteran community across India.
          </p>
          <div className="team-intro-meta">
            <span><i className="fa-solid fa-people-group" aria-hidden="true"></i>{teamMembers.length} listed team members</span>
            <span><i className="fa-solid fa-map-location-dot" aria-hidden="true"></i>National and state coordination</span>
          </div>
        </header>

        <section aria-labelledby="team-roster-title">
          <div className="team-roster-heading">
            <div>
              <h2 id="team-roster-title">Leadership and coordination</h2>
              <p>Meet the people helping bring the Society’s work together.</p>
            </div>
          </div>

          <div className="team-roster-grid">
            {teamMembers.map(({ name, role, image }) => (
              <article className="team-profile-card" key={name}>
                <div className="team-profile-image">
                  <img
                    src={assetUrl(`assets/members/${image}`)}
                    alt={name}
                    loading="lazy"
                  />
                </div>
                <div className="team-profile-copy">
                  <h3>{name}</h3>
                  <p>
                    <i className="fa-solid fa-award" aria-hidden="true"></i>
                    {role}
                  </p>
                </div>
              </article>
            ))}

            <article className="team-invite-card">
              <span className="team-invite-icon" aria-hidden="true">
                <i className="fa-solid fa-handshake-angle"></i>
              </span>
              <p className="home-eyebrow">Get involved</p>
              <h3>There’s room to contribute</h3>
              <p>Interested in supporting the Society’s work? Get in touch to learn more about volunteering.</p>
              <Link className="btn btn-success" to="/contact">
                Contact the Society
                <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
              </Link>
            </article>
          </div>
        </section>

        <aside className="team-contact-strip">
          <div>
            <h2>Want to connect with the team?</h2>
            <p>Send an enquiry and the Society will help direct it to the right place.</p>
          </div>
          <a className="btn btn-outline-success" href={emailLink('Team enquiry')}>
            <i className="fa-regular fa-envelope me-2" aria-hidden="true"></i>
            Email the Society
          </a>
        </aside>
      </section>
    </main>
  );
}
