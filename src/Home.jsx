import React from "react";
import Header from "./Header.jsx";
import AppBar from "./Appbar.jsx";
import CustomizedSteppers from "./stepper.jsx";
import Carousels from "./Carousel.jsx";
import Strip from "./Strip.jsx";
import Vancard from "./Vancard.jsx";
import Post from "./Post.jsx";
import Bottomstrip from "./Bottomstrip.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <AppBar />
      <CustomizedSteppers />
      <Carousels />
      <Strip />
      <Vancard />
      <Post />
      <Bottomstrip />
      <Footer />
    </>
  );
};

export default Home;
