import { useEffect, useState } from 'react';
import ProviderCard from '../components/ProviderCard';
import data from '../data/providers.json';

function ProviderList() {
  const [providers, setProviders] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((res) => setTimeout(res, 500));
      setProviders(data);
    };
    fetchData();
  }, []);

  const filtered = providers.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="container">
        <h1 className="title">Learning Support Providers</h1>

        <input
          type="text"
          placeholder="Search providers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <div className="card-wrapper">
          {filtered.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </div>

  );
}

export default ProviderList;
