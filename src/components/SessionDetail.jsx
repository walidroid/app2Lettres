import { useParams, Link } from 'react-router-dom';
import sessionsData from '../sessionsData.js';

const SessionDetail = () => {
  const { id } = useParams();
  const session = sessionsData.find(s => s.id === parseInt(id));

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Session non trouvée</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12 md:py-20 shadow-lg">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Retour aux sessions
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
               <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{session.title}</h1>
               <div className="flex flex-wrap gap-4 text-sm font-medium">
                 <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {session.duration || 'Non spécifiée'}
                 </span>
                 <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    {session.level || 'Tous niveaux'}
                 </span>
               </div>
            </div>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
              Commencer la session
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-5xl -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">À propos de ce cours</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{session.description}</p>

              <h3 className="text-xl font-bold mb-4 text-gray-900 mt-8">Ce que vous allez apprendre</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {session.topics && session.topics.map((topic, index) => (
                   <li key={index} className="flex items-start p-3 rounded-lg bg-blue-50/50">
                     <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                     <span className="text-gray-700 font-medium">{topic}</span>
                   </li>
                ))}
                {!session.topics && (
                  <>
                    <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Maîtriser les techniques de rédaction</li>
                    <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Comprendre les structures appropriées</li>
                    <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Développer un style professionnel</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
               <h3 className="font-bold text-gray-900 mb-4">Informations</h3>
               <div className="space-y-4">
                 <div className="flex items-center text-sm text-gray-600">
                    <span className="w-24 text-gray-400">Format</span>
                    <span className="font-medium text-gray-900">En ligne, Interactif</span>
                 </div>
                 <div className="flex items-center text-sm text-gray-600">
                    <span className="w-24 text-gray-400">Langue</span>
                    <span className="font-medium text-gray-900">Français</span>
                 </div>
                 <div className="flex items-center text-sm text-gray-600">
                    <span className="w-24 text-gray-400">Certificat</span>
                    <span className="font-medium text-gray-900">Oui (à la fin)</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetail;
