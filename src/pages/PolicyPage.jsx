import PageBanner from '../components/PageBanner.jsx';
import { useEffect } from 'react';
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
      ['Changes and contact', 'The Society may update these terms and will publish the current version on this page. Questions about membership can be sent to info@voiceofexservicemen.in or raised by calling 9897468767.']
    ]
  },
  {
    title: 'Donation Policy',
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
    sections: [
      ['Voluntary donations', 'Donations are generally non-refundable and cannot be cancelled after a successful transaction.'],
      ['Duplicate or mistaken transactions', 'If you believe a donation was duplicated or made due to a technical error, contact us promptly with the transaction reference, date, and amount. Requests are reviewed after verification and any refund is subject to payment-provider and banking procedures.'],
      ['Payment reversals', 'A transaction is considered received only after it is confirmed in the organisation’s records. A debit shown by a bank does not by itself confirm receipt.']
    ]
  },
  {
    title: 'Privacy Policy',
    sections: [
      ['Information we collect', 'We may receive information you choose to provide, such as your name, email address, telephone number, message, or donation details. Technical information may also be processed to operate and protect the website.'],
      ['How information is used', 'Information is used to respond to enquiries, administer membership or donations, provide requested assistance, and maintain the security and operation of the website.'],
      ['Sharing and security', 'Information is not sold. It may be shared with service providers who help operate the website or process payments, or where required by law. Reasonable safeguards are used, but internet transmission cannot be guaranteed to be completely secure.'],
      ['Retention and contact', 'Information is kept only as needed for the purposes described or as required by law. To ask about information you provided, contact info@voiceofexservicemen.in.']
    ]
  },
  {
    title: 'Terms & Conditions',
    sections: [
      ['Website use', 'This website provides general information about the society and its activities. Use it lawfully and do not attempt to disrupt, damage, or gain unauthorised access to the site or its services.'],
      ['Information and assistance', 'Website content is provided for general information and is not a substitute for professional legal, financial, or other advice. Contact the society about an individual matter before relying on information for a decision.'],
      ['External websites', 'Links to third-party websites are provided for convenience. The society does not control those websites and is not responsible for their content or privacy practices.'],
      ['Changes and contact', 'Website content and these terms may be updated. Continued use of the site after an update means you accept the revised terms. Questions can be sent to info@voiceofexservicemen.in.']
    ]
  }
];

export default function PolicyPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== '#membership-terms') {
      return;
    }

    const membershipTerms = document.getElementById('membership-terms');
    if (membershipTerms instanceof HTMLDetailsElement) {
      membershipTerms.open = true;
      membershipTerms.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <main className="about-content">
      <PageBanner title="Policies & Documents" image="donate.jpg" />
      <section className="container py-4">
        <h1>Policies &amp; Documents</h1>
        <p>Review the policies that apply to donations and use of this website.</p>
        <div className="accordion" id="policy-accordion">
          {policies.map((policy, index) => (
            <details className="accordion-item" id={policy.id} key={policy.title} open={index === 1}>
              <summary className={`accordion-button${index === 1 ? '' : ' collapsed'}`}>
                {policy.title}
              </summary>
              <div className="accordion-body policy-document">
                <h2>{policy.title}</h2>
                {policy.sections.map(([heading, content], sectionIndex) => (
                  <section key={heading}>
                    <h3>{sectionIndex + 1}. {heading}</h3>
                    <p>{content}</p>
                  </section>
                ))}
                <p><strong>Contact:</strong> <a href="mailto:info@voiceofexservicemen.in">info@voiceofexservicemen.in</a></p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
