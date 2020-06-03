/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import Layout from 'layouts';

import createStore from './src/store';


let store = null;
// export const wrapRootElement = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents, element, ...rest }) => {
//   // Instantiating store in `wrapRootElement` handler ensures:
//   //  - there is fresh store for each SSR page
//   //  - it will be called only once in browser, when React mounts


//   return (

//   );
// };

export const replaceRenderer = ({
  element,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  const sheet = new ServerStyleSheet();
  store = createStore();

  const app = () => (
    <Provider store={store}>
      {/* <Resize> */}
      <StyleSheetManager sheet={sheet.instance}>
        <Layout>{element}</Layout>
      </StyleSheetManager>
      {/* </Resize> */}
    </Provider>
  )
  replaceBodyHTMLString(renderToString(<app />));
  setHeadComponents([sheet.getStyleElement()]);
}