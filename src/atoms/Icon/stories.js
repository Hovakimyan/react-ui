import React from 'react'
import { Icon } from './index'
import { iconDefaults } from './Icon'
import { StyledContainer, StyledIconItem } from './styled-stories'
import { iconSizeOptions, colorOptions } from 'consts/options'
import { iconNames } from '@hovakimyan/icons'

import { select } from '@storybook/addon-knobs'

export const iconNameOptions = iconNames.reduce((acc, item) => {
    acc[item] = item
    return acc
}, {})

const sizeOptions = {
    ...iconSizeOptions,
    '40': 40,
    '60': 60,
}

export const Sample = () => (
    <Icon
        color={select('Color', colorOptions, iconDefaults.color)}
        name={select('Name', iconNameOptions, 'accessibility')}
        size={select('Size', sizeOptions, iconDefaults.size)}
    />
)

export const List = () => (
    <StyledContainer>
        {iconNames.map((item) => {
            return (
                <StyledIconItem key={item}>
                    {item}
                    <Icon name={item} size="huge" color="primaryDark" />
                </StyledIconItem>
            )
        })}
    </StyledContainer>
)
