import React, { ChangeEvent, ReactElement, useState } from 'react'
import { Input } from './index'
import { boolean, select } from '@storybook/addon-knobs'
import { buttonSizeOptions } from 'consts/options'

export const Sample = (): ReactElement => {
    const [value, setValue] = useState('')
    return (
        <Input
            // required
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            value={value}
            placeholder="write text"
            size={select<SizeTypes>('Size', buttonSizeOptions, 'medium')}
            // optional
            isFit={boolean('Is isFit', false)}
            isFlat={boolean('Is Flat', false)}
            disabled={boolean('Disabled', false)}
        />
    )
}
