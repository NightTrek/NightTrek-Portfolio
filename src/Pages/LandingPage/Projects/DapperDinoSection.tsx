import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typeography from '@mui/material/Typography';

const DapperDinoSection = () => {
    const pageLink = 'https://app.dapperdinos.com/';

    return (
        <div>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    // height: '640px',
                    overflow: 'hidden',
                }}>
                <video
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: '-1',
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                    playsInline
                    autoPlay
                    muted
                    loop
                    poster="cake.jpg">
                    <source
                        src="https://firebasestorage.googleapis.com/v0/b/nighttrek-web3-portfolio.appspot.com/o/VideoLoop.webm?alt=media&token=a486c1e1-6495-45cb-a9c3-e507aad6664f"
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>
                <Box>
                    <Grid
                        container
                        direction="row"
                        spacing="4"
                        marginTop={"36px"}
                        wrap={"nowrap"}
                        style={{ width: '100%', height: '100%' }}>
                        <Grid
                            container
                            direction="column"
                            spacing="2"
                            xs={12}
                            sm={7}
                            marginLeft={"36px"}>
                            <Typeography variant="h4" m={4}>
                                Dapper Dino NFT
                            </Typeography>
                            <Typeography variant="subtitle1" m={4}>
                                Building a full NFT Breeding experience from the
                                existing Dapper Dino NFT collection. As the
                                project manager and lead developer i was
                                responsible for designing and building the entire project using my team of designers and developers.
                                I personally built the repository using the latest web3 technology developed by nugbase and added global state managment and additional wallet and contract support.
                                One of the most challenging aspects of this project was building the breeding algorithm and image generation system.
                                 The sheer number of possibilities ment that testing and implementing the system required constant communication with the customer and many revisions.
                                 In the end the project had 3 developers and two designers working on it and was completed in 8 months. The project is still live please check out our hard work using the link below.
                            </Typeography>
                            <a href={pageLink} style={{
                            position: "relative",
                            margin: "24px",
                            }}>
                                <img
                                style={{position: "relative"}}
                                src="https://firebasestorage.googleapis.com/v0/b/nighttrek-web3-portfolio.appspot.com/o/ConnectWallet_Bone.png?alt=media&token=1da267a7-8cb0-4ca1-873c-d623c48d4aca"
                                alt="Dapper Dino Bone and link to site"/>
                                <Typeography variant="button" m={2} style={{position: "absolute", top: "32px", left: "18px", zIndex: 2}}>See the Dapper Dino Project</Typeography>
                            </a>
                        </Grid>
                        <Grid container direction="row" justifyContent="flex-end" xs={12} sm={5}>
                            <img src={"https://firebasestorage.googleapis.com/v0/b/nighttrek-web3-portfolio.appspot.com/o/dapperdino-logo.png?alt=media&token=542fa231-7c5c-4612-8c4c-49c32a8a461e"}
                            alt={"Dapper dino NFT Logo"}
                            width={"168px"} height={"188px"}
                            style={{marginRight:"24px"}}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default DapperDinoSection;
