import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Dual4tPage = () => {
  const router = useRouter();
  // q: "what does CRM stand for?"
  // a: "Customer Relationship Management"

  return (
    <Main
      meta={
        <Meta
          title="Dual4T"
          description="Innovation and automation consulting for software and hardware companies"
        />
      }
    >
      <div className="my-40 flex w-full content-center justify-evenly">
        <div className="w-full max-w-4xl flex-col">
          <div className="flex flex-col items-start justify-between px-2 text-3xl font-bold text-white">
            Dual4T{' '}
            <span className="px-1 text-lg text-default-500">
              Innovation and software automation consulting
            </span>
          </div>
          <div className="my-6 flex w-full flex-col-reverse flex-wrap justify-between sm:flex-row sm:flex-nowrap">
            <div className="my-4 p-2 text-lg text-slate-400">
              Founded in 2017 Dual4T was a software and hardware consulting
              company aimed to help hardware manufacturers automate their
              manufacturing and business processes. Dual4T worked with companies
              to build custom software solutions to automate their workload.
              Dual4T also worked with companies to train the staff and enable
              teams to innovate faster.
            </div>
            <Image
              src={`${router.basePath}/individualRoom.PNG`}
              alt="Agromation grow room software"
              width={320}
              height={320}
              style={{ borderRadius: '16px' }}
            />
          </div>
          <div className="my-6 flex w-full flex-col justify-evenly ">
            <div>Services Provided</div>
            <ul className="ml-8 list-disc text-base	text-slate-400">
              <li>Built custom software automation in React</li>
              <li>Designed and maintained wordpress websites</li>
              <li>
                Set up and trained employees on software like customer
                relationship management(CRM), point of sale(POS), and inventory
                managment
              </li>
              <li>Wrote standard operating procedures for manufacturing</li>
              <li>Taught employees industrial processes</li>
              <li>
                Consulted on process design for hydrocarbon extraction systems
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-10 flex w-full flex-wrap content-center justify-evenly bg-agro-background bg-repeat-x py-12">
        <div className="w-full max-w-2xl flex-col pb-8">
          <div className="px-4">Building Agromation SmartGrow</div>
          <div className="px-4	text-base text-slate-400">
            The biggest client of Dual4T was Agromation, an industrial
            automation company building a modular indoor farming product. In
            order to differentiate their product I proposed a software
            application to allow their customers to monitor and control their
            systems remotely. Remote monitoring and control was especially
            complex for two reasons: First the systems used a Siemens PLC which
            uses proprietary drivers. Secondly their customers frequently had
            very little internet connectivity.
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-evenly px-6 lg:flex-nowrap">
          <Image
            src={`${router.basePath}/agromation-dashboard.PNG`}
            alt="Agromation grow room software"
            width={256}
            height={256}
            style={{ borderRadius: '16px', marginTop: '8px' }}
          />
          <Image
            src={`${router.basePath}/ManageUsersPage.PNG`}
            alt="Agromation grow room software"
            width={384}
            height={256}
            style={{ borderRadius: '16px', marginTop: '8px' }}
          />
        </div>
      </div>
    </Main>
  );
};
// 320+64=
export default Dual4tPage;
