import PageBanner from '../components/PageBanner.jsx';
import { emailLink, siteInfo } from '../data/siteInfo.js';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const policies = [
  {
    title: 'Membership Terms & Conditions',
    id: 'membership-terms',
    sections: [
      ['Application and acceptance', 'Submitting an application is an enquiry and does not by itself create membership. The Society will review the information and contact the applicant about any applicable eligibility requirements, documents, fees, and next steps. Membership begins only after the Society confirms acceptance through its official process.'],
      ['Accurate information', 'Applicants should provide information that is accurate and current, and notify the Society if their contact details change while an application is being reviewed. The Society may request clarification or supporting information before making a decision.'],
      ['Membership and donations', 'Any donation shown on the application is optional, separate from the membership decision, and is not a membership fee. Submitting an intended donation amount does not make a payment; donations must be completed through a separately confirmed payment method.'],
      ['Conduct and participation', 'Members are expected to engage respectfully and lawfully with the Society, its representatives, and other members, and to follow applicable Society rules and decisions communicated to them.'],
      ['Privacy and communications', 'Information submitted with an application is used to review and respond to the membership enquiry in accordance with the Privacy Policy. Applicants may contact the Society to ask about their information or application.'],
      ['Changes and contact', `The Society may update these terms and will publish the current version on this page. Questions about membership can be sent to ${siteInfo.email} or raised by calling ${siteInfo.phone}.`]
    ]
  },
  {
    title: 'Donation Policy',
    id: 'donation-policy',
    sections: [
      ['Acceptance of donations', 'Voice of Ex-Servicemen accepts voluntary donations to support welfare initiatives, awareness programmes, advocacy, and other legitimate organisational activities.'],
      ['Online payments', 'Payments may be processed by third-party payment providers. We do not ask donors to send card numbers, CVVs, UPI PINs, or banking passwords by email or through contact forms.'],
      ['Confirmation and failed transactions', 'A donation is treated as received after the payment system confirms that the amount has been credited. If an account is debited but the donation is not received, contact us with the transaction reference so it can be checked.'],
      ['Use of donations', 'Unless a specific purpose is expressly accepted, donations may be allocated according to the society’s priorities, including welfare work and reasonable operating expenses.'],
      ['Receipts and changes', 'Receipts may be issued where applicable. Donors should provide accurate details. The society may update this policy and will publish the current version on this page.']
    ]
  },
  {
    title: 'Refund & Cancellation Policy',
    id: 'refund-policy',
    sections: [
      ['Voluntary donations', 'Donations are generally non-refundable and cannot be cancelled after a successful transaction.'],
      ['Duplicate or mistaken transactions', 'If you believe a donation was duplicated or made due to a technical error, contact us promptly with the transaction reference, date, and amount. Requests are reviewed after verification and any refund is subject to payment-provider and banking procedures.'],
      ['Payment reversals', 'A transaction is considered received only after it is confirmed in the organisation’s records. A debit shown by a bank does not by itself confirm receipt.']
    ]
  },
  {
    title: 'Privacy Policy',
    id: 'privacy-policy',
    sections: [
      ['Information we collect', 'We may receive information you choose to provide, such as your name, email address, telephone number, message, or donation details. Technical information may also be processed to operate and protect the website.'],
      ['How information is used', 'Information is used to respond to enquiries, administer membership or donations, provide requested assistance, and maintain the security and operation of the website.'],
      ['Sharing and security', 'Information is not sold. It may be shared with service providers who help operate the website or process payments, or where required by law. Reasonable safeguards are used, but internet transmission cannot be guaranteed to be completely secure.'],
      ['Retention and contact', `Information is kept only as needed for the purposes described or as required by law. To ask about information you provided, contact ${siteInfo.email}.`]
    ]
  },
  {
    title: 'Terms & Conditions',
    id: 'website-terms',
    sections: [
      ['Website use', 'This website provides general information about the society and its activities. Use it lawfully and do not attempt to disrupt, damage, or gain unauthorised access to the site or its services.'],
      ['Information and assistance', 'Website content is provided for general information and is not a substitute for professional legal, financial, or other advice. Contact the society about an individual matter before relying on information for a decision.'],
      ['External websites', 'Links to third-party websites are provided for convenience. The society does not control those websites and is not responsible for their content or privacy practices.'],
      ['Changes and contact', `Website content and these terms may be updated. Continued use of the site after an update means you accept the revised terms. Questions can be sent to ${siteInfo.email}.`]
    ]
  }
];

