import React, { ReactElement } from 'react'
import { Paper } from './index'
import { select } from '@storybook/addon-knobs'
import { cornerOptions, shadowOptions } from 'consts/options'

export const Sample = (): ReactElement => (
    <Paper
        corner={select<ICardsCorners>('Corner', cornerOptions, 'rounded')}
        shadow={select<ICardsShadows>('Shadow', shadowOptions, 'dense')}
    >
        Hello Paper
    </Paper>
)
