// @flow

import styled from 'styled-components'
import { styles } from 'constants'

const getEllipsis = ({ ellipsis }) => (ellipsis ? styles.ellipsis : '')
const getSelection = ({ noSelect }) => (noSelect ? styles.noSelect : '')

export const StyledText = styled.div`
    margin: 0;
    display: block;
    color: ${({ color, theme }) => theme.colors[color]};
    font-size: ${({ size, theme }) => theme.fonts.sizes[size] || `${size}px`};
    font-weight: ${({ weight }) => weight};
    text-align: ${({ align }) => align};
    ${getEllipsis};
    ${getSelection};
`
