import React, { ReactElement } from 'react'
import { Heading } from './index'
import { text, select, boolean } from '@storybook/addon-knobs'
import { headingOptions, colorOptions, fontSizeOptions } from 'consts/options'

export const Sample = (): ReactElement => (
    <Heading
        tag={select<HeadingTypes>('Heading', headingOptions, 'h1')}
        ellipsis={boolean('Ellipsis', false)}
        noSelect={boolean('Disable Select', false)}
        color={select<IGlobalColors>('Color', colorOptions, 'primaryDark')}
        size={select<FontSizeType>('Size', fontSizeOptions, 'medium')}
    >
        {text('Text', 'Hello from Story')}
    </Heading>
)
