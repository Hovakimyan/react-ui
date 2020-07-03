// @flow

import styled, { css, StyledProps } from 'styled-components'

import { noSelect, ellipsis } from 'consts/styles'

type Props = StyledProps<{
    buttonType: ThemeColorTypes
    size: SizeTypes
    disabled?: boolean
    isFlat?: boolean
    isFit?: boolean
}>

const getDefaultStyles = ({
    theme,
    buttonType,
    size,
    isFlat,
    isFit,
}: Props) => {
    const sizes = theme.buttons.sizes[size]
    const colors = theme.buttons.colors[buttonType]
    return css`
        padding: ${sizes.padding};
        height: ${sizes.height};
        font-size: ${sizes.fontSize};
        color: ${colors.color};
        background: ${colors.normal};
        border-radius: ${isFlat ? 0 : sizes.borderRadius};
        box-shadow: ${isFlat ? 'none' : colors.shadow};
        display: flex;
        flex-grow: ${isFit ? 1 : 0};
        width: ${isFit ? '100%' : 'auto'};
    `
}

const getDisabledStyles = ({ disabled }: Props) => {
    if (!disabled) return ''
    return css`
        opacity: 0.5;
        box-shadow: none;
        cursor: default;
        border-color: gray;
        pointer-events: none;
    `
}

const getHoverStyles = ({ buttonType, disabled, theme }: Props) => {
    if (disabled) return ''
    return css`
        &:hover {
            background: ${theme.buttons.colors[buttonType].hover};
        }
    `
}

const getActiveStyles = ({ buttonType, disabled, theme }: Props) => {
    if (disabled) return ''
    return css`
        &:active {
            box-shadow: none;
            background: ${theme.buttons.colors[buttonType].active};
        }
    `
}

export const Button = styled.button`
    ${noSelect};
    ${ellipsis};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    line-height: 20px;
    box-sizing: border-box;
    max-width: 100%;
    border: none;
    ${getDefaultStyles};
    ${getDisabledStyles};
    ${getHoverStyles};
    ${getActiveStyles};
`
