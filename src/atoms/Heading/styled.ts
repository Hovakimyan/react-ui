import { createElement, PropsWithChildren } from 'react'
import styled, { StyledProps } from 'styled-components'
import { styles } from 'consts'

type SProps = PropsWithChildren<
    StyledProps<{
        ellipsis: boolean
        noSelect: boolean
        tag: HeadingTypes
        color: GlobalColorType
        size: FontSizeType
        weight: number
        align: string
    }>
>

const getEllipsis = ({ ellipsis }: SProps) => (ellipsis ? styles.ellipsis : '')
const getSelection = ({ noSelect }: SProps) => (noSelect ? styles.noSelect : '')

export const Heading = styled(({ tag, children, ...props }: any) =>
    createElement(tag, props, children),
)`
    margin: 0;
    display: block;
    color: ${({ color, theme }) => theme.colors[color]};
    font-size: ${({ size, theme }) => theme.fonts.sizes[size] || `${size}px`};
    font-weight: ${({ weight }) => weight};
    text-align: ${({ align }) => align};
    ${getEllipsis};
    ${getSelection};
`
