import React from 'react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'

import Theme from 'theme'

addParameters({
    docs: {
        inlineStories: false,
    },
})

addDecorator(withKnobs)
addDecorator(jsxDecorator)

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
