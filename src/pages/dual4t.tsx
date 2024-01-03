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
              Founded in 2017, Dual4T was a cutting-edge software and hardware
              consulting company dedicated to empowering hardware manufacturers
              to automate their business processes. Dual4T collaborated with
              companies to develop customized software solutions. I facilitated
              collaborative workshops and training sessions to foster effective
              communication, enhance problem-solving skills, and promote a
              culture of innovation within the teams. By encouraging
              cross-functional collaboration and providing tools and techniques
              for brainstorming and ideation, I empowered teams to work together
              seamlessly and generate innovative ideas more rapidly.
            </div>
            <Image
              src={`${router.basePath}/individualRoom.PNG`}
              alt="Agromation grow room software"
              width={384}
              height={384}
              style={{ borderRadius: '16px', width: '384px', height: '384px' }}
              layout="fixed"
            />
          </div>
          <div className="my-6 flex w-full flex-col justify-evenly ">
            <div>Services Provided</div>
            <ul className="ml-8 list-disc text-base	text-slate-400">
              <li>
                Developed custom software automation solutions using React for
                streamlining complex business processes
              </li>
              <li>
                Designed and maintained high-performance websites using
                WordPress, ensuring optimal user experience and seamless
                functionality
              </li>
              <li>
                Implemented and provided training on cutting-edge software
                applications, including Customer Relationship Management (CRM),
                Point of Sale (POS), and Inventory Management systems, enabling
                efficient business operations
              </li>
              <li>
                Authored comprehensive Standard Operating Procedures (SOPs) for
                manufacturing processes, ensuring consistency, quality, and
                compliance
              </li>
              <li>
                Delivered industrial process training to employees, equipping
                them with the necessary skills and knowledge to optimize
                productivity and safety
              </li>
              <li>
                Provided expert consultation on process design for advanced
                hydrocarbon extraction systems, ensuring optimal efficiency and
                safety standards
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-10 flex w-full flex-wrap content-center justify-evenly bg-agro-background bg-repeat-x py-12">
        <div className="w-full max-w-2xl flex-col pb-8">
          <div className="px-4">Building Agromation SmartGrow</div>
          <div className="px-4	text-base text-slate-400">
            The primary client of Dual4T was Agromation, an industrial
            automation company specializing in modular indoor farming solutions.
            To enhance their product&apos;s competitiveness, I proposed the
            development of a sophisticated software application that would
            enable customers to remotely monitor and control their farming
            systems. This presented unique challenges due to the utilization of
            Siemens PLC, which relies on proprietary drivers, as well as the
            limited internet connectivity often experienced by their customers.
            Through innovative solutions and extensive expertise, I successfully
            addressed these complexities, providing Agromation with a reliable
            and efficient remote monitoring and control system.
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-evenly px-6 lg:flex-nowrap">
          <div className="flex w-full max-w-[1800px] flex-wrap justify-evenly px-6 lg:flex-nowrap">
            {' '}
            <Image
              src={`${router.basePath}/agromation-dashboard.PNG`}
              alt="Agromation grow room software"
              width={384}
              height={384}
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
      </div>
    </Main>
  );
};
// 320+64=
export default Dual4tPage;
