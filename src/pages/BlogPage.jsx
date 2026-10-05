import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import { emailLink, phoneLink, siteInfo } from '../data/siteInfo.js';

const helpTopics = [
  {
    icon: 'fa-wallet',
    title: 'Pension and benefits',
    description: 'Questions about pension payments, entitlements, or the records needed to follow up.',
    link: 'Explore official resources'
  },
  {
    icon: 'fa-file-lines',
    title: 'Service matters and documents',
    description: 'Help identifying relevant service documents and the right organisation to contact.',
    link: 'Browse resource directory'
  },
  {
    icon: 'fa-kit-medical',
    title: 'Healthcare and welfare',
    description: 'Find starting points for health services, welfare schemes, and family support.',
    link: 'View welfare resources'
  },
  {
    icon: 'fa-briefcase',
    title: 'Resettlement and employment',
    description: 'Connect with official information about training, resettlement, and employment support.',
    link: 'Find employment resources'
  }
];

const enquirySteps = [
  {
    number: '01',
    title: 'Choose a contact method',
    text: 'Call the Society or send an email with a short description of the issue.'
  },
  {
    number: '02',
    title: 'Share the key details',
    text: 'Mention the service context, relevant dates, and which organisation you have already contacted.'
  },
  {
    number: '03',
    title: 'Keep documents private',
    text: 'Wait for guidance before sending identity documents or sensitive personal information.'
  }
];

export default function BlogPage() {
  return (
    <main className="about-content legal-help-page">
      <PageBanner title="Blog & Legal HelpLine" />
      <div className="container legal-help-content">
        <section className="legal-help-intro" aria-labelledby="legal-help-title">
          <p className="home-eyebrow">Guidance for veterans and families</p>
          <h1 id="legal-help-title">Find a helpful next step</h1>
          <p>
            Explore common areas where ex-servicemen and their families may need support.
            The Society can help point you towards relevant information and official resources.
          </p>
          <div className="legal-help-actions">
            <a className="btn btn-success" href={phoneLink}>
              <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
              Call {siteInfo.phone}
            </a>
            <Link className="btn btn-outline-success" to="/downloads">
              Browse official resources
              <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
            </Link>
          </div>
        </section>

        <section className="legal-help-topics" aria-labelledby="legal-help-topics-title">
          <div className="legal-help-section-heading">
            <div>
              <p className="home-eyebrow">Areas of support</p>
              <h2 id="legal-help-topics-title">What do you need help with?</h2>
            </div>
            <Link to="/news" className="legal-help-news-link">
              Read Society updates <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="legal-help-topic-grid">
            {helpTopics.map(({ icon, title, description, link }) => (
              <article className="legal-help-topic" key={title}>
                <span className="legal-help-topic-icon" aria-hidden="true">
                  <i className={`fa-solid ${icon}`}></i>
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to="/downloads">
                  {link} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="legal-help-process" aria-labelledby="legal-help-process-title">
          <div className="legal-help-process-heading">
            <p className="home-eyebrow">Before you get in touch</p>
            <h2 id="legal-help-process-title">Make your enquiry easier to follow</h2>
            <p>A few details can help the Society understand your question and suggest where to start.</p>
          </div>
          <ol className="legal-help-steps">
            {enquirySteps.map(({ number, title, text }) => (
              <li key={number}>
                <span aria-hidden="true">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className="legal-help-contact" aria-labelledby="legal-help-contact-title">
          <span className="legal-help-contact-icon" aria-hidden="true">
            <i className="fa-solid fa-comments"></i>
          </span>
          <div>
            <h2 id="legal-help-contact-title">Need help finding where to start?</h2>
            <p>Contact the Society and briefly describe what you need assistance with.</p>
          </div>
          <div className="legal-help-contact-actions">
            <a className="btn btn-light" href={emailLink('Legal help enquiry')}>
              <i className="fa-regular fa-envelope me-2" aria-hidden="true"></i>
              Email us
            </a>
            <a className="btn btn-outline-light" href={phoneLink}>
              <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
              Call us
            </a>
          </div>
        </aside>

        <p className="legal-help-disclaimer">
          This page provides general signposting only and is not legal advice or a substitute for
          guidance from a qualified professional or the relevant government authority. Avoid
          sharing sensitive documents by email unless the Society has asked for them through an
          appropriate channel.
        </p>
      </div>
    </main>
  );
}
