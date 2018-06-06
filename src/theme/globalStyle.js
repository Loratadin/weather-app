import { injectGlobal } from 'styled-components';
import { light } from './variables';

injectGlobal`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   img{
    border: none;
   }
   body {
    color: ${light};
    line-height: 1.8;
   }
   #root {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
   }
   `