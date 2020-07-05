import React from 'react'
import { Text } from './index'
import { fontSizeOptions, colorOptions } from 'consts/options'
import { select, boolean, text } from '@storybook/addon-knobs'

export const Sample = () => (
    <Text
        ellipsis={boolean('Ellipsis', false)}
        noSelect={boolean('Disable Select', false)}
        color={select<GlobalColorType>('Color', colorOptions, 'primaryDark')}
        size={select<FontSizeType>('Size', fontSizeOptions, 'medium')}
    >
        {text('Text', 'Hello Button')}
    </Text>
)