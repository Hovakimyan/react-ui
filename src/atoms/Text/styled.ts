// @flow

import styled, { StyledProps } from 'styled-components'
import { styles } from 'consts'
import { PropsWithChildren } from 'react'

type SProps = PropsWithChildren<
    StyledProps<{
        ellipsis: boolean
        noSelect: boolean
        color: IGlobalColors
        size: FontSizeType
        weight: number
        align: string
    }>
>

const getEllipsis = ({ ellipsis }: SProps) => (ellipsis ? styles.ellipsis : '')
const getSelection = ({ noSelect }: SProps) => (noSelect ? styles.noSelect : '')

export const Text = styled.p`
    margin: 0;
    display: block;
    color: ${({ color, theme }: SProps) => theme.colors[color]};
    font-size: ${({ size, theme }: SProps) =>
        theme.fonts.sizes[size] || `${size}px`};
    font-weight: ${({ weight }: SProps) => weight};
    text-align: ${({ align }: SProps) => align};
    ${getEllipsis};
    ${getSelection};
`
