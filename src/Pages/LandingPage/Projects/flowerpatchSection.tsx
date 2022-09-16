import { Grid } from '@mui/material';
import * as React from 'react';

const FlowerpatchSection = () => {
    const pageLink = 'https://app.dapperdinos.com/';

    return (
        <div>
            <Grid container>FLOWERPATCH APP</Grid>
            <a href={pageLink}> Try the live app here</a>
        </div>
    );
};

export default FlowerpatchSection;

