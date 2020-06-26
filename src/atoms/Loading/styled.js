// @flow

import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const getSize = (theme, size) =>
    typeof size === 'number'
        ? size
        : theme.loading.sizes[size] || theme.loading.sizes.medium

const getSizes = ({ theme, size }) => {
    const WH = getSize(theme, size)
    return css`
        width: ${WH}px;
        height: ${WH}px;
    `
}

const getBoxStyles = ({ theme, size, color }) => {
    const container = getSize(theme, size)
    const border = container / 10
    const WH = container - 2 * border
    const borderColor = theme.colors[color] || color
    return css`
        width: ${WH}px;
        height: ${WH}px;
        margin: ${border}px;
        border-width: ${border}px;
        border-color: ${borderColor} transparent transparent transparent;
    `
}

export const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    ${getSizes};
`

export const Box = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-style: solid;
    animation-delay: ${({ delay }) => delay}s;
    ${getBoxStyles};
`
