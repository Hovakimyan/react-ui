// @flow

import React from 'react'
import { StyledText } from './styled'
import type { Props } from './types'

export const textDefaults = {
    weight: 400,
    size: 'medium',
    align: 'center',
    color: 'secondaryExtraDark',
    hoverColor: 'secondarySemiDark'
}

const Text = (props: Props): React$Element<HTMLDivElement> => {
    const {
        weight = textDefaults.weight,
        size = textDefaults.size,
        color = textDefaults.color,
        align = textDefaults.align,
        noSelect = false,
        ...rest
    } = props

    return (
        <StyledText
            {...rest}
            size={size}
            align={align}
            color={color}
            weight={weight}
            noSelect={noSelect}
        >
            {props.children}
        </StyledText>
    )
}

export default Text
