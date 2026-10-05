import { useState } from 'react';
import { Link } from 'react-router-dom';
import assetUrl from '../utils/assetUrl.js';
import LocationMap from '../components/LocationMap.jsx';
import { emailLink } from '../data/siteInfo.js';

const programs = [
  { icon: 'fa-kit-medical', title: 'Medical Assistance', text: 'Support for treatment and medical emergencies.' },
  { icon: 'fa-graduation-cap', title: 'Skill Development & Training', text: 'Training programs to ease civilian transition.' },
  { icon: 'fa-briefcase', title: 'Job Placement', text: 'Connecting veterans with employers and opportunities.' },
  { icon: 'fa-scale-balanced', title: 'Legal Aid', text: 'Assistance with legal queries and representation.' },
  { icon: 'fa-house', title: 'Housing Support', text: 'Help finding stable and affordable housing.' },
  { icon: 'fa-comments', title: 'Financial Counselling', text: 'Budgeting, pensions and benefits guidance.' }
];

const communityItems = [
  { image: 'community1.jpg', alt: 'Veterans participating in peer mentorship', title: 'Peer Mentorship', text: 'Connect with fellow veterans for guidance.' },
  { image: 'community2.jpg', alt: 'Veteran receiving counselling support', title: 'Counselling Services', text: 'Professional mental health and career counselling.' },
  { image: 'community3.jpg', alt: 'Volunteers supporting the veteran community', title: 'Volunteer Opportunities', text: 'Give back and stay engaged in meaningful work.' }
];

const newsItems = [
  { image: 'news1.jpg', title: 'New ESM Benefits Announced', text: 'Summary of the latest benefits for ex-servicemen.' },
  { image: 'news2.jpg', title: 'Veteran Success Story', text: 'How training helped a veteran start a business.' },
  { image: 'news3.jpg', title: 'Upcoming Workshops', text: 'Register for free workshops near you.' }
];

const testimonials = [
  ['The support I received changed my life.', 'Capt. R. Sharma'],
  ['Fantastic training and placement assistance.', 'Sub. Lt. A. Kumar'],
  ['Accessible counselling helped me and my family.', 'Hav. S. Kaur']
];

