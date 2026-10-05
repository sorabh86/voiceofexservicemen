import { useState } from 'react';
import { Link } from 'react-router-dom';
import assetUrl from '../utils/assetUrl.js';

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
    <header className="hero w-100">
      <div className="container">
        <div className="row position-relative overflow-hidden text-white">
          <img src={assetUrl('assets/hero-illustration.png')} className="img-fluid w-100" alt="" />
          <div className="col-lg-7 my-5 position-absolute top-0 start-0 hero-copy">
            <h1 className="display-6 fw-bold">Honoring our defenders,<br />empowering our veterans.</h1>
            <p className="lead mb-4">A unified platform for welfare, support, and advocacy for India’s Ex-Servicemen.</p>
            <a
              href="#programs"
              className="btn btn-light btn-lg me-2"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Our Mission
            </a>
            <Link to="/about" className="btn btn-outline-light btn-lg">Join Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProgramsSection() {
  return (
    <section id="programs" className="mb-5">
      <h2 className="h3 fw-bold mb-4">Our Welfare Programs</h2>
      <div className="row g-3">
        {programs.map((program) => (
          <div className="col-sm-6 col-md-4" key={program.title}>
            <article className="card h-100 program-card">
              <div className="card-body text-center">
                <div className="icon bg-success text-white mb-3 rounded-circle">
                  <i className={`fa-solid ${program.icon}`} aria-hidden="true"></i>
                </div>
                <h3 className="h5 card-title">{program.title}</h3>
                <p className="card-text small text-muted">{program.text}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h3 fw-bold mb-0">News &amp; Updates</h2>
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
      <h2 className="h3 fw-bold mb-4">Community Support</h2>
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
      <h2 className="h3 fw-bold mb-4">Testimonials</h2>
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
    <section id="join" className="mb-5">
      <div className="row g-4 align-items-center">
        <div className="col-lg-6">
          <h2 className="h3 fw-bold">Become a Member</h2>
          <p className="text-muted">Join our community to access programs, events and peer support.</p>
          <Link className="btn btn-success" to="/about">Learn More</Link>
        </div>
        <div className="col-lg-6">
          <div className="card p-3">
            <form action="mailto:info@voiceofexservicemen.in" method="post" encType="text/plain">
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h3 fw-bold mb-0">Get In Touch</h2>
        <Link to="/contact" className="btn btn-outline-success">Contact Us</Link>
      </div>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-3">
            <form action="mailto:info@voiceofexservicemen.in" method="post" encType="text/plain">
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
          <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=59%20Vipin%20Garden%20Extension%20Dwarka%20New%20Delhi%20110059&output=embed"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Voice of Ex-Servicemen Society location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main className="mt-5">
        <div className="container">
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
