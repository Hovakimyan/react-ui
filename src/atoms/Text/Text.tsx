// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

const Text = ({
    weight = 400,
    size = 'medium',
    color = 'secondaryExtraDark',
    align = 'center',
    noSelect = false,
    ellipsis = false,
    children,
    ...rest
}: Props) => {
    return (
        <Styled.Text
            {...rest}
            size={size}
            align={align}
            color={color}
            weight={weight}
            noSelect={noSelect}
            ellipsis={ellipsis}
        >
            {children}
        </Styled.Text>
    )
}

export default Text
