import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'AWS',
      imageUrl: 'https://images.pexels.com/photos/4960161/pexels-photo-4960161.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Amazon Web Services Partner',
    },
    {
      id: 2,
      name: 'Microsoft Azure',
      imageUrl: 'https://images.pexels.com/photos/4960464/pexels-photo-4960464.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Microsoft Azure Partner',
    },
    {
      id: 3,
      name: 'Google Cloud',
      imageUrl: 'https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Google Cloud Partner',
    },
    {
      id: 4,
      name: 'Oracle Cloud',
      imageUrl: 'https://images.pexels.com/photos/4960464/pexels-photo-4960464.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Oracle Cloud Partner',
    },
  ];

  return (
    <section id="partners" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading technology providers to deliver the best solutions for our clients
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-white p-4 shadow-sm flex items-center justify-center">
                <img 
                  src={partner.imageUrl} 
                  alt={partner.name} 
                  className="w-full h-full object-cover opacity-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute text-xl font-bold text-blue-600">{partner.name}</div>
              </div>
              <p className="text-gray-700 font-medium">{partner.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner with High Greeves</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our partner ecosystem to deliver innovative solutions to clients worldwide
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Become a Partner
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Learn About Partnership Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;