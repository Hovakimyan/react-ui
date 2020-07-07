import styled, { css, StyledProps } from 'styled-components'
import { noSelect, ellipsis } from 'consts/styles'

type SProps = StyledProps<{
    size: SizeTypes
    value: string
    disabled: boolean
    isFlat: boolean
    isFit: boolean
}>

const getDefaultStyles = (props: SProps) => {
    const sizes = props.theme.inputs.sizes[props.size]
    const colors = props.theme.inputs.colors
    return css`
        color: ${colors.text.active};
        border: 1px solid ${colors.border.active};
        height: ${sizes.height};
        padding: ${sizes.padding};
        font-size: ${sizes.fontSize};
        background: ${colors.background.active};
        border-radius: ${props.isFlat ? 0 : sizes.borderRadius};
        font-weight: 400;
        flex-grow: ${props.isFit ? 1 : 0};
    `
}

const getDisabledStyles = (props: SProps) => {
    if (!props.disabled) return ''
    const colors = props.theme.inputs.colors
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
