import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
global.STORYBOOK_REACT_CLASSES = {}

import Theme from 'theme'

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
