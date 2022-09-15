/* eslint-disable require-jsdoc */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MainFeaturedPost from './FeaturedPost/MainFeaturedPost';
import FeaturedPost from './FeaturedPost/FeaturedPost';
import Main from './main/Main';
import Sidebar from './Sidebar/Sidebar';
import Container from '@mui/material/Container';

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const mainFeaturedPost = {
    title: 'The Three takeaways from being the lead Developer for the Dapper Dino Dapp',
    description:
        'Developing a Full NFT Breeding experience for the Dapper dino NFT on Polygon. From PFP to full functional Dapp complete with cross collection Breeding. ',
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
];

const posts = [ post1, post2, post3 ];

const sidebar = {
    title: 'About',
    description:
        'The experience of becoming a software engineer. How I went from being a student with a dream to full time software developer in the Web3 space.',
    archives: [
        { title: 'November 2021', url: '#' },
        { title: 'June 2019', url: '#' },
        { title: 'April 2018', url: '#' },
    ],
    social: [
        {
            name: 'GitHub',
            icon: GitHubIcon,
            url: 'https://github.com/NightTrek',
        },
        {
            name: 'Twitter',
            icon: TwitterIcon,
            url: 'https://twitter.com/NighttrekETH',
        },
    ],
};

const Blog = (): React.ReactElement<any, any> => (
        <Container maxWidth="lg">
            <main>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post} />
                    ))}
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <Main title="Start here" posts={posts} />
                    <Sidebar
                        title={sidebar.title}
                        description={sidebar.description}
                        archives={sidebar.archives}
                        social={sidebar.social}
                    />
                </Grid>
            </main>
        </Container>
    )

export default Blog;

