// components/Header.js

const Header = () => {
    return (
      <header className="bg-gradient-to-r from-purple-500 to-purple-700 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-white text-2xl font-bold">
            MyLogo
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-gray-200 transition duration-300">About</a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-gray-200 transition duration-300">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-gray-200 transition duration-300">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;