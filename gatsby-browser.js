/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from 'layouts';

import createStore from './src/store';

let store = null;
export const wrapRootElement = ({ element, ...rest }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  store = createStore();

  return (
    <Provider store={store}>
      {/* <Resize> */}
      <Layout>{element}</Layout>
      {/* </Resize> */}
    </Provider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};