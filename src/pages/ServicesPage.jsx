import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';

const services = [
  {
    icon: 'fa-scale-balanced',
    title: 'Legal assistance',
    description: 'Understand service matters, pension concerns, entitlements, and veterans’ rights.',
    support: ['Service-related guidance', 'Pension and entitlement queries', 'Help identifying next steps']
  },
  {
    icon: 'fa-heart-pulse',
    title: 'Welfare support',
    description: 'Find relevant welfare resources for veterans and the people who support them.',
    support: ['Welfare scheme information', 'Family support resources', 'Referrals to relevant organisations']
  },
  {
    icon: 'fa-briefcase',
    title: 'Career and education',
    description: 'Explore opportunities for a confident transition to civilian work and learning.',
    support: ['Career and resettlement resources', 'Skills and training information', 'Education opportunities']
  },
  {
    icon: 'fa-bullhorn',
    title: 'Representation and advocacy',
    description: 'Bring shared concerns together so they can be raised with relevant authorities.',
    support: ['A collective platform for concerns', 'Awareness of veterans’ issues', 'Community and authority engagement']
  }
];

export default function ServicesPage() {
  return (
    <main className="about-content">
      <PageBanner title="Services" />
      <section className="services-overview py-5">
        <div className="container">
          <header className="services-intro mx-auto text-center">
            <p className="services-eyebrow">Support for those who served</p>
            <h1>Here for your next chapter</h1>
            <p className="services-intro-copy">
              Leaving service can bring new questions and challenges. We help ex-servicemen and their families find guidance, useful resources, and a way to make their concerns heard.
            </p>
          </header>

          <div className="row g-4 services-grid">
            {services.map(({ icon, title, description, support }, index) => (
              <div className="col-md-6 col-xl-3" key={title}>
                <article className="service-card h-100">
                  <div className="service-card-top">
                    <span className="service-icon" aria-hidden="true">
                      <i className={`fa-solid ${icon}`}></i>
                    </span>
                    <span className="service-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h2>{title}</h2>
                  <p className="service-description">{description}</p>
                  <ul className="service-support-list">
                    {support.map((item) => (
                      <li key={item}>
                        <i className="fa-solid fa-check" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link className="service-card-link" to="/contact">
                    Ask about this service
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </article>
              </div>
            ))}
          </div>

          <div className="services-approach mt-5">
            <div className="services-approach-mark" aria-hidden="true">
              <i className="fa-solid fa-people-group"></i>
            </div>
            <div>
              <h2>Guidance, not guesswork</h2>
              <p className="mb-0">
                We work with government agencies, non-profit organisations, and community partners to help you find the right information and next point of contact. Support depends on your circumstances; get in touch and tell us what you need.
              </p>
            </div>
            <Link className="btn btn-light" to="/contact">Talk to our team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
