import React from 'react';
import sessionsData from '../sessionsData.js';

const SessionCard = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sessions Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessionsData.map((session) => (
            <div key={session.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                <p className="text-gray-600 mb-4">{session.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{session.duration}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Commencer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionCard;