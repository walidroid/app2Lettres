const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20" id="home">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Maîtrisez l&apos;Art des Lettres
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Découvrez notre plateforme innovante d&apos;apprentissage conçue pour vous aider
          à exceller dans la rédaction de lettres professionnelles et personnelles.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Commencer Maintenant
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            En Savoir Plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;