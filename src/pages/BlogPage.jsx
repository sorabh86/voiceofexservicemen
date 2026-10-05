import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';

const legalHelpTopics = [
  ['Pension and benefits', 'Questions about pension entitlements, delayed benefits, and related service records.'],
  ['Service matters', 'Guidance on understanding service-related issues and finding the appropriate point of contact.'],
  ['Veteran welfare', 'Information about support programmes and welfare resources for veterans and their families.']
];

export default function BlogPage() {
  return (
    <main className="about-content">
      <PageBanner title="Blog & Legal HelpLine" />
      <section className="container py-4">
        <h1>Legal HelpLine and Resources</h1>
        <p>Find information on matters that commonly affect ex-servicemen and their families. For help with a specific concern, contact the society so that we can direct you to the appropriate resources.</p>
        <div className="row g-4 my-2">
          {legalHelpTopics.map(([title, description]) => (
            <div className="col-md-4" key={title}>
              <article className="card h-100">
                <div className="card-body">
                  <h2 className="h4">{title}</h2>
                  <p className="mb-0">{description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
        <p>Updates and public information are available on our <Link to="/news">News &amp; Events</Link> page.</p>
        <Link className="btn btn-success" to="/contact">Contact the HelpLine</Link>
      </section>
    </main>
  );
}
