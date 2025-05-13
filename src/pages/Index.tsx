
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CardSection from '@/components/CardSection';
import Testimonials from '@/components/Testimonials';
import HowToUse from '@/components/HowToUse';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CardSection />
        <HowToUse />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
