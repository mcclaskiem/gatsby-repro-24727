/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO() {

  return (
    <Helmet>
      <title>Links Brewing Co. | Quiet Please</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="WELCOME TO THE LINKS. THE TEE IS CLEAR. BUT BEFORE WE PLAY. LETS RAISE A BEER. HERE'S TO YOU, AND YOU, AND YOU. AT THE LINKS YOU SHOULD BE. YOU HAVE THE HONORS. NOW, QUIET PLEASE." />
      {/* <meta name="author" content="Defendify" /> */}
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="@Defendify" /> */}
      <meta name="twitter:title" content="Links Brewing Co. | Quiet Please" />
      <meta name="twitter:description" content="WELCOME TO THE LINKS. THE TEE IS CLEAR. BUT BEFORE WE PLAY. LETS RAISE A BEER. HERE'S TO YOU, AND YOU, AND YOU. AT THE LINKS YOU SHOULD BE. YOU HAVE THE HONORS. NOW, QUIET PLEASE." />  
      {/* <meta name="twitter:creator" content="@Defendify" /> */}
      <meta name="twitter:image" content="https://linksbrewing.com/images/og-image.jpg" />
      <meta property="og:title" content="Links Brewing Co. | Quiet Please" />
      <meta property="og:type" content="website" /> 
      <meta property="og:url" content="https://linksbrewing.com" />
      <meta property="og:image" content="https://linksbrewing.com/images/og-image.jpg" />
      <meta property="og:description" content="WELCOME TO THE LINKS. THE TEE IS CLEAR. BUT BEFORE WE PLAY. LETS RAISE A BEER. HERE\'S TO YOU, AND YOU, AND YOU. AT THE LINKS YOU SHOULD BE. YOU HAVE THE HONORS. NOW, QUIET PLEASE." />
      <meta property="og:site_name" content="Links Brewing Co."></meta>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
