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
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
   }
   `