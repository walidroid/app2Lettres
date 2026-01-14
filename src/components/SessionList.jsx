import sessionsData from '../sessionsData.js';
import SessionCard from './SessionCard.jsx';

const SessionList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sessions Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessionsData.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionList;
