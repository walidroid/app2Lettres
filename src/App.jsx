import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import ProgressTracker from './components/ProgressTracker.jsx';
import SessionCard from './components/SessionCard.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProgressTracker />
        <div className="sessions-container">
          <SessionCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;