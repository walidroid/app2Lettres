const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-500 text-white py-24 overflow-hidden" id="home">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500 bg-opacity-30 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm border border-blue-400 border-opacity-30">
          Nouveau: Module Lettres Académiques
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Maîtrisez l&apos;Art des <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">
            Lettres Professionnelles
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-100 font-light">
          Une plateforme interactive pour perfectionner vos compétences rédactionnelles,
          du courriel formel à la lettre de motivation.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#sessions" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-200">
            Commencer Maintenant
          </a>
          <a href="#about" className="px-8 py-4 rounded-xl font-bold border border-blue-300 text-white hover:bg-blue-600 hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm">
            En Savoir Plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;