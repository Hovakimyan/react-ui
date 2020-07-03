import React, { ReactElement } from 'react'
import { Button } from './index'
import { text, select, boolean } from '@storybook/addon-knobs'
import { buttonTypeOptions, buttonSizeOptions } from 'consts/options'
console.dir(Button)
export const Sample = (): ReactElement => (
    <Button
        onClick={console.log}
        type={select<ThemeColorTypes>('Type', buttonTypeOptions, 'primary')}
        size={select<SizeTypes>('Size', buttonSizeOptions, 'medium')}
        isFit={boolean('Is Fit', false)}
        isFlat={boolean('Is Flat', false)}
        disabled={boolean('Disabled', false)}
    >
        {text('Label', 'Hello from Story')}
    </Button>
)
