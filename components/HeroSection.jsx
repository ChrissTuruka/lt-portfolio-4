// components/HeroSection.js

const HeroSection = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Lugha Tausi Portfolio Page</h1>
          <p className="text-lg md:text-xl mb-6">Meet the team and all those behind making Lugha Tausi a reality.</p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    );
  };
  
  export default HeroSection;