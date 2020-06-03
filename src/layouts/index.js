/**
 *
 * Layout
 *
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled, {
  ThemeProvider,
} from 'styled-components';
import PropTypes from 'prop-types';

import SEO from 'components/seo';
import Header from 'components/global/Header';
import Footer from 'components/global/Footer';

import Theme from 'utils/theme';

import '../styles/screen.scss';


const Layout = ({
  children,
  dispatch
}) => {
  

  return (
    <ThemeProvider theme={Theme}>
      <SEO />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const withConnect = connect(
  dispatch => ({ dispatch }),
);

export default compose(memo, withConnect)(Layout);



const Container = styled.div`

`;
