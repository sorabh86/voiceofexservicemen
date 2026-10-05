import { useMemo, useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';

const resources = [
  {
    title: 'Department of Ex-Servicemen Welfare',
    description: 'Government information, welfare programmes, and schemes for ex-servicemen.',
    category: 'Welfare',
    icon: 'fa-heart',
    url: 'https://desw.gov.in/'
  },
  {
    title: 'Ministry of Defence',
    description: 'Official Ministry of Defence announcements, policies, and services.',
    category: 'Government',
    icon: 'fa-landmark',
    url: 'https://mod.gov.in/'
  },
  {
    title: 'Directorate General Resettlement',
    description: 'Resettlement support, training, and employment resources for veterans.',
    category: 'Employment',
    icon: 'fa-briefcase',
    url: 'https://dgrindia.gov.in/'
  },
  {
    title: 'Ex-Servicemen Contributory Health Scheme',
    description: 'Official ECHS information, health services, and member resources.',
    category: 'Health',
    icon: 'fa-kit-medical',
    url: 'https://www.echs.gov.in/'
  },
  {
    title: 'Kendriya Sainik Board',
    description: 'Welfare information and support for veterans and their families.',
    category: 'Welfare',
    icon: 'fa-people-group',
    url: 'https://ksb.gov.in/'
  }
];

const categories = ['All resources', ...new Set(resources.map(({ category }) => category))];

export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState('All resources');
  const [search, setSearch] = useState('');

  const visibleResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resources.filter(({ title, description, category }) => {
      const matchesCategory = activeCategory === 'All resources' || category === activeCategory;
      const matchesSearch = !query || `${title} ${description} ${category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="about-content downloads-page">
      <PageBanner title="Downloads & Resources" />
      <section className="container downloads-content">
        <div className="downloads-intro">
          <p className="home-eyebrow">A helpful place to start</p>
          <h1>Official resources for ex-servicemen</h1>
          <p>Find useful government portals for welfare, healthcare, resettlement, and defence information. These links open external websites; their content and services are managed by the respective organisations.</p>
        </div>

        <section className="downloads-directory" aria-labelledby="downloads-directory-title">
          <div className="downloads-directory-heading">
            <div>
              <h2 id="downloads-directory-title">Resource directory</h2>
              <p>{visibleResources.length} {visibleResources.length === 1 ? 'resource' : 'resources'} available</p>
            </div>
            <div className="downloads-search">
              <label className="visually-hidden" htmlFor="resource-search">Search resources</label>
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
              <input
                id="resource-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search resources"
              />
            </div>
          </div>

          <div className="downloads-filters" aria-label="Filter resources by category">
            {categories.map((category) => (
              <button
                className={`downloads-filter${activeCategory === category ? ' active' : ''}`}
                type="button"
                key={category}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {visibleResources.length > 0 ? (
            <div className="downloads-grid">
              {visibleResources.map(({ title, description, category, icon, url }) => (
                <article className="download-resource-card" key={title}>
                  <div className="download-resource-card-top">
                    <span className="download-resource-icon" aria-hidden="true">
                      <i className={`fa-solid ${icon}`}></i>
                    </span>
                    <span className="download-resource-category">{category}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    Visit official website
                    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="downloads-empty-state" role="status">
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
              <h3>No matching resources</h3>
              <p>Try another search term or choose a different category.</p>
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => {
                  setSearch('');
                  setActiveCategory('All resources');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <aside className="downloads-help">
          <span className="downloads-help-icon" aria-hidden="true">
            <i className="fa-solid fa-circle-info"></i>
          </span>
          <p>Need help finding the right scheme or service? <a href="tel:9897468767">Call the Society at 9897468767</a> and we’ll help point you in the right direction.</p>
        </aside>
      </section>
    </main>
  );
}
