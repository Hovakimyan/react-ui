import React from 'react'
import { Button } from './index'
import { text, select, boolean } from '@storybook/addon-knobs'
import { buttonTypeOptions, buttonSizeOptions } from 'consts/options'
console.dir(Button)
export const Sample = () => (
    <Button
        onClick={console.log}
        type={select('Type', buttonTypeOptions, 'primary')}
        size={select('Size', buttonSizeOptions, 'medium')}
        isFit={boolean('Is Fit', false)}
        isFlat={boolean('Is Flat', false)}
        disabled={boolean('Disabled', false)}
    >
        {text('Label', 'Hello from Story')}
    </Button>
)
