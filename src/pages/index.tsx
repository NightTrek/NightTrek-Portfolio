// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: '50vh' }}
    >
      <div className="mt-12 w-full max-w-3xl  flex-col content-between justify-start	">
        <h4 className=" px-2 text-emerald-400">Hello my name is</h4>
        <h2 className=" px-2 font-bold" style={{ fontSize: '64px' }}>
          Daniel Steigman.
        </h2>
        <div className=" px-2 text-slate-400" style={{ fontSize: '24px' }}>
          I build blockchain products to empower the{' '}
          <span className=" text-emerald-400">web3</span> revolution.
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
          description="Founder are professional problem solvers who bring people together around their common vision."
        />
      }
    >
      <Hero />
    </Main>
  );
};

export default Index;
