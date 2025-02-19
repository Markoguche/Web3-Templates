import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Company from './pages/Company'; 
import Developers from './pages/Developers'; 
import Partners from './pages/Partners'; 
import Products from './pages/Products'; 
import Solution from './pages/Solution'; 
import Usdc from './pages/USDC'; 
import Transparency from './pages/Transparency'; 



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usdc" element={<Usdc />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/products" element={<Products />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/company" element={<Company />} />
        <Route path="/transparency" element={<Transparency />} />
      </Routes>
    </Router>
  );
}

export default App;
