const ProgressTracker = () => {
  const progressData = [
    { name: 'Lettres Formelles', progress: 75, color: 'bg-blue-500' },
    { name: 'Lettres Informelles', progress: 60, color: 'bg-green-500' },
    { name: 'Lettres Professionnelles', progress: 45, color: 'bg-purple-500' },
    { name: 'Lettres Académiques', progress: 80, color: 'bg-orange-500' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Suivi de Progrès</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {progressData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      {item.progress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div 
                    style={{ width: `${item.progress}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${item.color}`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;