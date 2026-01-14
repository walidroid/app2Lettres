import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SessionCard = ({ session }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        {/* Placeholder for an icon or illustration could go here */}
        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/50 to-transparent">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/10">
            {session.level || 'Tous niveaux'}
          </span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{session.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">{session.description}</p>

        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm font-medium">
             {/* Clock Icon */}
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {session.duration}
          </div>
          <Link
            to={`/session/${session.id}`}
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 duration-200"
          >
            Commencer
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

SessionCard.propTypes = {
  session: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    duration: PropTypes.string,
    level: PropTypes.string,
  }).isRequired,
};

export default SessionCard;
