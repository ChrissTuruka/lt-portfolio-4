// components/ProductGrid.js

const ProductGrid = () => {
    return (
      <section id="products" className="py-12 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h4 className="text-xl font-semibold text-white">{product.name}</h4>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <a
                  href={product.link}
                  className="inline-block px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200 transition duration-300"
                >
                  View Product
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  // Sample data for products
  const products = [
    {
      name: 'Product One',
      description: 'This is a brief description of Product One.',
      image: '5.png',
      link: '#',
    },
    {
      name: 'Product Two',
      description: 'This is a brief description of Product Two.',
      image: '5.png',
      link: '#',
    },
    {
      name: 'Product Three',
      description: 'This is a brief description of Product Three.',
      image: '5.png',
      link: '#',
    },
    {
      name: 'Product Four',
      description: 'This is a brief description of Product Four.',
      image: '5.png',
      link: '#',
    },
  ];
  
  export default ProductGrid;