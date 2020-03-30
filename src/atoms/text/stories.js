import React from 'react'
import { Text } from './index'
import Theme from 'theme'
import { fontSizeOptions, globalColorOptions } from 'constants/options'
import { storiesOf } from '@storybook/react'
import { select, boolean, text, withKnobs } from '@storybook/addon-knobs'

const stories = storiesOf('Atoms|Text', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => (
    <Theme>
        <Text
            ellipsis={boolean('Ellipsis', false)}
            noSelect={boolean('Disable Select', false)}
            color={select('Color', globalColorOptions, 'primaryDark')}
            size={select('Size', fontSizeOptions, 'medium')}
        >
            {text('Text', 'Hello Button')}
        </Text>
    </Theme>
))
