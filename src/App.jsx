import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import ProgressTracker from './components/ProgressTracker.jsx';
import SessionList from './components/SessionList.jsx';
import SessionDetail from './components/SessionDetail.jsx';
import './styles/App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <ProgressTracker />
      <div className="sessions-container" id="sessions">
        <SessionList />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/session/:id" element={<SessionDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;