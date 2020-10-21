import React from 'react'
import { Icon } from './index'
import { select, text } from '@storybook/addon-knobs'
import { iconNameOptions } from 'consts/options'

export const Sample = () => (
    <Icon
        title={text('Title', 'Hello from Title')}
        name={select<TIconNames>('name', iconNameOptions, 'email')}
    />
)
