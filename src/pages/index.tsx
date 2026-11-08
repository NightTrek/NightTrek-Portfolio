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
          title="Daniel Steigman | Entrepreneur & Technical Leader"
          description="Entrepreneur and technical leader bringing people together to build products and drive outcomes. Enterprise AI at OpenAI, Cline, and hands-on engineering."
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
