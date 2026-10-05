const resources = [
  { title: 'Department of Ex-Servicemen Welfare', description: 'Government of India information and schemes for ex-servicemen.', url: 'https://desw.gov.in/' },
  { title: 'Ministry of Defence', description: 'Official Ministry of Defence announcements and services.', url: 'https://mod.gov.in/' },
  { title: 'Directorate General Resettlement', description: 'Resettlement services, training, and employment resources.', url: 'https://dgrindia.gov.in/' },
  { title: 'Ex-Servicemen Contributory Health Scheme', description: 'Official ECHS information and services.', url: 'https://www.echs.gov.in/' },
  { title: 'Kendriya Sainik Board', description: 'Welfare information and support for veterans and their families.', url: 'https://ksb.gov.in/' }
];

export default function DownloadsPage() {
  return (
    <main className="about-content">
      <section className="container py-4">
        <h1>Downloads &amp; Resources</h1>
        <p>Use these official resources to find current forms, notices, schemes, and service information. Each link opens the relevant government website.</p>
        <div className="row g-4">
          {resources.map(({ title, description, url }) => (
            <div className="col-md-6" key={title}>
              <article className="card h-100">
                <div className="card-body">
                  <h2 className="h4">{title}</h2>
                  <p>{description}</p>
                  <a href={url} target="_blank" rel="noreferrer">Visit official website <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
