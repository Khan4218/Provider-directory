import { useParams, Link } from 'react-router-dom';
import data from '../data/providers.json';

function ProviderDetail() {
  const { id } = useParams();
  const provider = data.find((p) => p.id === parseInt(id));

  if (!provider) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Provider not found</h2>
        <Link to="/">Back to List</Link>
      </div>
    );
  }

  return (
    <div className='detail-title'>
      <div style={{ padding: '20px' }}>
        <h1>{provider.name}</h1>
        <p className='detail-line'><strong>Specialization:</strong> {provider.specialization}</p>
        <p className='detail-line'><strong>Location:</strong> {provider.location}</p>
        <p className='detail-line'><strong>Rating:</strong> ⭐ {provider.rating}/5</p>
        <p className='detail-line'><strong>Description:</strong> {provider.longDescription}</p>
        <p className='detail-line'><strong>Contact Email:</strong> {provider.contactEmail}</p>
        <p className='detail-line'><strong>Phone:</strong> {provider.phoneNumber}</p>

        <br />
        <Link to="/">← Back to List</Link>
      </div>
    </div>

  );
}

export default ProviderDetail;
