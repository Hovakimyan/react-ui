import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
global.STORYBOOK_REACT_CLASSES = {}

import Theme from 'theme'

addParameters({
    docs: {
        inlineStories: false,
    },
})

addDecorator(withKnobs)

addDecorator((story) => (
    <Theme>
        <div
            style={{
                padding: '20px',
                boxSizing: 'border-box',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {story()}
        </div>
    </Theme>
))
