import { Link } from 'react-router-dom';
import ActionGallery from '../components/ActionGallery.jsx';
import assetUrl from '../utils/assetUrl.js';

const donors = [
  { name: 'Satish Chandra Mahto', role: 'Entrepreneur', amount: '10,000', image: 'SatishChandraMahto.jpg' },
  { name: 'Shambhu Kumar', role: 'Entrepreneur', amount: '10,000', image: 'ShambhuKumar.jpg' },
  { name: 'Veteran Dr KRK Rao', role: 'MA, MBA, LLM, Ph.D. (HRM)', amount: '15,001', image: 'DrKRKRao.jpg' },
  { name: 'Ishwar Datta', role: '', amount: '20,000', image: 'ishwarDatta.jpg' }
];

const objectives = [
  ['Creating Awareness', 'Inform ex-servicemen about their legal, constitutional and other legitimate rights, and work towards ending discrimination after retirement.'],
  ['Securing Legitimate Entitlements', 'Assist and support ex-servicemen in obtaining their rightful dues, benefits, pensions and other legitimate entitlements.'],
  ['Promoting Dignity and Welfare', 'Work towards a secure, dignified and respectable life for ex-servicemen and their families.'],
  ['Giving Ex-Servicemen a Collective Voice', 'Provide a common platform to raise genuine concerns and grievances before the appropriate authorities.'],
  ['Protecting the Interests of Veterans', 'Advocate collectively for fair treatment and the welfare, rights and interests of veterans.']
];

export default function AboutPage() {
  return (
    <main className="about-content">
      <section className="container py-4">
        <h1>About Us</h1>
        <p><strong>Voice of Ex-Servicemen</strong> is a nationwide movement representing the collective voice of <strong>Junior Commissioned Officers (JCOs), Non-Commissioned Officers (NCOs), and Other Ranks (ORs) of the Indian Armed Forces</strong>. The movement started in March 2015 to raise awareness about the rights, welfare, and legitimate concerns of ex-servicemen.</p>
        <p>Those who have dedicated the prime years of their lives to serving the nation deserve respect, fairness, and a dignified life after retirement. Through awareness, representation, and collective action, we work to ensure their rights and entitlements are recognised and protected.</p>

        <ActionGallery />

        <h2>Aims &amp; Objectives</h2>
        <ol>
          {objectives.map(([title, description]) => (
            <li key={title}><p><strong>{title}</strong> — {description}</p></li>
          ))}
        </ol>
        <p className="fw-bold">Voice of Ex-Servicemen stands for awareness, justice, equality, and dignity for those who have served the nation.</p>
        <Link to="/team" className="btn btn-success">Meet Our Team</Link>
      </section>

      <section className="container pb-5">
        <h2 className="h3 fw-bold mb-4">With Thanks to Our Supporters</h2>
        <div className="row g-4">
          {donors.map((donor) => (
            <div className="col-sm-6 col-lg-3" key={donor.name}>
              <article className="member-card">
                <img src={assetUrl(`assets/members/${donor.image}`)} alt={`${donor.name} portrait`} loading="lazy" />
                <div className="member-card-body">
                  <h3>{donor.name}{donor.role && <><br />{donor.role}</>}</h3>
                  <p>With thanks from all members of the society.</p>
                </div>
                <div className="member-donation">Donated - Rs {donor.amount}/-</div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