function HeroSection() {
  return (
    <section className="home-hero">
      <img className="home-hero-image" src={assetUrl('assets/hero-illustration.png')} alt="" fetchPriority="high" />
      <div className="home-hero-content container">
        <div className="home-hero-copy">
          <p className="home-eyebrow">Voice of Ex-Servicemen Society</p>
          <h1>Honoring our defenders,<br />empowering our veterans.</h1>
          <p className="home-hero-lead">A unified platform for welfare, support, and advocacy for India’s Ex-Servicemen.</p>
          <div className="home-hero-actions">
            <Link to="/services" className="btn btn-light btn-lg">Explore our services</Link>
            <Link to="/about" className="btn btn-outline-light btn-lg">About the Society</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeIntro() {
  return (
    <section className="home-intro" aria-labelledby="home-intro-title">
      <div className="home-intro-mark" aria-hidden="true">
        <i className="fa-solid fa-shield-halved"></i>
      </div>
      <div>
        <p className="home-eyebrow">Together, in service</p>
        <h2 id="home-intro-title">A stronger voice for the veteran community</h2>
        <p>We bring ex-servicemen together and help connect them with welfare support, guidance, and a community that understands their service.</p>
      </div>
      <Link to="/about" className="btn btn-outline-success">Learn about us</Link>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section id="programs" className="mb-5">
      <div className="home-section-heading">
        <div>
          <p className="home-eyebrow">How we help</p>
          <h2>Support for every next step</h2>
          <p>Explore the areas where our community can help ex-servicemen and their families.</p>
        </div>
        <Link to="/services" className="btn btn-outline-success">View all services</Link>
      </div>
      <div className="row g-3">
        {programs.map((program) => (
          <div className="col-sm-6 col-md-4" key={program.title}>
            <Link to="/services" className="home-program-link">
              <article className="card h-100 program-card">
                <div className="card-body">
                  <div className="icon bg-success text-white mb-3 rounded-circle">
                    <i className={`fa-solid ${program.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="h5 card-title">{program.title}</h3>
                  <p className="card-text small text-muted">{program.text}</p>
                  <span className="home-card-action">Explore support <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="mb-5">
      <div className="home-section-heading">
        <div>
          <p className="home-eyebrow">From our community</p>
          <h2>News &amp; updates</h2>
          <p>Stories, events, and updates for ex-servicemen and their families.</p>
        </div>
        <Link to="/news" className="btn btn-outline-success">All News</Link>
      </div>
      <div className="row g-3">
        {newsItems.map((item) => (
          <div className="col-md-4" key={item.title}>
            <article className="card h-100">
              <img src={assetUrl(`assets/${item.image}`)} className="card-img-top" alt="" />
              <div className="card-body">
                <h3 className="h5 card-title">{item.title}</h3>
                <p className="card-text small text-muted">{item.text}</p>
                <Link to="/news" className="home-card-action">Read updates <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section id="community" className="mb-5">
      <div className="home-section-heading">
        <div>
          <p className="home-eyebrow">Stronger together</p>
          <h2>Community support</h2>
          <p>Find connection, share experience, and stay involved with a supportive community.</p>
        </div>
        <Link to="/contact" className="btn btn-outline-success">Get involved</Link>
      </div>
      <div className="row g-3">
        {communityItems.map((item) => (
          <div className="col-md-4" key={item.title}>
            <article className="card h-100 community-card shadow-sm">
              <img src={assetUrl(`assets/${item.image}`)} className="card-img-top" alt={item.alt} />
              <div className="card-body text-center">
                <h3 className="h5">{item.title}</h3>
                <p className="small text-muted">{item.text}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mb-5">
      <div className="home-section-heading">
        <div>
          <p className="home-eyebrow">Shared experiences</p>
          <h2>Words from our community</h2>
        </div>
      </div>
      <div className="testimonial-carousel">
        <div className="card p-4" aria-live="polite">
          <p className="mb-2">“{testimonials[activeIndex][0]}”</p>
          <div className="small text-muted">— {testimonials[activeIndex][1]}</div>
        </div>
        <button
          className="btn btn-outline-success mt-3 me-2"
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)}
        >
          Previous
        </button>
        <button
          className="btn btn-outline-success mt-3"
          type="button"
          aria-label="Next testimonial"
          onClick={() => setActiveIndex((index) => (index + 1) % testimonials.length)}
        >
          Next
        </button>
      </div>
    </section>
  );
}

function JoinSection() {
  return (
    <section id="join" className="home-join-section mb-5">
      <div className="row g-4 align-items-center">
        <div className="col-lg-6">
          <p className="home-eyebrow">Stay connected</p>
          <h2>Be part of the community</h2>
          <p>Join fellow ex-servicemen and stay connected to programs, events, and peer support.</p>
          <Link className="btn btn-light" to="/membership">Become a member</Link>
        </div>
        <div className="col-lg-6">
          <div className="card p-3">
            <form action={emailLink()} method="post" encType="text/plain">
              <div className="mb-2">
                <label className="form-label small" htmlFor="join-name">Name</label>
                <input id="join-name" name="name" className="form-control" placeholder="Your name" required />
              </div>
              <div className="mb-2">
                <label className="form-label small" htmlFor="join-email">Email</label>
                <input id="join-email" name="email" type="email" className="form-control" placeholder="you@example.com" required />
              </div>
              <div className="d-grid">
                <button className="btn btn-success" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mb-5">
      <div className="home-section-heading">
        <div>
          <p className="home-eyebrow">We’re here to help</p>
          <h2>Get in touch</h2>
          <p>Reach out to our team or find us on the map.</p>
        </div>
        <Link to="/contact" className="btn btn-outline-success">Contact Us</Link>
      </div>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-3">
            <form action={emailLink()} method="post" encType="text/plain">
              <div className="mb-2">
                <label className="visually-hidden" htmlFor="home-contact-name">Name</label>
                <input id="home-contact-name" name="name" className="form-control" placeholder="Name" required />
              </div>
              <div className="mb-2">
                <label className="visually-hidden" htmlFor="home-contact-email">Email</label>
                <input id="home-contact-email" name="email" type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-2">
                <label className="visually-hidden" htmlFor="home-contact-message">Message</label>
                <textarea id="home-contact-message" name="message" className="form-control" rows="4" placeholder="Message" required></textarea>
              </div>
              <div className="d-grid">
                <button className="btn btn-success" type="submit">Contact</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <LocationMap className="ratio ratio-16x9 rounded overflow-hidden shadow-sm" />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main className="home-main">
        <div className="container">
          <HomeIntro />
          <ProgramsSection />
          <NewsSection />
          <CommunitySection />
          <TestimonialsSection />
          <JoinSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
