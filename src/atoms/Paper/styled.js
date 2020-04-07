// @flow

import styled from 'styled-components'

export const Paper = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    padding: 20px;
    border-radius: ${({ corner, theme }) => theme.cards.corner[corner]};
    box-shadow: ${({ shadow, theme }) => theme.cards.shadow[shadow]};
`
