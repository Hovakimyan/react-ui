import React from 'react'
import { Paper } from './index'
import Theme from 'theme'
import { storiesOf } from '@storybook/react'
import { select, withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'
import { cornerOptions, shadowOptions } from 'consts/options'

const stories = storiesOf('Atoms|Paper', module)

stories.addDecorator(withKnobs)
stories.addDecorator(jsxDecorator)

stories.add('Default', () => (
    <Theme>
        <div
            style={{
                padding: '20px',
                boxSizing: 'border-box',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Paper
                corner={select('Corner', cornerOptions, 'rounded')}
                shadow={select('Shadow', shadowOptions, 'dense')}
            >
                Hello Paper
            </Paper>
        </div>
    </Theme>
))
