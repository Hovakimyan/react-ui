// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

export const textDefaults = {
    tag: 'h1',
    weight: 400,
    size: 'medium',
    align: 'center',
    color: 'secondaryExtraDark',
    hoverColor: 'secondarySemiDark',
}

const Heading = ({
    weight = textDefaults.weight,
    size = textDefaults.size,
    color = textDefaults.color,
    align = textDefaults.align,
    noSelect = false,
    tag = textDefaults.tag,
    children,
    ...rest
}: Props) => {
    return (
        <Styled.Heading
            {...rest}
            size={size}
            align={align}
            color={color}
            weight={weight}
            noSelect={noSelect}
            tag={tag}
        >
            {children}
        </Styled.Heading>
    )
}

export default Heading
