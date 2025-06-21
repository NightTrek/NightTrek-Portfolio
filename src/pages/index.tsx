import React from 'react';

import ButtonBright from '@/components/ButtonBright';
import AboutMeSection from '@/components/LandingPageParts/AboutSection';
import ContactSection from '@/components/LandingPageParts/ContactSection';
import ExperienceSection from '@/components/LandingPageParts/ExperienceSection';
import FeaturedPortfolioSection from '@/components/LandingPageParts/FeaturedPortfolioSection';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Hero = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center ">
      {/* <video muted autoPlay loop className="absolute z-0 w-full h-full" src=''> */}

      <div className=" w-full max-w-3xl  flex-col content-between justify-start ">
        <h4 className=" px-2 text-lg text-default-500">Hello, my name is</h4>
        <h2 className=" px-2 font-bold" style={{ fontSize: '64px' }}>
          Daniel Steigman.
        </h2>
        <div className=" px-2 text-lg text-slate-400">
          I build innovative products that empower developers and{' '}
          <span className=" text-default-500">transform</span> how teams work.
        </div>
        <div className="px-2 text-base text-slate-400">
          I have traveled the world, helping businesses implement innovative
          solutions for their problems. Currently Head of Operations at Cline,
          scaling world-class teams and launching products that serve millions
          of developers worldwide.
        </div>
        <div className="my-8 flex px-2 text-lg">
          <ButtonBright title="Read about my work at Nugbase" link="/nugbase" />
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Nighttreks's portfolio"
          description="A full stack engineer and product leader. Helping build teams which innovate fast to compete with the fast changing software world."
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
