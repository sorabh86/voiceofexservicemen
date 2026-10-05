import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import assetUrl from '../utils/assetUrl.js';

const posts = [
  {
    title: 'MSP next hearing on 5th March: High Court given some more time for govt plea',
    description: 'The latest update on the MSP hearing and the government’s response.',
    date: '2024-02-10',
    category: 'News/Events',
    image: 'news1.jpg'
  },
  {
    title: 'Delaying pensionary benefits by PCDA to Widow of Armed force Tribunal',
    description: 'An update on pensionary benefits and support for service families.',
    date: '2024-02-05',
    category: 'News/Events',
    image: 'news2.jpg'
  },
  {
    title: 'Unity is strength: Sevadari system stopped by govt, sustainable development in armed forces',
    description: 'A note on the Sevadari system and sustainable development in the armed forces.',
    date: '2024-01-28',
    category: 'News/Events',
    image: 'news3.jpg'
  }
];

const formatDate = (date) => new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const formatMonth = (month) => new Date(`${month}-01T00:00:00`).toLocaleDateString('en-IN', {
  month: 'long',
  year: 'numeric'
});

export default function NewsPage() {
  const { pageNumber } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedMonth = searchParams.get('month') || '';
  const query = searchParams.get('q') || '';
  const [search, setSearch] = useState(query);
  const requestedPage = Number(searchParams.get('page')) || Number(pageNumber) || 1;
  const archive = [...new Set(posts.map((post) => post.date.slice(0, 7)))].sort().reverse();
  const validMonth = archive.includes(selectedMonth) ? selectedMonth : '';
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredPosts = posts.filter((post) => {
    const matchesMonth = !validMonth || post.date.startsWith(validMonth);
    const matchesQuery = !normalizedQuery
      || `${post.title} ${post.description} ${post.category}`.toLocaleLowerCase().includes(normalizedQuery);
    return matchesMonth && matchesQuery;
  });
  const pageSize = 2;
  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const currentPage = Math.min(Math.max(requestedPage, 1), pageCount);
  const pagePosts = filteredPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setSearch(query);
  }, [query]);

  function submitSearch(event) {
    event.preventDefault();
    const nextParams = new URLSearchParams(searchParams);
    const trimmedSearch = search.trim();

    if (trimmedSearch) {
      nextParams.set('q', trimmedSearch);
    } else {
      nextParams.delete('q');
    }

    nextParams.delete('page');
    setSearchParams(nextParams);
  }

  function selectPage(page) {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('page', String(page));
    setSearchParams(nextParams);
  }

  function clearFilters() {
    setSearch('');
    setSearchParams({});
  }

  return (
    <main className="news-page">
      <PageBanner title="News & Events" />
      <section className="container news-content" aria-labelledby="news-page-title">
        <header className="news-intro">
          <p className="home-eyebrow">Society updates and announcements</p>
          <h1 id="news-page-title">News from the community</h1>
          <p>Search published updates or browse them by archive month.</p>
        </header>

        <div className="news-layout">
          <section className="news-main" aria-labelledby="news-list-title">
            <div className="news-toolbar">
              <div>
                <h2 id="news-list-title">{validMonth ? formatMonth(validMonth) : 'All updates'}</h2>
                <p>{filteredPosts.length} {filteredPosts.length === 1 ? 'update' : 'updates'} found</p>
              </div>
              <form className="news-search" role="search" onSubmit={submitSearch}>
                <label className="visually-hidden" htmlFor="news-search-input">Search news</label>
                <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                <input
                  id="news-search-input"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search updates"
                />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>

            {query && (
              <div className="news-active-filters">
                <span>Search: <strong>{query}</strong></span>
                <button type="button" onClick={clearFilters}>Clear filters</button>
              </div>
            )}

            {pagePosts.length > 0 ? (
              <div className="news-card-list">
                {pagePosts.map((post) => (
                  <article className="news-card" key={post.title}>
                    <img src={assetUrl(`assets/${post.image}`)} alt="" loading="lazy" />
                    <div className="news-card-content">
                      <div className="news-card-meta">
                        <span className="news-category">{post.category}</span>
                        <time dateTime={post.date}>
                          <i className="fa-regular fa-calendar" aria-hidden="true"></i>
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="news-empty-state" role="status">
                <span aria-hidden="true"><i className="fa-regular fa-newspaper"></i></span>
                <h3>No matching updates</h3>
                <p>Try a different search term or browse all published updates.</p>
                <button className="btn btn-outline-success" type="button" onClick={clearFilters}>
                  Show all updates
                </button>
              </div>
            )}

            {pageCount > 1 && (
              <nav className="news-pagination" aria-label="News pages">
                <button type="button" disabled={currentPage === 1} onClick={() => selectPage(currentPage - 1)}>
                  <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                  Previous
                </button>
                <span>Page {currentPage} of {pageCount}</span>
                <button type="button" disabled={currentPage === pageCount} onClick={() => selectPage(currentPage + 1)}>
                  Next
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </button>
              </nav>
            )}
          </section>

          <aside className="news-sidebar">
            <nav className="news-archive" aria-labelledby="news-archive-title">
              <div className="news-archive-heading">
                <span aria-hidden="true"><i className="fa-regular fa-calendar-days"></i></span>
                <div>
                  <h2 id="news-archive-title">Browse the archive</h2>
                  <p>Choose a month to filter updates.</p>
                </div>
              </div>
              <ul>
                <li>
                  <Link className={!validMonth ? 'active' : ''} to="/news" aria-current={!validMonth ? 'page' : undefined}>
                    <span>All updates</span>
                    <span className="news-archive-count">{posts.length}</span>
                  </Link>
                </li>
                {archive.map((month) => {
                  const count = posts.filter((post) => post.date.startsWith(month)).length;
                  const isActive = validMonth === month;

                  return (
                    <li key={month}>
                      <Link
                        className={isActive ? 'active' : ''}
                        to={`/news?month=${month}`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span>{formatMonth(month)}</span>
                        <span className="news-archive-count">{count}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="news-help-card">
              <span aria-hidden="true"><i className="fa-solid fa-circle-info"></i></span>
              <h2>Looking for a specific resource?</h2>
              <p>Browse official portals and support links in our resource directory.</p>
              <Link to="/downloads">Visit resources <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></Link>
            </div>
          </aside>
        </div>

        <aside className="news-contact-strip">
          <div>
            <h2>Have a question for the Society?</h2>
            <p>Send an enquiry and the team will help direct it to the right place.</p>
          </div>
          <Link className="btn btn-outline-success" to="/contact">Contact the Society</Link>
        </aside>
      </section>
    </main>
  );
}
