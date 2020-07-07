import styled, { StyledProps } from 'styled-components'

type SProps = StyledProps<{
    corner: ICardsCorners
    shadow: ICardsShadows
}>

export const Paper = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    padding: 20px;
    border-radius: ${({ corner, theme }: SProps) => theme.cards.corner[corner]};
    box-shadow: ${({ shadow, theme }: SProps) => theme.cards.shadow[shadow]};
`
