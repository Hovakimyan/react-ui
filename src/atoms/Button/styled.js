// @flow

import styled, { css } from 'styled-components'

import { noSelect, ellipsis } from 'constants/styles'

const getDefaultStyles = ({ type, size, theme, isFlat, fit, weight }) => {
    return css`
        padding: ${theme.buttons.sizes[size].padding};
        font-size: ${theme.buttons.sizes[size].fontSize};
        color: ${theme.buttons.colors[type].color};
        background: ${theme.buttons.colors[type].normal};
        border-radius: ${isFlat ? 0 : theme.buttons.sizes[size].borderRadius};
        box-shadow: ${isFlat ? 'none' : theme.buttons.colors[type].shadow};
        display: ${fit ? 'flex' : 'inline-flex'};
        font-weight: ${weight};
    `
}

const getDisabledStyles = ({ disabled }) => {
    if (!disabled) return ''
    return css`
        opacity: 0.5;
        box-shadow: none;
        cursor: default;
        border-color: gray;
        pointer-events: none;
    `
}

const getHoverStyles = ({ type, disabled, theme }) => {
    if (disabled) return ''
    return css`
        &:hover {
            background: ${theme.buttons.colors[type].hover};
        }
    `
}

const getActiveStyles = ({ type, disabled, theme }) => {
    if (disabled) return ''
    return css`
        &:active {
            box-shadow: none;
            background: ${theme.buttons.colors[type].active};
        }
    `
}

export const Button = styled.button`
    ${noSelect};
    ${ellipsis};
    ${getDefaultStyles};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    flex-grow: 0;
    line-height: 20px;
    box-sizing: border-box;
    max-width: 100%;
    border: none;
    ${getDisabledStyles};
    ${getHoverStyles};
    ${getActiveStyles};
`
