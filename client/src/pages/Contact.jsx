import React from "react";
import { Helmet } from "react-helmet";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
