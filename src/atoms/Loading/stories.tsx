import React from 'react'
import { Loading } from './index'
import { select } from '@storybook/addon-knobs'
import { buttonSizeOptions, colorOptions } from '../../consts/options'

export const Sample = () => (
    <Loading
        size={select<SizeTypes>('Size', buttonSizeOptions, 'medium')}
        color={select<IGlobalColors>(
            'Color',
            colorOptions,
            'secondaryExtraDark'
        )}
    />
)
