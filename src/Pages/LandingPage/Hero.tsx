import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from "@mui/material/Box";
import Typeography from "@mui/material/Typography"


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
            title: "Flowerpatch",
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
            img: "https://firebasestorage.googleapis.com/v0/b/nighttrek-web3-portfolio.appspot.com/o/BurningManFireFLower.jpg?alt=media&token=e6f5d7c4-7e86-4dbf-9a1f-5b6965b4dc89",
            title: "Burning Man Dance powered Fire flower",
            rows: 2,
            cols: 1,
        }
    ];

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <ImageList
                sx={{ width: "100%"}}
                cols={3}
                >
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
            <Box>
                <Typeography> Every Developer has a Story of what they built</Typeography>
            </Box>
        </div>
    );
};

export default Hero;
