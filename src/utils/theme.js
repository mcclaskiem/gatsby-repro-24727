import { css } from 'styled-components';


const sizes = {
  desktopXL: 1366,
  desktop: 1024,
  tablet: 768,
  mobile: 412,
};

const CONTENT_WIDTH = 1024;


export default {
  colors: {
    // TODO: replace with actual branding colors
    Primary: '#144a63',
    Secondary: '',
    Tertiary: '',
    Text: '',

  },
  content: { CONTENT_WIDTH },
  breakpoints: sizes,
};