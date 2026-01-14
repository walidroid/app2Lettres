import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">
            App2Lettres
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</Link>
            <a href="/#sessions" className="text-gray-700 hover:text-blue-600 transition-colors">Sessions</a>
            <a href="/#progress" className="text-gray-700 hover:text-blue-600 transition-colors">Progrès</a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Accueil</Link>
              <a href="/#sessions" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Sessions</a>
              <a href="/#progress" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Progrès</a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;