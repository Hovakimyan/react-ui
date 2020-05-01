// @flow

import styled from 'styled-components'

const getSize = ({ size, theme }) => theme.icons.sizes[size] || `${size}px`

export const Container = styled.div`
    display: flex;
    align-items: center;
    & svg {
        fill: ${({ fill, theme }) => theme.colors[fill]};
        width: ${getSize};
        pointer-events: none;
    }
`
