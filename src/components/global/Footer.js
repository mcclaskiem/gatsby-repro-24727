import React, { memo, useCallback, useEffect } from 'react';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { toggleMenu } from 'actions/menu';

const Footer = () => {



  return (
    <Container></Container>
  );
};

Footer.propTypes = {
};

export default Footer;


const Container = styled.footer`
  width: 100%;
  /* height: 6em; */
  background-color: ${({ theme }) => theme.colors.Primary};
`;