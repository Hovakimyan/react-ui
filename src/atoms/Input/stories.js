import React, { useState } from 'react'
import { Input } from './index'
import { boolean, select } from '@storybook/addon-knobs'
import { buttonSizeOptions } from 'consts/options'

export const Sample = () => {
    const [value, setValue] = useState('')
    return (
        <Input
            // required
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="write text"
            size={select('Size', buttonSizeOptions, 'medium')}
            // optional
            isFit={boolean('Is Fit', false)}
            isFlat={boolean('Is Flat', false)}
            disabled={boolean('Disabled', false)}
        />
    )
}
