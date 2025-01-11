// pages/index.js

import TeamSection from '../components/TeamSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TeamSection />
      <ProductGrid />
    </div>
  );
}