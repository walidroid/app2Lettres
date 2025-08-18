import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">App2Lettres</h3>
            <p className="text-gray-300">
              Plateforme d'apprentissage innovante pour maîtriser l'art des lettres et de la communication.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#sessions" className="text-gray-300 hover:text-white transition-colors">Sessions</a></li>
              <li><a href="#progress" className="text-gray-300 hover:text-white transition-colors">Progrès</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: contact@app2lettres.com</p>
            <p className="text-gray-300">Téléphone: +33 1 23 45 67 89</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 App2Lettres. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;