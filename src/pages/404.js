/**
 *
 * IndexPage
 *
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../utils/theme';

const IndexPage = () => {
  useEffect(() => {

  });


  return (
    <Container>
      <h1>Oops!</h1>
    </Container>
  );
};

IndexPage.propTypes = {

};

export default IndexPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
