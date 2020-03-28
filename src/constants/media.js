import { css } from 'styled-components'

const sizes = {
    megagiant: 1280,
    giant: 1170,
    desktop: 992,
    tablet: 768,
    mobile: 480,
    xsmall: 320
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)};
        }
    `
    return accumulator
}, {})
