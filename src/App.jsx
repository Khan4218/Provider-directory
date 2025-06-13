import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProviderList from './pages/ProviderList';
import ProviderDetail from './pages/ProviderDetail';
import NotFound from './pages/NotFound';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProviderList />} />
        <Route path="/providers" element={<ProviderList />} />
        <Route path="/providers/:id" element={<ProviderDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
