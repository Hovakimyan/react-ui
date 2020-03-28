// @flow

import styled from 'styled-components'
import { colors, sizes, styles } from 'constants'

const getEllipsis = ({ ellipsis }) => (ellipsis ? styles.ellipsis : '')
const getSelection = ({ noSelect }) => (noSelect ? styles.noSelect : '')

export const StyledText = styled.div`
    margin: 0;
    display: block;
    color: ${({ color }) => colors.globalColors[color]};
    font-size: ${({ size }) => sizes.fontSizes[size] || `${size}px`};
    font-weight: ${({ weight }) => weight};
    text-align: ${({ align }) => align};
    ${getEllipsis};
    ${getSelection};
`
