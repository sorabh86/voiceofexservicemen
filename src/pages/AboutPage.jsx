import { Link } from 'react-router-dom';
import ActionGallery from '../components/ActionGallery.jsx';
import assetUrl from '../utils/assetUrl.js';
import PageBanner from '../components/PageBanner.jsx';
import { emailLink, phoneLink, siteInfo } from '../data/siteInfo.js';

const objectives = [
  {
    icon: 'fa-lightbulb',
    title: 'Create awareness',
    description: 'Share information about the legal, constitutional, and other legitimate rights of ex-servicemen.'
  },
  {
    icon: 'fa-scale-balanced',
    title: 'Support rightful entitlements',
    description: 'Assist ex-servicemen in pursuing the benefits, pensions, and other entitlements due to them.'
  },
  {
    icon: 'fa-heart',
    title: 'Promote dignity and welfare',
    description: 'Work towards a secure, dignified, and respectable life for ex-servicemen and their families.'
  },
  {
    icon: 'fa-bullhorn',
    title: 'Build a collective voice',
    description: 'Provide a shared platform to raise genuine concerns and grievances with the appropriate authorities.'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Protect veterans’ interests',
    description: 'Advocate together for fair treatment and the rights and interests of the veteran community.'
  }
];

const donors = [
  { name: 'Satish Chandra Mahto', role: 'Entrepreneur', amount: '10,000', image: 'SatishChandraMahto.jpg' },
  { name: 'Shambhu Kumar', role: 'Entrepreneur', amount: '10,000', image: 'ShambhuKumar.jpg' },
  { name: 'Veteran Dr KRK Rao', role: 'MA, MBA, LLM, Ph.D. (HRM)', amount: '15,001', image: 'DrKRKRao.jpg' },
  { name: 'Ishwar Datta', role: '', amount: '20,000', image: 'ishwarDatta.jpg' }
];

export default function AboutPage() {
  return (
    <main className="about-content about-page">
      <PageBanner title="About Us" />

      <section className="container about-overview" aria-labelledby="about-overview-title">
        <div className="about-overview-copy">
          <p className="home-eyebrow">A collective voice since March 2015</p>
          <h1 id="about-overview-title">Service deserves respect, fairness, and dignity.</h1>
          <p>
            {siteInfo.name} is a nationwide movement representing Junior Commissioned Officers
            (JCOs), Non-Commissioned Officers (NCOs), and Other Ranks (ORs) of the Indian Armed
            Forces. We bring veterans together to raise awareness, represent shared concerns, and
            support access to legitimate rights and entitlements.
          </p>
          <div className="about-overview-actions">
            <Link className="btn btn-success" to="/team">Meet our team</Link>
            <Link className="btn btn-outline-success" to="/contact">Get in touch</Link>
          </div>
        </div>
        <figure className="about-overview-image">
          <img
            src={assetUrl('assets/action/action1.jpg')}
            alt="Ex-servicemen gathered together to raise their concerns"
            fetchPriority="high"
          />
          <figcaption>
            <i className="fa-solid fa-people-group" aria-hidden="true"></i>
            Standing together for veterans and their families
          </figcaption>
        </figure>
      </section>

      <section className="about-facts" aria-label="About the Society">
        <div className="container about-facts-grid">
          <div>
            <span className="about-fact-value">2015</span>
            <span className="about-fact-label">Movement started in March</span>
          </div>
          <div>
            <span className="about-fact-value">All India</span>
            <span className="about-fact-label">A nationwide movement</span>
          </div>
          <div>
            <span className="about-fact-value">2223/2014-15</span>
            <span className="about-fact-label">Registration under Society Act 1860</span>
          </div>
        </div>
      </section>

      <section className="container about-objectives" id="aims-objectives" aria-labelledby="about-objectives-title">
        <div className="about-section-heading">
          <p className="home-eyebrow">What guides our work</p>
          <h2 id="about-objectives-title">Our aims and objectives</h2>
          <p>Awareness, representation, and collective action in support of ex-servicemen and their families.</p>
        </div>
        <div className="about-objectives-grid">
          {objectives.map(({ icon, title, description }, index) => (
            <article className="about-objective-card" key={title}>
              <span className="about-objective-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="about-objective-icon" aria-hidden="true">
                <i className={`fa-solid ${icon}`}></i>
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-action-section" aria-label="The Society in action">
        <div className="container">
          <ActionGallery className="about-action-gallery" />
        </div>
      </section>

      <section className="container about-supporters" aria-labelledby="about-supporters-title">
        <div className="about-section-heading">
          <p className="home-eyebrow">With gratitude</p>
          <h2 id="about-supporters-title">Thank you to our supporters</h2>
          <p>We appreciate the generosity and commitment of those who have supported the Society.</p>
        </div>
        <div className="about-supporters-grid">
          {donors.map((donor) => (
            <article className="member-card" key={donor.name}>
              <img
                src={assetUrl(`assets/members/${donor.image}`)}
                alt={`${donor.name}${donor.role ? `, ${donor.role}` : ''}`}
                loading="lazy"
              />
              <div className="member-card-body">
                <h3>{donor.name}</h3>
                {donor.role && <p>{donor.role}</p>}
              </div>
              <div className="member-donation">Donated - Rs {donor.amount}/-</div>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-contact-wrap">
        <div className="about-contact">
          <div>
            <p className="home-eyebrow">Be part of the conversation</p>
            <h2>Questions or want to get involved?</h2>
            <p>Connect with the Society to learn more about our work and how to take part.</p>
          </div>
          <div className="about-contact-actions">
            <Link className="btn btn-light" to="/team">Meet the team</Link>
            <a className="btn btn-outline-light" href={emailLink('About the Society')}>Email the Society</a>
            <a className="about-contact-phone" href={phoneLink}>{siteInfo.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
