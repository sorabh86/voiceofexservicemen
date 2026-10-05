import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';

const services = [
  { icon: 'fa-scale-balanced', title: 'Legal assistance', description: 'Guidance with service matters, pensions, entitlements, and veterans’ rights.' },
  { icon: 'fa-heart-pulse', title: 'Welfare support', description: 'Help connect ex-servicemen and their families with available welfare resources.' },
  { icon: 'fa-briefcase', title: 'Career and education', description: 'Information about career development, reskilling, and educational opportunities.' },
  { icon: 'fa-bullhorn', title: 'Representation and advocacy', description: 'A collective platform to raise concerns with the relevant authorities.' }
];

export default function ServicesPage() {
  return (
    <main className="about-content">
      <PageBanner title="Services" />
      <section className="container py-4">
        <h1>How We Support Ex-Servicemen</h1>
        <p>We provide a range of services to support ex-servicemen and their families, including legal assistance, counselling, and advocacy for veterans’ rights. We also help people find resources for career development and educational opportunities.</p>
        <p>Our team works with government agencies, non-profit organisations, and community partners to help ex-servicemen navigate the challenges they may face after leaving military service.</p>
        <div className="row g-4 my-2">
          {services.map(({ icon, title, description }) => (
            <div className="col-md-6" key={title}>
              <article className="card h-100">
                <div className="card-body">
                  <i className={`fa-solid ${icon} text-success fs-3`} aria-hidden="true"></i>
                  <h2 className="h4 mt-3">{title}</h2>
                  <p className="mb-0">{description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
        <Link className="btn btn-success" to="/contact">Ask for Support</Link>
      </section>
    </main>
  );
}
