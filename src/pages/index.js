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
      <h1>Coming Soon!</h1>
      <Section>
        <p className={'bebas'}>Test test test test.</p>
        <p>Test test test test.</p>
        <p className={'bebas'}>Test test test test.</p>
        <p>Test test test test.</p>
      </Section>
      <img src={'/images/test.png'}/>
      <Section>
        <p className={'bebas'}>Test test test test.</p>
        <p>Test test test test.</p>
        <p className={'bebas'}>Test test test test.</p>
        <p>Test test test test.</p>
      </Section>
      <img src={'/images/test.png'}/>
    </Container>
  );
};

IndexPage.propTypes = {

};

export default IndexPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  h1 {
    color: ${({ theme }) => theme.colors.Primary};
    font-family: 'Averia Serif Libre', serif;
  }
  img.golfers,
  img.golfers-desktop {
    width: 100%;
    height: auto;
  }
  img.golfers {
    margin-top: -5em;
  }
  img.golfers-desktop {
    display: none;
  }

  @media all and (min-width: 744px) {
    background-image: url('/images/test.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
    img.golfers {
      display: none;
    }
    img.golfers-desktop {
      display: block;
      margin-top: -14em;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 3em 0;
  position: relative;
  &:first-of-type {
    margin-bottom: 2em;
    background-image: url('/images/test.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    @media all and (min-width: 744px) {
      background-image: none;
      margin-bottom: 0;
    }
  }
  &:last-of-type {
    background-color: ${({ theme }) => theme.colors.Primary};
    p {
      color: white;
    }
    @media all and (min-width: 744px) {
      background-color: transparent;
      p {
        color: ${({ theme }) => theme.colors.Primary}; 
      }
    }
  }
  p {
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.Primary};
    font-size: 2.3em;
    &.bebas {
      font-family: 'Bebas Neue', serif;
    }
  }
`;
