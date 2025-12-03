import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCoachings from '../components/home/FeaturedCoachings';
import ExamCategories from '../components/home/ExamCategories';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';

const HomePage = () => {
  return (
    <main className="main-content">
      <HeroSection />
      <FeaturedCoachings />
      <ExamCategories />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
};

export default HomePage;
