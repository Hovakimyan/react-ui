// @flow

import styled, { css } from 'styled-components'
import { noSelect, ellipsis } from 'consts/styles'

const getDefaultStyles = ({ size, theme, isFlat, isFit, weight }) => {
    const sizes = theme.inputs.sizes[size]
    const colors = theme.inputs.colors
    return css`
        color: ${colors.text.active};
        border: 1px solid ${colors.border.active};
        height: ${sizes.height};
        padding: ${sizes.padding};
        font-size: ${sizes.fontSize};
        background: ${colors.background.active};
        border-radius: ${isFlat ? 0 : sizes.borderRadius};
        font-weight: ${weight};
        flex-grow: ${isFit ? 1 : 0};
    `
}

const getDisabledStyles = ({ disabled, theme }) => {
    if (!disabled) return ''
    const colors = theme.inputs.colors
    return css`
        ${noSelect};
        ${ellipsis};
        opacity: 0.5;
        box-shadow: none;
        cursor: default;
        pointer-events: none;
        color: ${colors.text.disabled};
        border-color: ${colors.border.disabled};
        background: ${colors.background.disabled};
        border: 1px solid ${colors.border.disabled};
    `
}

export const Input = styled.input`
    ${getDefaultStyles};
    ${getDisabledStyles};
    display: flex;
    flex-shrink: 0;
    box-sizing: border-box;
    max-width: 100%;
`
