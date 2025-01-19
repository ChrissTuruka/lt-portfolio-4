// components/Footer.js

const Footer = () => {
    return (
      <footer id="footer" className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a href="#home" className="mx-4 hover:text-gray-400">Home</a>
            <a href="#team" className="mx-4 hover:text-gray-400">Team</a>
            <a href="#products" className="mx-4 hover:text-gray-400">Products</a>
            <a href="#contact" className="mx-4 hover:text-gray-400">Contact</a>
          </div>
          <div className="mb-4">
            <a href="#" className="mx-2 hover:text-gray-400">Facebook</a>
            <a href="#" className="mx-2 hover:text-gray-400">Twitter</a>
            <a href="#" className="mx-2 hover:text-gray-400">LinkedIn</a>
            <a href="#" className="mx-2 hover:text-gray-400">Instagram</a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Lugha Tausi. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;