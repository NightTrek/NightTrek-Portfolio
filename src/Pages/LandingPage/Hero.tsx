import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typeography from '@mui/material/Typography';

const Hero = (): React.ReactElement<any, any> => {
    const itemData = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/nighttrek-web3-portfolio.appspot.com/o/DapperDinoAccountPage.png?alt=media&token=7be4afb7-181b-440c-8bf8-c7ccb246d24f',
            title: 'Dapper Dino NFT Account Page',
            rows: 4,
            cols: 1,
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/nighttrek-web3-portfolio.appspot.com/o/FlowerpatchHome.png?alt=media&token=2e05963d-1f5a-489f-87dc-4e7809fe4820',
            title: 'Flowerpatch',
            rows: 2,
            cols: 1,
        },
        // {
        //     img: "",
        //     title: "Redeemable NFT",
        //     rows: 2,
        //     cols: 1,
        // },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/nighttrek-web3-portfolio.appspot.com/o/BurningManFireFLower.jpg?alt=media&token=e6f5d7c4-7e86-4dbf-9a1f-5b6965b4dc89',
            title: 'Burning Man Dance powered Fire flower',
            rows: 2,
            cols: 1,
        },
    ];

    return (
        <div>
            <div style={{ position: 'relative', width: '100%' }}>
                <ImageList sx={{ width: '100%' }} cols={3}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                srcSet={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: '0',
                    }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-end"
                        spacing={4}
                        sx={{ width: '100%', height: '100%' }}>
                        <Grid xs={2} sm={6} md={7} />
                        <Grid xs={10} sm={6} md={5}>
                            <Box
                                sx={{
                                    backgroundColor: 'primary.main',
                                    opacity: 0.9,
                                    padding: '24px',
                                }}>
                                <Typeography
                                    variant={'h2'}
                                    component={'h1'}
                                    m={4}
                                    align={'right'}>
                                    Every developer has a Story of their success
                                </Typeography>
                                <Typeography
                                    variant={'h4'}
                                    component={'h2'}
                                    m={4}
                                    align={'right'}>
                                    and their biggest challenges
                                </Typeography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Box
                sx={{
                    width: '100%',
                    height: '356px',
                    backgroundColor: '#4361ee',
                    padding: '24px',
                    marginTop: '-24px',
                }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={4}>
                    <Grid xs={12}>
                        <Typeography
                            variant="h2"
                            component={'h3'}
                            m={4}
                            mt={6}
                            mb={1}
                            align={'center'}>
                            Every project is a story waiting to be heard.
                        </Typeography>
                    </Grid>
                    <Grid  container xs={12} alignItems="center" justifyContent="center">
                        {/* <Grid xs={12} alignItems="center" justifyContent="center"> */}
                            <Typeography
                                variant="h4"
                                component={'h4'}
                                m={4}
                                align={'center'}
                                width={{ width: '60%'}}>
                                Find all of my biggest projects and their
                                stories here. Experience the challenges and hard
                                work that taught me.
                            </Typeography>
                        {/* </Grid> */}
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Hero;
