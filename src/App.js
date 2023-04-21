import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import Navigation from './components/Navigation';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/smallbusiness' element={<HomePage />} />
        <Route path='/smallbusiness/about' element={<AboutPage />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
