import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MainSponsors } from './components/MainSponsors';
import { TeamSection } from './components/TeamSection';
import { PartnersSection } from './components/PartnersSection';
import { ObjectivesSection } from './components/ObjectivesSection';
import { PartnerContactSection } from './components/PartnerContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MainSponsors />
      <TeamSection />
      <PartnersSection />
      <ObjectivesSection />
      <PartnerContactSection />
      <Footer />
    </div>
  );
}

export default App;