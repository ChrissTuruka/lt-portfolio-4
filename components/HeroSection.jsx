// components/HeroSection.js


const HeroSection = () => {
    return (
      <div className="flex items-center justify-between h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg md:text-xl mb-6">
            We provide exceptional services to elevate your business.
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
            src="5.png"
            alt="Hero Image"
            className="w-1/2 h-auto rounded-lg"
          />
        </div>
      </div>
    );
  };
  
  export default HeroSection;