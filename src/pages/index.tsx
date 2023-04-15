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
        <div className="flex h-screen flex-col items-center justify-center">
            <div className=" w-full max-w-3xl  flex-col content-between justify-start	">
                <h4 className=" px-2 text-lg text-default-500">
                    Hello, my name is
                </h4>
                <h2 className=" px-2 font-bold" style={{ fontSize: '64px' }}>
                    Daniel Steigman.
                </h2>
                <div className=" px-2 text-lg text-slate-400">
                    I build blockchain products to empower the{' '}
                    <span className=" text-default-500">Web3</span> revolution.
                </div>
                <div className="px-2 text-base text-slate-400">
                    Software engineering is a passion that allows me to bring
                    new people into the world of Web3. Being a startup founder
                    requires a high level of software competency AND the ability
                    to engage new people and new ideas.
                </div>
                <div className="my-8 flex px-2 text-lg">
                    <ButtonBright
                        title="Read about my work at Nugbase"
                        link="/nugbase"
                    />
                </div>
            </div>
        </div>
    );
};

const Index = () => {
    // const router = useRouter();

    return (
        <Main
            meta={
                <Meta
                    title="Nighttreks's portfolio"
                    description="Founders are professional problem solvers who bring people together around their common vision."
                />
            }>
            <Hero />
            <AboutMeSection />
            <ExperienceSection />
            <FeaturedPortfolioSection />
            <ContactSection />
        </Main>
    );
};

export default Index;
