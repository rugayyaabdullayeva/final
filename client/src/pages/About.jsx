import React from "react";
import { Helmet } from "react-helmet";
import "./About.scss";

const About = () => {
  return (
    <div id="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>About us</h1>
    </div>
  );
};

export default About;
