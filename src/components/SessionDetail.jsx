import React from 'react';

const SessionDetail = ({ session }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{session?.title || 'Titre de la session'}</h1>
          <p className="text-gray-600 mb-6">{session?.description || 'Description détaillée de la session'}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Durée</h3>
              <p className="text-gray-600">{session?.duration || 'Non spécifiée'}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Niveau</h3>
              <p className="text-gray-600">{session?.level || 'Tous niveaux'}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Objectifs</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Maîtriser les techniques de rédaction</li>
              <li>Comprendre les structures appropriées</li>
              <li>Développer un style professionnel</li>
            </ul>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Commencer la session
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionDetail;