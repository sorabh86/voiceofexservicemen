import assetUrl from '../utils/assetUrl.js';

export default function PageBanner({ title, image = 'banner.jpg' }) {
  return (
    <div
      className="page-banner"
      role="img"
      aria-label={title}
      style={{ backgroundImage: `url("${assetUrl(`assets/${image}`)}")` }}
    >
      <div className="container h-100 d-flex align-items-end">
        <h1 className="text-white bg-dark bg-opacity-50 p-3 mb-4">{title}</h1>
      </div>
    </div>
  );
}
