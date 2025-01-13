// components/Header.js

const Header = () => {
    return (
      <header className="bg-gray-800 py-4">
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
                <a href="#team" className="text-white hover:text-gray-200 transition duration-300">Our Team</a>
              </li>
              <li>
                <a href="#products" className="text-white hover:text-gray-200 transition duration-300">Products</a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-gray-200 transition duration-300">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;