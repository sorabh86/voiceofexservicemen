import { Link, useParams, useSearchParams } from 'react-router-dom';
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

const formatDate = (date) => new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

export default function NewsPage() {
  const { pageNumber } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedMonth = searchParams.get('month') || '';
  const requestedPage = Number(searchParams.get('page')) || Number(pageNumber) || 1;
  const filteredPosts = posts.filter((post) => !selectedMonth || post.date.startsWith(selectedMonth));
  const pageSize = 2;
  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const currentPage = Math.min(Math.max(requestedPage, 1), pageCount);
  const pagePosts = filteredPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const archive = [...new Set(posts.map((post) => post.date.slice(0, 7)))];

  function selectPage(page) {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('page', String(page));
    setSearchParams(nextParams);
  }

  return (
    <main className="news-page">
      <section className="container py-4 py-lg-5">
        <div className="row g-4 g-xl-5 align-items-start">
          <div className="col-lg-8">
            <h1 className="news-title">News/Events</h1>
            {selectedMonth && (
              <div className="d-flex justify-content-between align-items-center py-3">
                <p className="mb-0">Showing {new Date(`${selectedMonth}-01T00:00:00`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => setSearchParams({})}>Show all news</button>
              </div>
            )}
            <div className="news-posts">
              {pagePosts.map((post) => (
                <article className="news-post" key={post.title}>
                  <h2>{post.title}</h2>
                  <p className="news-meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true"> | </span>
                    <span>Categories: {post.category}</span>
                  </p>
                  <div className="news-post-body">
                    <img src={assetUrl(`assets/${post.image}`)} alt="" loading="lazy" />
                    <p>{post.description}</p>
                  </div>
                </article>
              ))}
              {pagePosts.length === 0 && <p>No news is available for this month.</p>}
            </div>
            {pageCount > 1 && (
              <nav className="mt-4" aria-label="News pages">
                <ul className="pagination mb-0">
                  <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                    <button className="page-link" type="button" aria-label="Previous page" disabled={currentPage === 1} onClick={() => selectPage(currentPage - 1)}>«</button>
                  </li>
                  {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                    <li className={`page-item${page === currentPage ? ' active' : ''}`} key={page}>
                      <button className="page-link" type="button" aria-current={page === currentPage ? 'page' : undefined} onClick={() => selectPage(page)}>{page}</button>
                    </li>
                  ))}
                  <li className={`page-item${currentPage === pageCount ? ' disabled' : ''}`}>
                    <button className="page-link" type="button" aria-label="Next page" disabled={currentPage === pageCount} onClick={() => selectPage(currentPage + 1)}>»</button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <aside className="col-lg-4">
            <div className="news-archive">
              <h2>Monthwise</h2>
              <ul>
                {archive.map((month) => (
                  <li key={month}>
                    <Link to={`/news?month=${month}`}>
                      <span aria-hidden="true">›</span>
                      {new Date(`${month}-01T00:00:00`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
