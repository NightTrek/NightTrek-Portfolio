import * as React from "react";
import {Container} from "@mui/material"
import Hero from "./Hero";

// eslint-disable-next-line arrow-body-style
const LandingPage = (): React.ReactElement<any> => {
    // const [ state, setState ] = React.useState({
    //     LandingText: "Engineering Propblems not solutions"
    // })
    const something = "something";
    return (
        <div>
            <Hero/>
            <Container maxWidth="lg">
                {something}
            </Container>
        </div>
    );

};

export default LandingPage;
