import React from 'react'
import { Button } from './index'
import Theme from 'theme'
import { storiesOf } from '@storybook/react'
import { text, select, boolean, withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'
import { buttonTypeOptions, buttonSizeOptions } from 'constants/options'

const stories = storiesOf('Atoms|Button', module)

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
            <Button
                // required
                type={select('Type', buttonTypeOptions, 'primary')}
                size={select('Size', buttonSizeOptions, 'medium')}
                onClick={console.log}
                // optional
                fit={boolean('Is Fit', false)}
                isFlat={boolean('Is Flat', false)}
                disabled={boolean('Disabled', false)}
            >
                {text('Label', 'BUTTON')}
            </Button>
        </div>
    </Theme>
))
