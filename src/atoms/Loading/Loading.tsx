import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Loading = ({ size = 'medium', color = 'white' }: Props) => {
    return (
        <Styled.Wrapper size={size}>
            <Styled.Box size={size} color={color} delay={0} />
            <Styled.Box size={size} color={color} delay={-0.45} />
            <Styled.Box size={size} color={color} delay={-0.3} />
            <Styled.Box size={size} color={color} delay={-0.15} />
        </Styled.Wrapper>
    )
}

export default Loading
