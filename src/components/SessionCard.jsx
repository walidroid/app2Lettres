import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SessionCard = ({ session }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
        <p className="text-gray-600 mb-4">{session.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{session.duration}</span>
          <Link
            to={`/session/${session.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Commencer
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
  }).isRequired,
};

export default SessionCard;
