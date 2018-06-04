import { css } from 'styled-components';

const sizes = {
   phone: 300,
   tablet: 451,
   desktop: 769,
   xldesktop: 1025
};

function phone(...args) {
 return css`
    @media(min-width: ${sizes.phone}px) {
     ${css(...args)}
    }
 `;
}

function tablet(...args) {
 return css`
    @media(min-width: ${sizes.tablet}px) {
     ${css(...args)}
    }
 `;
}

function desktop(...args) {
 return css`
    @media(min-width: ${sizes.desctop}px) {
     ${css(...args)}
    }
 `;
}

function xldesktop(...args) {
 return css`
    @media(min-width: ${sizes.xldesktop}px) {
     ${css(...args)}
    }
 `;
}

const media = {
 phone,
 tablet,
 desktop,
 xldesktop
};

export default media;