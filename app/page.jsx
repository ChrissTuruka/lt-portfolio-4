// pages/index.js

import TeamSection from '../components/TeamSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home() {1
  return (
    <div>
      <Header />
      <HeroSection />
      <TeamSection />
      <ProductGrid />
      <Footer />
    </div>
  );
}