// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

export const textDefaults = {
    weight: 400,
    size: 'medium',
    align: 'center',
    color: 'secondaryExtraDark',
    hoverColor: 'secondarySemiDark',
}

const Text = ({
    weight = textDefaults.weight,
    size = textDefaults.size,
    color = textDefaults.color,
    align = textDefaults.align,
    noSelect = false,
    children,
    ...rest
}: Props): React$Element<HTMLDivElement> => {
    return (
        <Styled.Text
            {...rest}
            size={size}
            align={align}
            color={color}
            weight={weight}
            noSelect={noSelect}
        >
            {children}
        </Styled.Text>
    )
}

export default Text
