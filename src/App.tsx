import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Reviews from './components/Reviews';
import BlogEvents from './components/BlogEvents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Partners />
        <Reviews />
        <BlogEvents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;