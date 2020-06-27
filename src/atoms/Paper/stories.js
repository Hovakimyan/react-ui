import React from 'react'
import { Paper } from './index'
import { select } from '@storybook/addon-knobs'
import { cornerOptions, shadowOptions } from 'consts/options'

export const Sample = () => (
    <Paper
        corner={select('Corner', cornerOptions, 'rounded')}
        shadow={select('Shadow', shadowOptions, 'dense')}
    >
        Hello Paper
    </Paper>
)
