import { Link } from 'react-router-dom';

function ProviderCard({ provider }) {
  return (
    <div className="card">
      <h2>{provider.name}</h2>
      <p>{provider.specialization} • {provider.location}</p>
      <p>⭐ {provider.rating}/5</p>
      <p>{provider.shortDescription}</p>
      <Link to={`/providers/${provider.id}`}>View Details</Link>
    </div>
  );
}

export default ProviderCard;

