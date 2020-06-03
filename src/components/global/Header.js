import React, { memo, useCallback, useEffect } from 'react';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import Logo from 'static/logo.svg'

import { toggleMenu } from 'actions/menu';

const Header = ({ menuIsOpen, dispatch }) => {



  return (
    <Container>
      <Logo className={'logo'}/>
    </Container>
  );
};

Header.propTypes = {
  menuIsOpen: PropTypes.bool
};

const mapStateToProps = ({menuIsOpen}) => ({ menuIsOpen });
const withConnect = connect(mapStateToProps);
export default compose(memo, withConnect)(Header);


const Container = styled.header`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 3em 0;
  .logo {
    height: 60px;
    width: auto;
  }
`;