import { Link } from 'react-router-dom';
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
    <main className="about-content">
      <section className="container py-4">
        <h1>Our Team</h1>
        <p className="mb-4">Meet the people working together to represent and support ex-servicemen across India.</p>
        <div className="row g-4">
          {teamMembers.map((member) => (
            <article className="col-12 col-sm-6 col-lg-4 col-xl-3 team-member" key={member.name}>
              <img className="w-100 rounded" src={assetUrl(`assets/members/${member.image}`)} alt={member.name} loading="lazy" />
              <h2 className="h5 mt-3">{member.name}</h2>
              <p>{member.role}</p>
            </article>
          ))}
          <article className="col-12 col-sm-6 col-lg-4 col-xl-3 team-member">
            <img className="w-100 rounded" src={assetUrl('assets/members/default.jpg')} alt="Join our team" loading="lazy" />
            <h2 className="h5 mt-3">You Could Be Next</h2>
            <p>Join our team and volunteer.</p>
            <Link className="btn btn-success w-100" to="/contact">Join Team</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
