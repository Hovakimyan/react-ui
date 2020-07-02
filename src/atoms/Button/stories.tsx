import React, {ReactElement} from 'react'
import { Button } from './index'
import { text, select, boolean } from '@storybook/addon-knobs'
import { options } from 'consts'

export const Sample = (): ReactElement => (
    <Button
        onClick={console.log}
        type={select('Type', options.buttonTypeOptions, 'primary')}
        size={select('Size', options.buttonSizeOptions, 'medium')}
        isFit={boolean('Is Fit', false)}
        isFlat={boolean('Is Flat', false)}
        disabled={boolean('Disabled', false)}
    >
        {text('Label', 'Hello from Story')}
    </Button>
)
