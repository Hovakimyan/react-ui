// @flow
// import { Preview, Meta, Props, Story, Source } from "@storybook/addon-docs/blocks";

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'

/**
 * Component for headers where you can choose which header tag you want to use
 */
const Heading = ({
    weight = 400,
    size = 'medium',
    color = 'secondaryExtraDark',
    align = 'center',
    noSelect = false,
    tag = 'h1',
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
