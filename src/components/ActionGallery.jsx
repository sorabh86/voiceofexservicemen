import assetUrl from '../utils/assetUrl.js';

const actions = [
  { title: 'Rally', image: 'action/action1.jpg' },
  { title: 'Peaceful Protest March', image: 'action/action2.jpg' },
  { title: 'Advocacy & Engagement', image: 'action/action3.jpg' },
  { title: 'Community Workshop', image: 'action/action4.jpg' }
];

export default function ActionGallery() {
  return (
    <section className="row my-4 g-4">
      <div className="col-12">
        <h2>Our Impact in Action</h2>
      </div>
      {actions.map(({ title, image }, index) => (
        <div className="col-12 col-md-6" key={image}>
          <article className="card h-100">
            <div className="card-body">
              <img className="w-100 rounded" src={assetUrl(image)} alt={title} loading="lazy" />
              <h3 className="h5 mt-3">{index + 1}. {title}</h3>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
}
