import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Blog from "./Pages/Blog/Blog";
import LandingPage from "./Pages/LandingPage/index";
import theme from './theme';
import Header from './Header';
import Footer from './Footer';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
const sections = [
  { title: 'About Me', url: '#' },
  { title: 'Product Showcase', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Culture', url: '#' },


];


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRs5ZTXRLkW9D8b-NvM6iJfBb_0RI5bus",
  authDomain: "nighttrek-web3-portfolio.firebaseapp.com",
  projectId: "nighttrek-web3-portfolio",
  storageBucket: "nighttrek-web3-portfolio.appspot.com",
  messagingSenderId: "153301379863",
  appId: "1:153301379863:web:56c3176062edb36891a552",
  measurementId: "G-54C0W6P8H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Header title="Blog" sections={sections} />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
    <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
  </ThemeProvider>,
);
