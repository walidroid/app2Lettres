const ProgressTracker = () => {
  const progressData = [
    { name: 'Lettres Formelles', progress: 75, color: 'bg-blue-500' },
    { name: 'Lettres Informelles', progress: 60, color: 'bg-emerald-500' },
    { name: 'Lettres Professionnelles', progress: 45, color: 'bg-purple-500' },
    { name: 'Lettres Académiques', progress: 80, color: 'bg-orange-500' }
  ];

  return (
    <section className="py-16 bg-white" id="progress">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold mb-4">Votre Progression</h2>
           <p className="text-gray-500">Continuez d&apos;avancer pour débloquer de nouvelles compétences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {progressData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold text-gray-800">{item.name}</h3>
                 <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.color.replace('bg-', 'text-').replace('500', '600')} bg-gray-50`}>
                   {item.progress}%
                 </span>
              </div>

              <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  style={{ width: `${item.progress}%` }}
                  className={`absolute top-0 left-0 h-full rounded-full ${item.color} transition-all duration-1000 ease-out`}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-right">Dernière activité: Il y a 2j</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;