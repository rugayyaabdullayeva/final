import React from "react";
import { Helmet } from "react-helmet";
import "./Pages.scss";

const Pages = () => {
  return (
    <div id="pages">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pages</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Pages</h1>
    </div>
  );
};

export default Pages;
