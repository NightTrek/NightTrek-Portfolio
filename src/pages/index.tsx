import React from 'react';

import Hero from '@/components/Hero';
import AboutMeSection from '@/components/LandingPageParts/AboutSection';
import ContactSection from '@/components/LandingPageParts/ContactSection';
import ExperienceSection from '@/components/LandingPageParts/ExperienceSection';
import FeaturedPortfolioSection from '@/components/LandingPageParts/FeaturedPortfolioSection';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Daniel Steigman | OpenAI PM and forward-deployed Codex lead"
          description="Product leader and technical operator helping secure enterprises deploy Codex at company scale."
        />
      }
    >
      <Hero />
      <AboutMeSection />
      <ExperienceSection />
      <FeaturedPortfolioSection />
      <ContactSection />
    </Main>
  );
};

export default Index;
