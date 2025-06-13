import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>404 – Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#1a73e8', textDecoration: 'underline' }}>
        Go back to homepage
      </Link>
    </div>
  );
}

export default NotFound;
