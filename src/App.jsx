import React from 'react';
import Navbar from './components/navbar';
import Herosection from './components/herosection';
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Footer from './components/footer';



const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Herosection />
      <FeatureSection />
      <Pricing />
      <Footer />

      </div>

    </>
  )
}

export default App

