import React from 'react'
import { Icon } from './index'
import { select } from '@storybook/addon-knobs'
import { iconNameOptions } from 'consts/options'

export const Sample = () => <Icon name={select<TIconNames>('name', iconNameOptions, 'domain')} />
