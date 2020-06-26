// @flow

import React from 'react'
import * as Styled from './styled'
import type { Props } from './types'
import { iconSizes } from 'consts/sizes'
import icons from '@hovakimyan/icons'

export const iconDefaults = {
    size: 'medium',
    color: 'secondaryExtraDark',
}

const Icon = (props: Props) => {
    const {
        name,
        size = iconDefaults.size,
        color = iconDefaults.color,
        refHandler = () => {},
        onClick,
        title = '',
        ...rest
    } = props
    const iconSize = typeof size === 'number' ? `${size}px` : iconSizes[size]
    return (
        <Styled.Container
            {...rest}
            aria-hidden={true}
            ref={refHandler}
            onClick={onClick}
            title={title}
            width={iconSize}
            fill={color}
            dangerouslySetInnerHTML={{ __html: icons[name] }}
        />
    )
}

export default Icon
