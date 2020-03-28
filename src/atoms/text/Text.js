// @flow

import React from 'react'
import { StyledText } from './styled'
import type { Props } from './types'
import { defaults } from 'constants'

const Text = (props: Props): React$Element<HTMLDivElement> => {
    const {
        weight = defaults.textDefaults.weight,
        size = defaults.textDefaults.size,
        color = defaults.textDefaults.color,
        align = defaults.textDefaults.align,
        noSelect = false,
        ...rest
    } = props
    return (
        <StyledText
            size={size}
            align={align}
            color={color}
            weight={weight}
            noSelect={noSelect}
            {...rest}
        >
            {props.children}
        </StyledText>
    )
}

export default Text
