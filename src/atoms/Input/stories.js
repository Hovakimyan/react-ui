import React, { useState } from 'react'
import { Input } from './index'
import Theme from 'theme'
import { storiesOf } from '@storybook/react'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'
import { buttonSizeOptions } from 'constants/options'

const stories = storiesOf('Atoms|Input', module)

stories.addDecorator(withKnobs)
stories.addDecorator(jsxDecorator)

stories.add('Default', () => {
    const [value, setValue] = useState('')
    return (
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
                <Input
                    // required
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    placeholder="write text"
                    size={select('Size', buttonSizeOptions, 'medium')}
                    // optional
                    isFit={boolean('Is Fit', false)}
                    isFlat={boolean('Is Flat', false)}
                    disabled={boolean('Disabled', false)}
                />
            </div>
        </Theme>
    )
})
