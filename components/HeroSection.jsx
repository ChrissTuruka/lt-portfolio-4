// components/HeroSection.js


const HeroSection = () => {
    return (
      <div className="flex items-center justify-between h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white px-6">
        <div className="w-full md:w-4/5">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Lugha Tausi Portfolio Page</h1>
          <p className="text-lg md:text-xl mb-6">
            Welcome to the Lugha Tausi Portfolio Page. Meet the team behind Lugha Tausi and discover all that Lugha Tausi has to offer.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            Get Started
          </a>
        </div>
        <div className="hidden md:block w-1/2">
          <img
            src="Logo.webp"
            alt="Hero Image"
            className="w-1/2 h-auto rounded-lg"
          />
        </div>
      </div>
    );
  };
  
  export default HeroSection;