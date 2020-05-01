// @flow

import React from 'react'
import * as Styled from './styled'
import { type IconProps } from './types'
import { iconSizes } from 'consts/sizes'
import icons from '@hovakimyan/icons'

export const iconDefaults = {
    size: 'medium',
    color: 'secondaryExtraDark'
}

const Icon = (props: IconProps) => {
    const {
        name,
        size = iconDefaults.size,
        color = iconDefaults.color,
        refHandler = () => {},
        onClick,
        className = '',
        title = ''
    } = props
    const iconSize = typeof size === 'number' ? `${size}px` : iconSizes[size]
    return (
        <Styled.Container
            aria-hidden={true}
            ref={refHandler}
            onClick={onClick}
            className={className}
            title={title}
            width={iconSize}
            fill={color}
            dangerouslySetInnerHTML={{ __html: icons[name] }}
        />
    )
}

export default Icon
