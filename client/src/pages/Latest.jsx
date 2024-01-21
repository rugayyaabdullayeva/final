import React from "react";
import { Helmet } from "react-helmet";
import "./Latest.scss";
const Latest = () => {
  return (
    <div id="latest">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Latest</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Latest</h1>
    </div>
  );
};

export default Latest;
