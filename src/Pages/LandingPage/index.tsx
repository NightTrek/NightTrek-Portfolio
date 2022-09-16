import * as React from 'react';
import Hero from './Hero';
import DapperDinoSection from './Projects/DapperDinoSection';
import FlowerpatchSection from './Projects/flowerpatchSection';

// List of project sections
const web3Projects = [DapperDinoSection, FlowerpatchSection];

// eslint-disable-next-line arrow-body-style
const LandingPage = (): React.ReactElement<any> => {
    // const [ state, setState ] = React.useState({
    //     LandingText: "Engineering Propblems not solutions"
    // })
    return (
        <div>
            <Hero />
            <div id="web3">
                {web3Projects.map((Section, index) => (
                    <Section key={index} />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
