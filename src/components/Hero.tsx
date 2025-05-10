import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Business Through Technology
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
              High Greeves delivers innovative cloud, DevOps, and application development solutions
              that drive digital transformation and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden md:block relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-1">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-white text-lg font-semibold mb-2">Cloud Services</div>
                    <p className="text-blue-100 text-sm">Secure, scalable infrastructure solutions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-white text-lg font-semibold mb-2">DevOps</div>
                    <p className="text-blue-100 text-sm">Streamlined development pipelines</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-white text-lg font-semibold mb-2">App Development</div>
                    <p className="text-blue-100 text-sm">Custom enterprise solutions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-white text-lg font-semibold mb-2">FinOps</div>
                    <p className="text-blue-100 text-sm">Optimize cloud spending</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-50 blur-2xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300 rounded-full opacity-50 blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;