const policyIcons = [
  'fa-people-group',
  'fa-hand-holding-heart',
  'fa-rotate-left',
  'fa-user-shield',
  'fa-globe'
];

export default function PolicyPage() {
  const { hash } = useLocation();
  const [openPolicies, setOpenPolicies] = useState(() => new Set(['donation-policy']));

  useEffect(() => {
    const policyId = hash.slice(1);
    if (!policies.some(({ id }) => id === policyId)) {
      return;
    }

    setOpenPolicies((current) => new Set(current).add(policyId));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(policyId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }, [hash]);

  function togglePolicy(policyId, isOpen) {
    setOpenPolicies((current) => {
      const next = new Set(current);
      if (isOpen) {
        next.add(policyId);
      } else {
        next.delete(policyId);
      }
      return next;
    });
  }

  function setAllPoliciesOpen(isOpen) {
    setOpenPolicies(isOpen ? new Set(policies.map(({ id }) => id)) : new Set());
  }

  return (
    <main className="about-content policy-page">
      <PageBanner title="Policies & Documents" image="donate.jpg" />
      <section className="container policy-content" aria-labelledby="policy-page-title">
        <header className="policy-intro">
          <p className="home-eyebrow">Clear information, in one place</p>
          <h1 id="policy-page-title">Policies &amp; documents</h1>
          <p>Review the Society’s membership, donation, refund, privacy, and website policies. Select a section to read it, or jump directly to the policy you need.</p>
        </header>

        <nav className="policy-index" aria-label="Policy sections">
          {policies.map((policy, index) => (
            <a className="policy-index-link" href={`#${policy.id}`} key={policy.id}>
              <i className={`fa-solid ${policyIcons[index]}`} aria-hidden="true"></i>
              <span>{policy.title}</span>
              <i className="fa-solid fa-arrow-down policy-index-arrow" aria-hidden="true"></i>
            </a>
          ))}
        </nav>

        <section className="policy-list" aria-label="Policy documents">
          <div className="policy-list-controls">
            <p>{policies.length} policy sections</p>
            <div>
              <button type="button" onClick={() => setAllPoliciesOpen(true)}>Expand all</button>
              <span aria-hidden="true">·</span>
              <button type="button" onClick={() => setAllPoliciesOpen(false)}>Collapse all</button>
            </div>
          </div>
          <div className="accordion" id="policy-accordion">
            {policies.map((policy, index) => {
              const isOpen = openPolicies.has(policy.id);
              return (
                <details
                  className="accordion-item policy-item"
                  id={policy.id}
                  key={policy.id}
                  open={isOpen}
                  onToggle={(event) => togglePolicy(policy.id, event.currentTarget.open)}
                >
                  <summary className="accordion-button">
                    <span className="policy-item-icon" aria-hidden="true">
                      <i className={`fa-solid ${policyIcons[index]}`}></i>
                    </span>
                    <span className="policy-item-title">{policy.title}</span>
                    <span className="policy-item-count">{policy.sections.length} sections</span>
                    <i className="fa-solid fa-chevron-down policy-item-chevron" aria-hidden="true"></i>
                  </summary>
                  <div className="accordion-body policy-document">
                    {policy.sections.map(([heading, content], sectionIndex) => (
                      <section key={heading}>
                        <h2>{sectionIndex + 1}. {heading}</h2>
                        <p>{content}</p>
                      </section>
                    ))}
                    <p className="policy-contact"><strong>Questions?</strong> Contact the Society at <a href={emailLink()}>{siteInfo.email}</a>.</p>
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
