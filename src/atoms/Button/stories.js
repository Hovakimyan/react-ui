import React from 'react'
import { Button } from './index'
import { text, select, boolean } from '@storybook/addon-knobs'
import { buttonTypeOptions, buttonSizeOptions } from 'consts/options'

export const Sample = () => (
    <Button
        // required
        type={select('Type', buttonTypeOptions, 'primary')}
        size={select('Size', buttonSizeOptions, 'medium')}
        onClick={console.log}
        // optional
        fit={boolean('Is Fit', false)}
        isFlat={boolean('Is Flat', false)}
        disabled={boolean('Disabled', false)}
    >
        {text('Label', 'Hello from Story')}
    </Button>
)
