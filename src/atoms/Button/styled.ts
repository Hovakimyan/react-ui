// @flow

import styled, { css } from 'styled-components'

import { noSelect, ellipsis } from 'consts/styles'

const getDefaultStyles = ({ type, size, theme, isFlat, isFit, weight }) => {
    const sizes = theme.buttons.sizes[size]
    const colors = theme.buttons.colors[type]
    return css`
        padding: ${sizes.padding};
        height: ${sizes.height};
        font-size: ${sizes.fontSize};
        color: ${colors.color};
        background: ${colors.normal};
        border-radius: ${isFlat ? 0 : sizes.borderRadius};
        box-shadow: ${isFlat ? 'none' : colors.shadow};
        display: flex;
        font-weight: ${weight};
        flex-grow: ${isFit ? 1 : 0};
        width: ${isFit ? '100%' : 'auto'};
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
    line-height: 20px;
    box-sizing: border-box;
    max-width: 100%;
    border: none;
    ${getDisabledStyles};
    ${getHoverStyles};
    ${getActiveStyles};
`
