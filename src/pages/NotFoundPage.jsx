import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="container py-5 text-center">
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="btn btn-success" to="/">Return Home</Link>
    </main>
  );
}
