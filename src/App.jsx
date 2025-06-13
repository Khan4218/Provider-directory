import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProviderList from './pages/ProviderList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProviderList />} />
        <Route path="/providers" element={<ProviderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
