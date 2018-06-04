import { injectGlobal } from 'styled-components';
import media from './media';
import { main } from './variables';

injectGlobal`
   @import url('https://fonts.googleapis.com/css?family=Cute+Font');
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   img, table, tr, td {
    border: none;
   }
   ol, ul {
    list-style-type: none;
   }
   table {
    border-collapse: collapse;
    border-spacing: 0;
   }
   body {
    font-family: 'Cute Font', cursive;
    font-size: 14px;
    color: ${main};
    line-height: 1.8;
    ${media.tablet`
    font-size: 18px;
    `}
    ${media.desktop`
    font-size: 20px;
    `}
    ${media.xldesktop`
    font-size: 26px;
    `}
   }
   `