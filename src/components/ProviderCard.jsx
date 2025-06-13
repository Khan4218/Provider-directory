import { Link } from 'react-router-dom';

function ProviderCard({ provider }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md">
      <h2 className="text-xl font-bold">{provider.name}</h2>
      <p className="text-gray-600">{provider.specialization} • {provider.location}</p>
      <p className="text-yellow-500">⭐ {provider.rating}/5</p>
      <p className="my-2 text-sm">{provider.shortDescription}</p>
      <Link to={`/providers/${provider.id}`} className="text-blue-600 underline">
        View Details
      </Link>
    </div>
  );
}

export default ProviderCard;
