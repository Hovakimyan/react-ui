import React, { ReactElement } from 'react'
import { Loading } from './index'
import { select } from '@storybook/addon-knobs'
import { buttonSizeOptions, colorOptions } from '../../consts/options'

export const Sample = (): ReactElement => (
    <Loading
        size={select<SizeTypes>('Size', buttonSizeOptions, 'medium')}
        color={select<IGlobalColors>(
            'Color',
            colorOptions,
            'secondaryExtraDark'
        )}
    />
)
